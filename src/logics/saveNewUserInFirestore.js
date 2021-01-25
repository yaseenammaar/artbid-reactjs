import apiRequest from "./apiRequest";
import APIS from "../constants/Apis";

const saveNewUserInDb = async () => {
    try {
        return await apiRequest('post', APIS.PROTECTED_APIS.SAVE_NEW_USER_IN_DB, {}, 'json', true);
    } catch (e) {
        console.log(e)
        new Promise.reject(e)
    }
}