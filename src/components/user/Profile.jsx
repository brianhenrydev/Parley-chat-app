import { useContext, useState } from "react"
import { updateUser } from "../../services/user/updateUser"
import { UserContext } from "../../contexts/UserContext"
import ProfileEditForm from "../forms/ProfileEditForm"

const Profile = () => {
  const { currentUser, updateCurrentUser } = useContext(UserContext)
  const [updatedUser, setUpdatedUser] = useState(currentUser)


  const handleInput = ({ target: { name, value } }) => {
    setUpdatedUser({
      ...updatedUser,
      [name]: value

    })
  }

  const handleProfileUpdate = (e) => {
    e.preventDefault()
    updateUser({ ...updatedUser })
      .then(() => {
        updateCurrentUser({ ...updatedUser })
      })
      .then(() => window.alert("Profile Updated"))
  }
  return (
    <div >
      <ProfileEditForm
        handleProfileUpdate={handleProfileUpdate}
        handleInput={handleInput}
        updatedUser={updatedUser}
      />
    </div>
  )
}




export default Profile
