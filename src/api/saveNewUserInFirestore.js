import apiRequest from "../logics/apiRequest";

const saveNewUserInDb = async (bio, city) => {
    const api = "/user"
    const requestData = {
        bio: bio,
        city: city,
    }
    return await apiRequest('post', api, requestData);

}

export default saveNewUserInDb