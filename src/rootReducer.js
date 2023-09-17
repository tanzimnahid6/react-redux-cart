import { combineReducers } from "redux";
import adminReducer from "./Redux/admin/addProductReducer";
import addCartReducer from "./Redux/user/addCartReducer";
export const rootReducer = combineReducers({admin:adminReducer,user:addCartReducer})
