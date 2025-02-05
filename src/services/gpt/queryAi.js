const queryAi = (prompt, chatMessages) =>
	fetch("http://localhost:11436/api/chat", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
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
		}),
	})
		.then((res) => res.json())
		.catch((error) => {
			console.error("Error:", error);
		});

export default queryAi;
