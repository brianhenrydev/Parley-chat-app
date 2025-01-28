
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllChats } from "../../services/chat/getAllChats";
import "./Chats.css"

const AllChats = () => {
  const [allChats, setAllChats] = useState([]);

  const getAndSetChats = () => {
    getAllChats().then(chats => setAllChats(chats));
  };


  useEffect(() => {
    getAndSetChats();
  }, []);


  return (
    <div className="view-container">
      <div className="chat-container">
        {allChats.map(({ id, name }) => (
          <div
            id=""
            key={id}
            className="chat"
          >
            <div >
              <Link
                to={`/chat/${id}`}
                className="chat-name"
              >
                {name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default AllChats
