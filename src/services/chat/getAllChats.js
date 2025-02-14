import { api } from "../axios";

export const getAllChats = () => api.get("chats").then((res) => res.data);
