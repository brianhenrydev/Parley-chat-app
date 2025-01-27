
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllChats } from "../../services/chat/getAllChats";

const AllChats = () => {
  const [allChats, setAllChats] = useState([]);
  const navigate = useNavigate();

  const getAndSetChats = () => {
    getAllChats().then(chats => setAllChats(chats));
  };


  useEffect(() => {
    getAndSetChats();
  }, []);


  return (
    <div >
      <div >
        {allChats.map(({ id, name }) => (
          <div
            id=""
            key={id}

          >
            <div >
              <div >
                <Link to={`/chat/${id}`}

                >
                  {name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default AllChats
