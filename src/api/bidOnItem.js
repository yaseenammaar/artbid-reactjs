import apiRequest from "../logics/apiRequest";
import APIS from "../constants/Apis";

const bidOnItem = async (itemId, plusAmount) => {
    try {
        const requestData = {
            itemId,
            plusAmount
        }
        const res = await apiRequest('post', APIS.PROTECTED_APIS.BID_ON_ITEM, requestData, 'application/json', true)
        return res.data
    } catch (e) {
        console.log(e.message)

    }
}

export default bidOnItem