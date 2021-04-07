import apiRequest from "./apiRequest";
import APIS from "../constants/Apis";
import firebaseInstance from "../Firebase/index";

const getSearchSuggestions = async (searchText) => {

    try {

        const requestData = {
        searchText
        };

        const res = await apiRequest('post', APIS.PROTECTED_APIS.GET_SEARCH_SUGGESTIONS, requestData, 'application/json', true);
        return res.data.suggestions

        /*const db = firebaseInstance.firestore()
        const itemCollection = db.collection('keywords')

        const snapshots = await itemCollection
            .where("key_map", 'array-contains', searchText)
            .orderBy("score", 'desc')
            .limit(10)
            .get()

        let suggestions = []
        snapshots.forEach(snap => {
            suggestions.push(snap.id)
        })

        return suggestions*/
    } catch (e) {
        console.log(e.message)
    }

}

export default getSearchSuggestions