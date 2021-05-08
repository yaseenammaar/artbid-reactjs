import apiRequest from "../logics/apiRequest";
import APIS from "../constants/Apis";

const messageOnItem = async (itemId, message) => {
    try {
        const requestData = {
            itemId,
            message
        }
        const res = await apiRequest('post', APIS.PROTECTED_APIS.MESSAGE_ON_ITEM, requestData, 'application/json', true)
        return res.data
    } catch (e) {
        console.log(e.message)

    }
}

export default messageOnItem