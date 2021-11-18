import { createStore } from "redux";
import globalStateReducer from "./globalStateReducer";

const reduxStore = createStore(globalStateReducer)

export default reduxStore
