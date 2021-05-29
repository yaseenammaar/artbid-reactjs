import apiRequest from "../logics/apiRequest";

const getSpecificItem = async (itemId) => {
    try {
        const api = `/item/${itemId}`
        const res = await apiRequest('get', api)
        return res.data
    } catch (e) {
        console.log(e.message)
    }
}

export default getSpecificItem