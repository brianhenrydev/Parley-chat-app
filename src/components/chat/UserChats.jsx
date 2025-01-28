import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { getUserChats } from "../../services/chat/getUserChats"
import "./Chats.css"

const UserChats = () => {
  const [userChats, setUserChats] = useState([])
  const { currentUser } = useContext(UserContext)

  useEffect(() => {
    getUserChats(currentUser.id).then((chats) => setUserChats(chats))
  }, [currentUser.id])


  return (

    <>
      <div className="view-container">
        <div className="chat-container">
          {userChats.map(({ chat: { id, name } }) => (
            <div
              className="chat"
              key={id}
            >
              <Link
                to={`/chat/${id}`}
                id="user-chats"
                className="chat-name"
              >
                {name}
              </Link>
            </div>
          )
          )}
        </div>
      </div>
    </>

  )
}

export default UserChats
