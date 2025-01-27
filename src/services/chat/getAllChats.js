export const getAllChats = () =>
	fetch("http://localhost:8088/chats").then((res) => res.json());
