import authConstants from "../constants/authConstants";

export const setUser = data => (
    {
        type: authConstants.SET_USER,
        payload: data,
    }
);

export const setError = data => (
    {
        type: authConstants.SET_ERROR,
        payload: data,
    }
);

export const resetAuthData = data => (
    {
        type: authConstants.RESET_AUTH_DATA_STATE,
        payload: data,
    }
);
