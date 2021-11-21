import authConstants from "../constants/authConstants";

const INITIAL_STATE = {
    user: null,
    isNewUser: null,
    takeProfileData: false,
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case authConstants.SET_USER:
            return {...state, user: action.payload}

        case authConstants.SET_IS_NEW_USER:
            return {...state, isNewUser: action.payload}

        case authConstants.SET_TAKE_PROFILE_DATA_TRUE:
            return {...state, takeProfileData: true}

        case authConstants.SET_TAKE_PROFILE_DATA_FALSE:
            return {...state, takeProfileData: false}

        case authConstants.RESET_AUTH_DATA_STATE:
            return INITIAL_STATE

        default:
            return state
    }
}

export default authReducer
