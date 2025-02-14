import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const { handleLogin } = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email);
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <section className="bg-neutral m-auto w-96 rounded-2xl p-10">
        <form onSubmit={onSubmit} className="space-y-6">
          <h1 className="text-center text-4xl font-bold text-blue-400">Parley Chat</h1>
          <h2 className="text-center text-blue-500">Please sign in</h2>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
              placeholder="Email address"
              required
              autoFocus
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2 w-full">
            Sign in
          </button>
        </form>
        <p className="mt-4 text-center">
          Not a member yet?&nbsp;
          <Link to="/register" className="text-red-500 hover:text-red-300">
            Register
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Login;

