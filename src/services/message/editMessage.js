export const editMessage = (message) =>
	fetch(`http://localhost:8088/messages/${message.id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(message),
	}).then((res) => res.json());
