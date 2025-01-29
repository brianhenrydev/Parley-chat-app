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
    <div className="z-5 my-3 flex transform flex-col rounded-lg bg-gray-800 bg-opacity-50 p-4 shadow-md shadow-blue-950">
      <Link className="mb-1 font-bold text-blue-400 hover:text-red-500">
        <div className="">{user.username}  {user.moodEmoji}</div>
      </Link>
      {isEditing ? (
        <div className="mb-1 break-words text-gray-300">
          <textarea
            id={message.id}
            value={editedMessage?.body}
            onChange={({ target: { value } }) => setEditedMessage({ ...editedMessage, body: value })}
            className="h-20 w-full rounded-md border bg-gray-800 p-2 text-blue-200"
          ></textarea>
          <div className="mt-2 flex justify-end">
            <button
              onClick={handleSaveEdit}
              className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="rounded-md bg-red-400 px-4 py-2 hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="mb-1 break-words text-gray-300">{body}</div>
      )}
      <div className="text-xs text-gray-500">
        {new Date(timestamp).toLocaleString()}
      </div>
      {
        userId === currentUser.id && !isEditing ?
          <div className="">
            <div className="row float-end flex">
              <div className="flex-row text-right">
                <button
                  onClick={handleEdit}
                  className="mr-2 text-blue-400"
                >Edit
                </button>
              </div>
              <button
                onClick={() => handleDelete(id)}
                className="mr-2 text-red-500"
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

