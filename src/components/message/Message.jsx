
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserById } from "../../services/user/getUserById";
import { deleteMessage } from "../../services/message/deleteMessage"
import { editMessage } from "../../services/message/editMessage";

const Message = ({ message, currentUser, getAndSetChatMessages }) => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);

  const { id, userId, timestamp, body } = message

  const handleDelete = (id) => {
    deleteMessage(id).then(() => getAndSetChatMessages());
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    editMessage({ ...editedMessage }).then(() => {
      getAndSetChatMessages();
      setIsEditing(false);
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    getUserById(userId).then((user) => { setUser(user) });
  }, [userId]);

  return (
    <div className="">
      <Link className="">
        <div className="">{user.username}  {user.moodEmoji}</div>
      </Link>
      {isEditing ? (
        <div className="">
          <textarea
            id={message.id}
            value={editedMessage?.body}
            onChange={({ target: { value } }) => setEditedMessage({ ...editedMessage, body: value })}
            className=""
          ></textarea>
          <div className="">
            <button
              onClick={handleSaveEdit}
              className=""
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className=""
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="">{body}</div>
      )}
      <div className="">
        {new Date(timestamp).toLocaleString()}
      </div>
      {
        userId === currentUser.id && !isEditing ?
          <div className="">
            <div className="">
              <div className="">
                <button
                  onClick={handleEdit}
                  className=""
                >Edit
                </button>
              </div>
              <button
                onClick={() => handleDelete(id)}
                className=""
              >Delete
              </button>
            </div>
          </div>
          :
          <></>
      }
    </div>
  );
};

export default Message

