import apiRequest from "../logics/apiRequest";

const saveNewUserInDb = async (bio, city) => {
    try {
        const api = "/user"
        const requestData = {
            bio: bio,
            city: city,
        }
        return await apiRequest('post', api, requestData);
    } catch (e) {
        console.log(e)
        new Promise.reject(e)
    }
}

export default saveNewUserInDb