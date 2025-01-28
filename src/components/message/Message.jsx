import { deleteMessage } from "../../services/message/deleteMessage";
import { editMessage } from "../../services/message/editMessage";
import { getUserById } from "../../services/user/userServices"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <div >
      <Link >
        <div >{user.username}  {user.moodEmoji}</div>
      </Link>
      {isEditing ? (
        <div >
          <textarea
            id={message.id}
            value={editedMessage?.body}
            onChange={({ target: { value } }) => setEditedMessage({ ...editedMessage, body: value })}
          />
          <div >
            <button
              onClick={handleSaveEdit}
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div >{body}</div>
      )}
      <div >
        {new Date(timestamp).toLocaleString()}
      </div>
      {
        userId === currentUser.id && !isEditing ?
          <div >
            <div >
              <div >
                <button
                  onClick={handleEdit}
                >Edit
                </button>
              </div>
              <button
                onClick={() => handleDelete(id)}
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

