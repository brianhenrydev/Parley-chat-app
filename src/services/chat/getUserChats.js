import { api } from "../axios";
export const getUserChats = (userId) =>
	api.get(`chatUsers?userId=${userId}&_expand=chat`).then((res) => res.data);
