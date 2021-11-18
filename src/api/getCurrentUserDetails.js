import apiRequest from "../logics/apiRequest";

const getCurrentUserDetails = async () => {
    const apiUrl = '/user/currentUser'
    return await apiRequest("get", apiUrl)
}

export default getCurrentUserDetails