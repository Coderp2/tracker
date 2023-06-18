import todoReducers from "./homeReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todoReducers
})

export default rootReducer;