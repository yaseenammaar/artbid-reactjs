import {applyMiddleware, createStore} from "redux";
import globalStateReducer from "./globalStateReducer";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// The store now has the ability to accept thunk functions in `dispatch`
const reduxStore = createStore(globalStateReducer, composedEnhancer)

export default reduxStore
