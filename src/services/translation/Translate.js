import { langApi } from "../axios";

const translateMessage = (text, targetLang) =>
	langApi
		.post("translate", { text: text, targetLang: targetLang })
		.then((res) => res.data);

export default translateMessage;
