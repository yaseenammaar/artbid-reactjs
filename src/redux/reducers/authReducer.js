import authConstants from "../constants/authConstants";

const INITIAL_STATE = {
    user: null,
    error: "no user found"
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case authConstants.SET_USER:
            return {...state, user: action.payload}

        case authConstants.SET_ERROR:
            return {...state, error: action.payload}

        case authConstants.RESET_AUTH_DATA_STATE:
            return INITIAL_STATE

        default:
            return state
    }
}

export default authReducer