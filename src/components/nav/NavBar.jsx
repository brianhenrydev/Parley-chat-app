import { Link } from "react-router-dom"
import { ThemeContext } from "../../contexts/ThemeProvider"
import { useContext } from "react"

const NavBar = () => {
  const { theme, changeTheme, themes } = useContext(ThemeContext);
  return (
    <div className="fixed left-0 top-0 z-50 flex w-full justify-between p-2 shadow-md">
      <div>
        <Link to="/" className="btn btn-secondary">
          My Chats
        </Link>
      </div>
      <div>
        <Link to="/all-chats" className="btn btn-secondary">
          All Chats
        </Link>
      </div>
      <div>
        <Link to="/new-chat" className="btn btn-secondary">
          New Chat
        </Link>
      </div>
      <div>
        <Link to="/profile" className="btn btn-secondary">
          Profile
        </Link>
      </div>
      <li className="btn btn-secondary">
        <select
          defaultValue={theme}
          className="border-none focus:border-none"
          onChange={({ target: { value } }) => changeTheme(value)}
        >
          {
            themes.map(
              (t) =>
                <option key={t} value={t}>{t}</option>
            )
          }
        </select>
      </li>
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


const SlimNavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
          <li className="btn btn-outline">
            <button onClick={toggleTheme}>Theme</button>
          </li>
        </ol>
      </div >
    </div >
  )
}

export default NavBar
