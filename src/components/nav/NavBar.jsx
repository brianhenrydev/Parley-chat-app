import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <ol className="navbar">
        <li
          className="navbar-item"
        >
          <Link
            to="/"
          >
            My Chats
          </Link>
        </li>
        <li
          className="navbar-item"
        >
          <Link
            to="/all-chats"
          >
            All Chats
          </Link>
        </li>
        <li
          className="navbar-item"
        >
          <Link
            to="/new-chat"
          >
            New Chat
          </Link>
        </li>
        <li
          className="navbar-item"
        >
          <Link
            to="/profile"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            onClick={() => localStorage.removeItem("chat_user")}
          >
            Logout
          </Link>
        </li>
      </ol>
    </div >
  )
}
export default NavBar
