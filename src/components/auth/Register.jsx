import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import createUser from "../../services/user/createUser";

const Register = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    tagline: "",
    moodEmoji: "",
  });
  const { handleLogin } = useContext(UserContext);

  const handleRegister = (e) => {
    e.preventDefault();
    createUser({ ...newUser }).then(() => {
      handleLogin(newUser.email);
    });
  };

  const updateUser = ({ target: { value, id } }) => {
    setNewUser({
      ...newUser,
      [id]: value,
    });
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <form onSubmit={handleRegister} className="bg-neutral m-auto w-96 rounded-2xl p-10">
        <h1 className="text-center text-4xl font-bold text-blue-500">Parley Chat</h1>
        <h2 className="text-center text-blue-400">Please Register</h2>
        <div className="space-y-6">
          <div className="form-control">
            <label className="label" htmlFor="firstName">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              id="firstName"
              className="input input-bordered w-full"
              placeholder="Enter your first name"
              required
              autoFocus
              onChange={updateUser}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="lastName">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="input input-bordered w-full"
              placeholder="Enter your last name"
              required
              onChange={updateUser}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              className="input input-bordered w-full"
              placeholder="Email address"
              required
              onChange={updateUser}
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="username">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              id="username"
              className="input input-bordered w-full"
              placeholder="Pick a username"
              required
              autoComplete="none"
              onChange={updateUser}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-4 w-full">
          Register
        </button>
        <p className="mt-4 text-center">
          Already have an account?&nbsp;
          <Link to="/login" className="text-red-500 hover:text-red-300">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Register;

