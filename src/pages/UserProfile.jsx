import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByUsername } from "../services/user/getUserByUsername";

const UserProfile = () => {
  const [user, setUser] = useState({})
  const { username } = useParams()


  useEffect(() => {
    getUserByUsername(username).then((user) => setUser(user))
  }, [username])
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-neutral text-primary rounded-2xl p-12">
        <div className="flex flex-col gap-1.5">
          <div className="text-4xl">{user.username}</div>
          <div>
            <span
              className="text-secondary"
            > first name: </span>{user.firstName}</div>
          <div><span
            className="text-secondary"
          > last name: </span>{user.lastName}</div>
          <div
            className=""
          ><span className="text-secondary">tagline: </span>{user.tagline}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;
