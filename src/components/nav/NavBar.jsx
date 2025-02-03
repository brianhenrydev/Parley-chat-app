import { Link } from "react-router-dom"
import ThemeControl from "./ThemeControl"

const NavBar = () => {
  return (
    <div className="flex justify-center bg-white shadow-md">
      <div className="navbar w-11/12">
        <ol className="flex items-center justify-between p-4">
          <li>
            <Link to="/" className="nav-link font-semibold text-gray-400 hover:text-blue-600">
              My Chats
            </Link>
          </li>
          <div className="flex w-3/4 justify-evenly">
            <li>
              <Link to="/all-chats" className="nav-link font-semibold text-gray-400 hover:text-blue-600">
                All Chats
              </Link>
            </li>
            <li>
              <Link to="/new-chat" className="nav-link font-semibold text-gray-400 hover:text-blue-600">
                New Chat
              </Link>
            </li>
            <li>
              <Link to="/profile" className="nav-link font-semibold text-gray-400 hover:text-blue-600">
                Profile
              </Link>
            </li>
          </div>
          <li>
            <Link
              to="/login"
              onClick={() => localStorage.removeItem("chat_user")}
              className="nav-link rounded-lg bg-blue-900 p-4 font-semibold text-white hover:text-red-600"

            >
              Logout
            </Link>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default NavBar

const CompactNavBar = () => {
  return (
    <div className="flex justify-center bg-transparent">
      <div className="navbar w-11/12">
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

