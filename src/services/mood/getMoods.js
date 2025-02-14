import { api } from "../axios";

export const getMoods = () => api.get("moods").then((res) => res.data);
