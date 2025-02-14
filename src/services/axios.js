import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:8088",
});

export const aiApi = axios.create({
	baseURL: "http://localhost:11436",
});
