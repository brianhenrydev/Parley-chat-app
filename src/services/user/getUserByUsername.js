import { api } from "../axios";

export const getUserByUsername = (username) =>
	api.get(`users?username=${username}`).then((res) => res.data[0]);
