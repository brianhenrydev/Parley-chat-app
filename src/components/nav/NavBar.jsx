import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link
          className="navbar-item"
          to="/"
        >
          My Chats
        </Link>
        <Link
          className="navbar-item"
          to="/all-chats"
        >
          All Chats
        </Link>
        <Link
          className="navbar-item"
          to="/new-chat"
        >
          New Chat
        </Link>
        <Link
          className="navbar-item"
          to="/profile"
        >
          Profile
        </Link>
        <Link
          className="navbar-item"
          to="/login"
          onClick={() => localStorage.removeItem("chat_user")}
        >
          Logout
        </Link>
      </div >
    </div >
  )
}
export default NavBar
