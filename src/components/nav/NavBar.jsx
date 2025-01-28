
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="flex justify-center bg-transparent">
      <div className="navbar w-11/12 bg-opacity-50">
        <ol className="row-auto flex justify-between">
          <li>
            <Link
              to="/"
              className="nav-link">
              My Chats
            </Link>
          </li>
          <div className="row-auto flex w-3/4 justify-evenly">
            <Link
              to="/all-chats"
              className="nav-link">
              <li>All Chats</li>
            </Link>
            <Link
              to="/new-chat"
              className="nav-link">
              <li> New Chat</li>
            </Link>
            <Link
              to="/profile"
              className="nav-link">
              <li> Profile</li>
            </Link>
          </div >
          <li>
            <Link
              to="/login"
              onClick={() => localStorage.removeItem("chat_user")}
              className="nav-link">
              Logout
            </Link>
          </li>
        </ol>
      </div >
    </div >
  )
}

export default NavBar

