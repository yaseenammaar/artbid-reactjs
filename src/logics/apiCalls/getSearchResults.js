import apiRequest from "../apiRequest";
import APIS from "../../constants/Apis";

const getSearchResults = async (searchText, method, startingDoc = null, limit = 10) => {
    try {
        const requestData = {
            searchText,
            method,
            startingDoc,
            limit
        }
        return apiRequest('post', APIS.PROTECTED_APIS.GET_SEARCH_RESULTS, requestData, 'application/json', true)
    } catch (e) {
        console.log(e.message)

    }
}

export default getSearchResults