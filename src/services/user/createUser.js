import { api } from "../axios";

const createUser = (userObj) =>
	api.post("users", userObj).then((res) => res.data);

export default createUser;
