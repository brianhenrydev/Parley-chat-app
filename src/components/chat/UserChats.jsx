import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { getUserChats } from "../../services/chat/getUserChats"
import SearchBar from "../search/SearchBar"
import { Link } from "react-router-dom"

const UserChats = () => {
  const [userChats, setUserChats] = useState([])
  const [filteredChats, setFilteredChats] = useState(userChats)
  const { currentUser } = useContext(UserContext)
  const [searchTerm, setSearchTerm] = useState("")

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


  return (
    <div className="flex h-screen flex-col pt-24">
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="mt-12 flex-1 overflow-y-scroll">
        {filteredChats.map(({ chat: { id, name } }) => (
          <div
            id="user-chats"
            key={id}
            className="mx-2 cursor-pointer"
          >
            <div className="mt-5 flex w-full items-center justify-between rounded-xl p-2 shadow-lg">
              <Link
                to={`/chat/${id}`}
                className="p-2 text-4xl">{name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserChats

