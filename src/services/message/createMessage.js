const createMessage = (message) =>
	fetch("http://localhost:8088/messages", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(message),
	}).then((res) => res.json());

export default createMessage;
