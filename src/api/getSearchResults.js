import apiRequest from "../logics/apiRequest";

const getSearchResults = async (searchText, method, lastDocId = null, limit = 10) => {
    const api = `/search/results/${searchText}?method=${method}&limit=${limit}&lastDocId=${lastDocId}`
    return await apiRequest('get', api)
}

export default getSearchResults