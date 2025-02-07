import { api } from "../axios";

export const deleteMessage = (messageId) =>
	api.delete(`messages/${messageId}`).then((res) => res.data);
