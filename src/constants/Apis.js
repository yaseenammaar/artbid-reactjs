export const PROTECTED_APIS = {
    ITEM_UPLOAD: 'itemUpload',
    SAVE_NEW_USER_IN_DB: 'saveNewUserInDb',
    SEARCH_ITEMS: 'searchItems',
    UPDATE_USER_DATA: 'updateUserData',
    GET_FIRESTORE_RECORD: 'getFirestoreRecord',
    TOGGLE_FOLLOW_UNFOLLOW: 'toggleFollowUnfollow',
    SAVE_ITEM_FOR_USER: 'saveItemForUser',
    GET_ITEMS: 'getItems',
    GET_SEARCH_SUGGESTIONS: 'getSearchSuggestions',
}

export const UNPROTECTED_APIS = {

}

const APIS = {
    PROTECTED_APIS,
    UNPROTECTED_APIS
}

export default APIS;