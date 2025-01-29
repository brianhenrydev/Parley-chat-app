const translateMessage = (text, targetLang) =>
	fetch("http://localhost:5200/translate", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ text: text, targetLang: targetLang }),
	}).then((res) => res.json());

export default translateMessage;
