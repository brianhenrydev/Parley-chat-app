import { LangSelect } from "../select/LangSelect"
import { MoodSelect } from "../select/MoodSelect"
const ProfileEditForm = ({ handleInput, handleProfileUpdate, updatedUser, selectedMood, onMoodChange, selectedLang, onLangChange }) => {
  return (
    <div className="flex h-full w-full justify-center">
      <form name="profile-edit"
        className="m-auto mt-44 rounded-lg bg-gray-800 p-8 shadow-sm shadow-gray-800 md:w-1/2 lg:w-1/4"
      >
        <div className="text-left text-4xl text-blue-500">
          Update Profile
        </div>
        <div className="mt-6">
          <div className="label">
            First name:
          </div>
          <div>
            <input
              name="firstName"
              onChange={handleInput}
              className="form-input"
              type="text"
              defaultValue={updatedUser.firstName}
            />
          </div>
          <div className="label">
            Last name:
          </div>
          <div>
            <input
              name="lastName"
              onChange={handleInput}
              className="form-input"
              type="text"
              defaultValue={updatedUser.lastName}
            />
          </div>
          <div className="label">
            Email:
          </div>
          <div>
            <input
              name="email"
              autoComplete="list"
              onChange={handleInput}
              className="form-input"
              type="text"
              defaultValue={updatedUser.email}
            />
          </div>
          <div className="label">
            Username:
          </div>
          <div>
            <input
              name="username"
              onChange={handleInput}
              className="form-input"
              type="text"
              autoComplete="none"
              defaultValue={updatedUser.username}
            />
          </div>
          <div>
            <MoodSelect selectedMood={selectedMood} onMoodChange={onMoodChange} />
          </div>
          <div>
            <LangSelect onLangChange={onLangChange} selectedLang={selectedLang} />
          </div>
        </div>
        <button
          onClick={handleProfileUpdate}
          className="float-right mt-6 rounded-lg bg-blue-500 p-2 text-gray-200 shadow-md shadow-black"
        >
          Update
        </button>
      </form>
    </div>
  )
}

export default ProfileEditForm
