export const getMoods = () =>
	fetch("http://localhost:8088/moods").then((res) => res.json());
