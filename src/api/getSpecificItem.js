import apiRequest from "../logics/apiRequest";

const getSpecificItem = async (itemId) => {
    const api = `/item/${itemId}`
    return await apiRequest('get', api)
}

export default getSpecificItem