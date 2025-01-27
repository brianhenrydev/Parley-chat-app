import { getUserById } from "../../services/user/userServices"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Message = ({ message }) => {
  const [user, setUser] = useState({});

  const { userId, timestamp, body } = message

  useEffect(() => {
    getUserById(userId).then((user) => { setUser(user) });
  }, [userId]);

  return (
    <div >
      <Link >
        <div >{user.username}  {user.moodEmoji}</div>
      </Link>
      <div>{body}</div>
      <div >
        {new Date(timestamp).toLocaleString()}
      </div>
    </div>
  );
};

export default Message

