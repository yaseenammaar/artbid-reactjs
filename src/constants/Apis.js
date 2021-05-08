export const PROTECTED_APIS = {
    ITEM_UPLOAD: 'itemUpload',
    SAVE_NEW_USER_IN_DB: 'saveNewUserInDb',
    GET_SEARCH_RESULTS: 'getSearchResults',
    UPDATE_USER_DATA: 'updateUserData',
    GET_FIRESTORE_RECORD: 'getFirestoreRecord',
    TOGGLE_FOLLOW_UNFOLLOW: 'toggleFollowUnfollow',
    SAVE_ITEM_FOR_USER: 'saveItemForUser',
    GET_SPECIFIC_ITEM: 'getSpecificItem',
    GET_SEARCH_SUGGESTIONS: 'getSearchSuggestions',
    MESSAGE_ON_ITEM: 'messageOnItem',
    BID_ON_ITEM: 'bid',
}

export const UNPROTECTED_APIS = {

}

const APIS = {
    PROTECTED_APIS,
    UNPROTECTED_APIS
}

export default APIS;