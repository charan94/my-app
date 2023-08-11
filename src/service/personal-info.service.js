import { API_URL, apiCall } from "./api.service";


export const getUsersAPI = () => {
    const url = `${API_URL}/users`;
    return apiCall(url, "GET");
}

export const addUserAPI = (data) => {
    const url = `${API_URL}/users/add`;
    return apiCall(url, "POST", data);
}