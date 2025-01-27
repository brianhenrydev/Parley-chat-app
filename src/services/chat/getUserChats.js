export const getUserChats = (userId) =>
	fetch(`http://localhost:8088/chatUsers?userId=${userId}&_expand=chat`).then(
		(res) => res.json(),
	);
