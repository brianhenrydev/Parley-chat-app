import { api } from "../axios";

export const updateUser = (user) =>
	api.put(`users/${user.id}`, user).then((res) => res.data);
