const queryAi = (prompt) =>
	fetch("http://localhost:11436/api/generate", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			model: "llama3.2",
			messages: ["you response should be in markdown format"],
			prompt: prompt,
			stream: false,
		}),
	}).then((res) => res.json());

export default queryAi;
