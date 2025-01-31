const getLanguages = () =>
	fetch("http://localhost:8088/languages").then((res) => res.json());

export default getLanguages;
