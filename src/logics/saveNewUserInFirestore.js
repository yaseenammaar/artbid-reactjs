import apiRequest from "./apiRequest";
import APIS from "../constants/Apis";

const saveNewUserInDb = async (bio, city) => {
    try {
        const requestData = {
            bio,
            city
        }
        return await apiRequest('post', APIS.PROTECTED_APIS.SAVE_NEW_USER_IN_DB, requestData, 'json', true);
    } catch (e) {
        console.log(e)
        new Promise.reject(e)
    }
}