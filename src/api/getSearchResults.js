import apiRequest from "../logics/apiRequest";

const getSearchResults = async (searchText, method, lastDocId = null, limit = 10) => {
    try {
        const api = `/search/results/${searchText}?method=${method}&limit=${limit}&lastDocId=${lastDocId}`
        return apiRequest('get', api)
    } catch (e) {
        console.log(e.message)

    }
}

export default getSearchResults