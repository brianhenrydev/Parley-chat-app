export const createUser = (userObj) =>
	fetch("http://localhost:8088/users", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(userObj),
	}).then((res) => res.json());
