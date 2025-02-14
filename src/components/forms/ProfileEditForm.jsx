import { MoodSelect } from "../select/MoodSelect"
const ProfileEditForm = ({ handleInput, handleProfileUpdate, updatedUser, selectedMood, onMoodChange }) => {
  return (
    <div className="flex h-full w-full justify-center">
      <form name="profile-edit"
        className="bg-neutral m-auto mt-44 rounded-lg p-10 shadow-2xl md:w-1/2 lg:w-1/4"
      >
        <div className="text-left text-4xl">
          Update Profile
        </div>
        <div className="mt-6">
          <div className="">
            First name:
          </div>
          <div>
            <input
              name="firstName"
              onChange={handleInput}
              className="input w-full"
              type="text"
              defaultValue={updatedUser.firstName}
            />
          </div>
          <div className="">
            Last name:
          </div>
          <div>
            <input
              name="lastName"
              onChange={handleInput}
              className="input w-full"
              type="text"
              defaultValue={updatedUser.lastName}
            />
          </div>
          <div className="">
            Email:
          </div>
          <div>
            <input
              name="email"
              autoComplete="list"
              onChange={handleInput}
              className="input w-full"
              type="text"
              defaultValue={updatedUser.email}
            />
          </div>
          <div className="">
            Username:
          </div>
          <div>
            <input
              name="username"
              onChange={handleInput}
              className="input w-full"
              type="text"
              autoComplete="none"
              defaultValue={updatedUser.username}
            />
          </div>
          <div>
            <MoodSelect selectedMood={selectedMood} onMoodChange={onMoodChange} />
          </div>
        </div>
        <button
          onClick={handleProfileUpdate}
          className="btn btn-primary float-right mt-6 w-full rounded-lg shadow-md"
        >
          Update
        </button>
      </form>
    </div>
  )
}

export default ProfileEditForm
