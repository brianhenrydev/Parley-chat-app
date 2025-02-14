
import { UserContext } from "./UserContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUserByEmail } from "../services/user/userServices"

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("chat_user")) || {
    id: 0,
    full_name: "",
    user_name: '',
    email: "",
    permissionsId: 3,
    mood: ""
  })
  const navigate = useNavigate()


  const handleLogin = (email) => {
    getUserByEmail(email).then(([user]) => {
      if (user) {
        setCurrentUser(user)
        localStorage.setItem("chat_user", JSON.stringify(user))
        navigate("/")
      } else {
        window.alert("Invalid Login")
      }
    })
  }

  const updateCurrentUser = (userData) => {
    setCurrentUser({
      ...userData,
    })
    localStorage.setItem("chat_user", JSON.stringify(userData))
  }

  return (
    <UserContext.Provider value={{ currentUser, handleLogin, updateCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
