import { api } from "../axios";

export const createNewChat = (newChat) =>
	api.post("chats/", newChat).then((res) => res.date);
