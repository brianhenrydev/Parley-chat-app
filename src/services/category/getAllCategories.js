import { api } from "../axios";

export const getAllCategories = () =>
	api.get("categories").then((res) => res.data);
