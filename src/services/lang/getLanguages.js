import { api } from "../axios";

const getLanguages = () => api.get("languages").then((res) => res.data);

export default getLanguages;
