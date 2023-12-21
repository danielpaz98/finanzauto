import _axios from "axios";
// CONSTANTS
import { API_URL, API_ID } from "~/constants";

export const axios = _axios.create({
	baseURL: API_URL,
	headers: {
		"app-id": API_ID,
	},
});

export default axios;
