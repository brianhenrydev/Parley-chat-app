import { aiApi } from "../axios";

const queryAi = (prompt, chatMessages) =>
	aiApi
		.post("/api/chat", {
			model: "llama3.2",
			messages: [
				{
					role: "user",
					content:
						"respond in formatted html for rendering within a div with tailwind styles",
				},
				{
					role: "user",
					content:
						"Please respond directly to my prompt, without including the conversation log.",
				},
				...chatMessages.map((message) => ({
					role: message.userId === 0 ? "assistant" : "user",
					content: message.body,
				})),
				{
					role: "user",
					content: prompt,
				},
			],
			stream: false,
		})
		.then((res) => res.data);

export default queryAi;
