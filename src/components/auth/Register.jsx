
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { createUser } from "../../services/user/createUser"

export const Register = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    tagline: "",
    moodEmoji: ""
  })
  let navigate = useNavigate()
  const { handleLogin } = useContext(UserContext)


  const handleRegister = (e) => {
    e.preventDefault()
    createUser({ ...newUser }).then(() => {
      handleLogin(newUser.email)
    })
  }

  const updateUser = ({ target: { value, id } }) => {
    setNewUser({
      ...newUser,
      [id]: value
    })
  }

  return (
    <main className="flex w-full">
      <form className="floating-form mt-44" onSubmit={handleRegister}>
        <h1
          className="text-center text-4xl text-blue-500 font-bold mb-4"
        >
          Parley Chat
        </h1>
        <h2
          className="text-blue-400"
        >
          Please Register
        </h2>
        <div >
          <fieldset className="mb-2">
            <div
              className="">
              <input
                onChange={updateUser}
                type="text"
                id="firstName"
                className="input"
                placeholder="Enter your first name"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset className="mb-2">
            <div
              className="">
              <input
                onChange={updateUser}
                type="text"
                id="lastName"
                className="input"
                placeholder="Enter your last name"
                required
              />
            </div>
          </fieldset>
          <fieldset className="mb-2">
            <div>
              <input
                onChange={updateUser}
                type="email"
                id="email"
                autoComplete="email"
                className="input"
                placeholder="Email address"
                required
              />
            </div>
          </fieldset>
          <fieldset className="my-6">
            <div
              className="">
              <input
                onChange={updateUser}
                type="text"
                id="username"
                className="input"
                placeholder="pick a username"
                required
                autoComplete="none"
              />
            </div>
          </fieldset>
        </div>
        <fieldset className="auth-fieldset">
          <div>
            <button
              className="btn-blue"
              type="submit">Register</button>
          </div>
        </fieldset>

      </form>
    </main>
  )
}
