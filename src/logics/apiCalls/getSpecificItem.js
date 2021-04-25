import apiRequest from "../apiRequest";
import APIS from "../../constants/Apis";

const getSpecificItem = async (itemId) => {
    try {
        const requestData = {
            itemId
        }
        return apiRequest('post', APIS.PROTECTED_APIS.GET_SPECIFIC_ITEM, requestData, 'application/json', true)
    } catch (e) {
        console.log(e.message)

    }
}

export default getSpecificItem