import { api } from "../axios";

const createMessage = (message) =>
	api.post("messages", message).then((res) => res.data);

export default createMessage;
