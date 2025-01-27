export const createNewChat = (newChat) =>
	fetch("http://localhost:8088/chats", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(newChat),
	}).then((res) => res.json());
