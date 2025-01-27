export const getUserByEmail = (email) =>
	fetch(`http://localhost:8088/users?email=${email}`).then((res) => res.json());
