const ProfileEditForm = ({ handleInput, handleProfileUpdate, updatedUser }) => {
  return (
    <form name=""

    >
      <div >
        Profile
      </div>
      <div >
        <div >
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
        <div >
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
        <div >
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
        <div >
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
      </div>
      <button
        onClick={handleProfileUpdate}

      >
        Update
      </button>
    </form>
  )
}

export default ProfileEditForm
