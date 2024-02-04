import { combineReducers } from "redux"
import authReducers from "./auth"
import currentUserReducer from "./currentUser"
import questionsReducer from './questions'

export default combineReducers({
    authReducers,currentUserReducer,questionsReducer
})