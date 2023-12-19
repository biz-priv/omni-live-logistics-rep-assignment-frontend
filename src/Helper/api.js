import { apiConfig } from "./config";

export const DashboardSearchRequest = async () => {
	try {
    let path = "/getdat";  
	const response = await apiConfig.get(path);
    	return { data:response.data};
	} catch (error) {
        console.error(error);
	}
};

export const ToggleSelect = async (params) => {
	try {
		await apiConfig.post("/toggle", params);
	} catch (error) {
		console.error(error);
	}
};
