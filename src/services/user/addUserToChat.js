export const addUserToChat = (newChatUser) =>
	fetch("http://localhost:8088/chatUsers/", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(newChatUser),
	}).then((res) => res.json());
