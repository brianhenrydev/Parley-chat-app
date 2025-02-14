import { api } from "../axios";

export const getUserById = (userId) =>
	api.get(`users/${userId}`).then((res) => res.data);
