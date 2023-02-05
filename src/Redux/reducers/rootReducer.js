import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import postReducer from "./postReducer";

const rootReucer = combineReducers({
    post: postReducer,
    filter: filterReducer,
})

export default rootReucer;