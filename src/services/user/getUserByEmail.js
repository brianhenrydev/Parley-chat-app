import { api } from "../axios";

const getUserByEmail = (email) =>
	api.get(`users?email=${email}`).then((res) => res.data);

export default getUserByEmail;
