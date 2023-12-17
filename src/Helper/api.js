import { apiConfig } from "./config";

export const DashboardSearchRequest = async () => {
	try {
    let path = "/getdat";  
	const response = await apiConfig.get(path);
        console.log("Data",response.data)
    	return { data:response.data};
	} catch (error) {
        console.log("dashboarderror")
	}
};

export const ToggleSelect = async (params) => {
	try {
		const response = await apiConfig.post("/toggle", params);
        console.log("responsetoggle",response);
	} catch (error) {
		console.log(error);
	}
};
