import { Link } from "react-router-dom"
import { ThemeSelect } from "./ThemeControl"

const NavBar = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex w-full justify-between p-2">
      <div>
        <Link to="/" className="btn btn-secondary sm:text-sm">
          My Chats
        </Link>
      </div>
      <div>
        <Link to="/all-chats" className="btn btn-secondary sm:text-sm">
          All Chats
        </Link>
      </div>
      <div>
        <Link to="/new-chat" className="btn btn-secondary sm:text-sm">
          New Chat
        </Link>
      </div>
      <div>
        <Link to="/profile" className="btn btn-secondary sm:text-sm">
          Profile
        </Link>
      </div>
      <div className="btn btn-secondary">
        <ThemeSelect />
      </div>
      <div>
        <Link
          to="/login"
          onClick={() => localStorage.removeItem("chat_user")}
          className="btn btn-warning"
        >
          Logout
        </Link>
      </div>

    </div>
  )
}



export default NavBar
