import { useEffect, useState, useContext, useCallback } from "react";
import { getAllChats } from "../services/chat/getAllChats"
import { Link, useNavigate } from "react-router-dom";
import { getUserChats } from "../services/chat/getUserChats"
import SearchBar from "../components/search/SearchBar";
import { UserContext } from "../contexts/UserContext"
import { addUserToChat } from "../services/user/addUserToChat"

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
            className="bg-neutral mx-2 cursor-pointer rounded-2xl"
          >
            <div className="mt-5 w-full rounded-xl p-2 align-middle shadow-lg">
              <div className="w-full flex-col">
                <Link to={`/chat/${id}`}
                  className="text-secondary p-2 text-4xl"
                >
                  {name}
                </Link>
                {
                  !currentUserChats.find(({ chat: { id: chatId } }) => chatId === id) ?
                    <button
                      onClick={() => handleJoin(id, currentUser.id)}
                      className="float-end rounded-xl px-3 py-2 shadow-2xl">
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
