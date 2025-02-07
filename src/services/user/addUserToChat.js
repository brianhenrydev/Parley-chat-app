import { api } from "../axios";

export const addUserToChat = (newChatUser) =>
	api.post("chatUsers", newChatUser).then((res) => res.data);
