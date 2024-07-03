/* 
* File: src\Helper\api.js
* Project: Omni-Live-logistics-rep-assignment
* Author: Bizcloud Experts
* Date: 2024-01-12
* Confidential and Proprietary
*/
import { apiConfig } from "./config";

export const DashboardSearchRequest = async () => {
	try {
    let path = "/getdata";  
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
