import { useContext, useState } from "react"
import { updateUser } from "../services/user/updateUser"
import { UserContext } from "../contexts/UserContext"
import ProfileEditForm from "../components/forms/ProfileEditForm"

const Profile = () => {
  const { currentUser, updateCurrentUser } = useContext(UserContext)
  const [updatedUser, setUpdatedUser] = useState(currentUser)
  const [selectedMood, setSelectedMood] = useState(currentUser.moodEmoji)


  const handleInput = ({ target: { name, value } }) => {
    setUpdatedUser({
      ...updatedUser,
      [name]: value

    })
  }
  const handleMoodChange = (e) => {
    setSelectedMood(e.target.value)
    handleInput(e)
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
        selectedMood={selectedMood}
        onMoodChange={handleMoodChange}
      />
    </div>
  )
}




export default Profile
