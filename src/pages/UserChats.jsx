import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"
import { getUserChats } from "../services/chat/getUserChats"
import SearchBar from "../components/search/SearchBar"

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

  return (
    <div>
      <div >
        <SearchBar setSearchTerm={setSearchTerm} />
        <div >
          {filteredChats.map(({ chat: { id, name } }) => (
            <div
              id="user-chats"
              key={id}
              onClick={() => navigate(`/chat/${id}`)}
            >
              <div >
                <div>{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
export default UserChats
