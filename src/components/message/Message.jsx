import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteMessage } from "../../services/message/deleteMessage";
import { editMessage } from "../../services/message/editMessage";
import translateMessage from "../../services/translation/Translate";
import { getUserById } from "../../services/user/userServices"
import parse from 'html-react-parser';

const Message = ({ message, currentUser, getAllChatMessages, translate }) => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);
  const { id, userId, timestamp, body } = message;
  const [translatedBody, setTranslatedBody] = useState(body)

  const handleDelete = (id) => {
    deleteMessage(id).then(() => getAllChatMessages());
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    editMessage({ ...editedMessage }).then(() => {
      getAllChatMessages();
      setIsEditing(false);
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    getUserById(userId).then((user) => { setUser(user) });
  }, [userId]);

  useEffect(() => {
    if (!translate) {
      setTranslatedBody(body)
    } else {
      translateMessage(body, currentUser.preferredLang)
        .then(({ translatedText }) =>
          setTranslatedBody(translatedText))
    }
  }, [body, currentUser.preferredLang]);

  return message.userId === 0 ? (
    <div className="chat chat-start my-1.5 flex flex-col space-y-2">
      <div className="flex">
        <Link className="link link-primary">
          <div className="flex items-center">
            <span className="chat-header mr-2 text-lg">chatbot</span>
            <span className="chat-header text-lg">🤖</span>
          </div>
        </Link>
      </div>
      <div className="flex">
        <div className="chat-bubble">
          {parse(translatedBody)}
        </div>
      </div>
      <div className="flex">
        <div className="text-xs text-gray-500">
          {new Date(timestamp).toLocaleString()}
        </div>
      </div>
    </div>
  ) : (
    <div className="chat chat-end flex flex-col space-y-2">
      <div className="flex justify-end">
        <Link className="link link-primary">
          <div className="flex items-center">
            <span className="chat-header mr-2 text-lg">
              {user.username}
            </span>
            <span className="text-lg">{user.moodEmoji}</span>
          </div>
        </Link>
      </div>
      {
        isEditing ? (
          <div className="flex justify-end">
            <div className="w-full">
              <textarea
                id={message.id}
                value={editedMessage?.body}
                onChange={({ target: { value } }) => setEditedMessage({ ...editedMessage, body: value })}
                className="w-full"
              ></textarea>
              <div className="mt-2 flex justify-end">
                <button
                  onClick={handleSaveEdit}
                  className="btn btn-primary mr-2"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-end">
            <div className="chat-bubble">
              {translatedBody}
            </div>
          </div>
        )
      }
      <div className="flex justify-end">
        {
          userId === currentUser.id && !isEditing ?
            <div className="flex justify-end">
              <div className="flex justify-end">
                <button
                  onClick={handleEdit}
                  className="btn mr-2"
                >Edit
                </button>
                <button
                  onClick={() => handleDelete(id)}
                  className="btn"
                >Delete
                </button>
              </div>
            </div>
            :
            <></>
        }
      </div>
      <div className="text-xs text-gray-500">
        {new Date(timestamp).toLocaleString()}
      </div>
    </div>
  );
};

export default Message;

