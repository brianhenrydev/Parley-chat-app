

import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

const Login = () => {
  const [email, set] = useState("")
  const { handleLogin } = useContext(UserContext)

  const onSubmit = (e) => {
    e.preventDefault()
    handleLogin(email)

  }


  return (
    <main className="w-full">
      <div className="mt-44 flex">
        <section
          className="floating-form">
          <form className="auth-form" onSubmit={onSubmit}>
            <h1 className="mb-4 text-center text-4xl font-bold text-blue-400">Parley Chat</h1>
            <h2
              className="text-blue-500"
            >Please sign in</h2>
            <fieldset className="auth-fieldset">
              <div>
                <input
                  className="input"
                  type="email"
                  id="email"
                  autoComplete="email"
                  value={email}
                  onChange={({ target: { value } }) => set(value)}
                  placeholder="Email address"
                  required
                  autoFocus
                />
              </div>
            </fieldset>
            <fieldset >
              <div>
                <button
                  className="btn-blue"
                  type="submit">Sign in</button>
              </div>
            </fieldset>
          </form>
          <section className="register-link">
            <Link
              className="text-red-500 hover:text-red-300"
              to="/register">Not a member yet?</Link>
          </section>
        </section>
      </div>
    </main>
  )
}

export default Login
