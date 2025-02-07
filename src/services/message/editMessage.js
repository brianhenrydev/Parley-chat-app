import { api } from "../axios";

export const editMessage = (message) =>
	api.put(`messages/${message.id}`, message).then((res) => res.data);
