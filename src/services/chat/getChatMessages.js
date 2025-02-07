import { api } from "../axios";

const getChatMessages = (chatId) =>
	api.get(`messages?chatId=${chatId}`).then((res) => res.data);

export default getChatMessages;
