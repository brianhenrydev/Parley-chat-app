import { useEffect, useState, useContext, useCallback } from "react";
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

  const getAndSetChats = useCallback(() => {
    getAllChats().then(chats => setAllChats(chats));
    getUserChats(currentUser.id).then((userChats) => setCurrentUserChats(userChats))
  }, [currentUser.id])
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
  }, [getAndSetChats]);

  return (
    <div className="flex h-screen flex-col pt-24">
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="mt-2 flex-1 overflow-y-scroll">
        {filteredChats.map(({ id, name }) => (
          <div
            id="user-chats"
            key={id}
            className="mx-2 cursor-pointer shadow-2xl shadow-transparent"
          >
            <div className="mt-5 w-full rounded-xl bg-blue-950 bg-opacity-25 p-2 align-middle">
              <div className="w-full flex-col">
                <Link to={`/chat/${id}`}
                  className="text-4xl text-blue-300 p-2 hover:text-blue-400"
                >
                  {name}
                </Link>
                {
                  !currentUserChats.find(({ chat: { id: chatId } }) => chatId === id) ?
                    <button
                      onClick={() => handleJoin(id, currentUser.id)}
                      className="float-end rounded-xl bg-blue-500 px-3 py-2 shadow-2xl shadow-black">
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
