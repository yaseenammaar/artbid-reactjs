import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";

export default combineReducers({
  //all reducers go here
  auth: authReducer
})
