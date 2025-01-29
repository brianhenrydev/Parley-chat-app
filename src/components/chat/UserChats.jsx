import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { getUserChats } from "../../services/chat/getUserChats"
import SearchBar from "../search/SearchBar"
import { Link, useNavigate } from "react-router-dom"

const UserChats = () => {
  const [userChats, setUserChats] = useState([])
  const [filteredChats, setFilteredChats] = useState(userChats)
  const { currentUser } = useContext(UserContext)
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    getUserChats(currentUser.id).then((chats) => setUserChats(chats))
  }, [currentUser.id])

  useEffect(() => {
    const filteredChats = userChats.filter(({ chat: { name } }) => {
      const nameLower = name.toLowerCase()
      const searchTermLower = searchTerm.toLowerCase()
      return nameLower.includes(searchTermLower)
    })
    setFilteredChats(filteredChats)
  }, [searchTerm, userChats])

  const handleLeaveChat = (chatId) => {
    console.log(`chatId:${chatId}`);
  }

  return (
    <div className="flex h-screen flex-col pt-24">
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="mt-12 flex-1 overflow-y-scroll">
        {filteredChats.map(({ chat: { id, name } }) => (
          <div
            id="user-chats"
            key={id}
            className="mx-2 cursor-pointer shadow-2xl shadow-transparent"
          >
            <div className="mt-5 flex w-full items-center justify-between rounded-xl bg-blue-950 p-2">
              <Link
                to={`/chat/${id}`}
                className="p-2 text-4xl text-blue-300 hover:text-blue-400">{name}</Link>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleLeaveChat(id);
                }}
                className="ml-4 rounded-xl bg-red-600 p-2 text-white"
              >
                Leave Chat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserChats

