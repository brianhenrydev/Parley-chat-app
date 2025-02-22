import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteMessage } from "../../services/message/deleteMessage";
import { editMessage } from "../../services/message/editMessage";
import { getUserById } from "../../services/user/userServices"
import parse from 'html-react-parser';

const Message = ({ message, currentUser, getAllChatMessages }) => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);
  const { id, userId, timestamp, body } = message;

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


  return message.userId === 0 ? (
    <div className="chat chat-end my-1.5 flex flex-col space-y-2">
      <div className="">
        <Link className="link link-primary">
          <div className="flex items-center">
            <span className="chat-header text-secondary mr-2 text-lg">chatbot 🤖</span>
          </div>
        </Link>
      </div>
      <div className="flex">
        <div className="chat-bubble chat-bubble-secondary">
          {parse(body)}
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
        <Link
          to={`/u/${user.username}`}
          className="link link-primary"
        >
          <div className="flex items-center">
            <span className="chat-header text-primary mr-2 text-lg">
              {user.username}
            </span>
            <span className="text-lg">{user.moodEmoji}</span>
          </div>
        </Link>
      </div>
      {
        isEditing ? (
          <div className="chat-end flex">
            <div className="">
              <textarea
                id={message.id}
                value={editedMessage?.body}
                onChange={({ target: { value } }) => setEditedMessage({ ...editedMessage, body: value })}
                className="chat-bubble chat-bubble-primary"
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
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-primary">
              {body}
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

