export const deleteMessage = (messageId) =>
	fetch(`http://localhost:8088/messages/${messageId}`, {
		method: "DELETE",
	}).then((res) => res.json());
