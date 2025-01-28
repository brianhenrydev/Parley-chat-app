import { useEffect, useState, useContext } from "react";
import { getAllChats } from "../../services/chat/getAllChats"
import { Link, useNavigate } from "react-router-dom";
import { getUserChats } from "../../services/chat/getUserChats"
import SearchBar from "../search/SearchBar";
import { UserContext } from "../../contexts/UserContext"
import { addUserToChat } from "../../services/user/addUserToChat"

const AllChats = () => {
  const [allChats, setAllChats] = useState([]);
  const [currentUserChats, setCurrentUserChats] = useState([]);
  const [filteredChats, setFilteredChats] = useState(allChats)
  const { currentUser } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate();

  const getAndSetChats = () => {
    getAllChats().then(chats => setAllChats(chats));
    getUserChats(currentUser.id).then((userChats) => setCurrentUserChats(userChats))
  };
  const handleJoin = (id, userId) => {
    addUserToChat({ chatId: id, userId: userId })
      .then(() => navigate("/"))

  }

  useEffect(() => {
    const filteredChats = allChats.filter(({ name }) => {
      const nameLower = name.toLowerCase()
      const searchTermLower = searchTerm.toLowerCase()
      return nameLower.includes(searchTermLower)
    })
    setFilteredChats(filteredChats)
  }, [searchTerm, allChats])

  useEffect(() => {
    getAndSetChats();
  }, []);


  return (
    <div >
      <SearchBar setSearchTerm={setSearchTerm} />
      <div >
        {filteredChats.map(({ id, name }) => (
          <div
            id="user-chats"
            key={id}
          >
            <div >
              <div >
                <Link to={`/chat/${id}`}
                >
                  {name}
                </Link>
                {
                  !currentUserChats.find(({ chat: { id: chatId } }) => chatId === id) ?
                    <button
                      onClick={() => handleJoin(id, currentUser.id)}
                    >
                      Join</button>
                    :
                    ""
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default AllChats
