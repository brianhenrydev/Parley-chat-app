import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { getUserChats } from "../../services/chat/getUserChats"

const UserChats = () => {
  const [userChats, setUserChats] = useState([])
  const { currentUser } = useContext(UserContext)

  useEffect(() => {
    getUserChats(currentUser.id).then((chats) => setUserChats(chats))
  }, [currentUser.id])


  return (
    <div>

      <div >
        <div >
          {userChats.map(({ chat: { id, name } }) => (
            <Link
              to={`/chat/${id}`}
              id="user-chats"
              key={id}
            >
              <div >
                <div >
                  <div >{name}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}

export default UserChats
