import apiRequest from "../logics/apiRequest";
import APIS from "../constants/Apis";

const getSpecificItem = async (itemId) => {
    try {
        const requestData = {
            itemId
        }
        const res = await apiRequest('post', APIS.PROTECTED_APIS.GET_SPECIFIC_ITEM, requestData, 'application/json', true)
        return res.data
    } catch (e) {
        console.log(e.message)

    }
}

export default getSpecificItem