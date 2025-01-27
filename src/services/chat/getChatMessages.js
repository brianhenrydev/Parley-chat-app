const getChatMessages = (chatId) =>
	fetch(`http://localhost:8088/messages?chatId=${chatId}`).then((res) =>
		res.json(),
	);
export default getChatMessages;
