import { ADMIN_ADDED_PRODUCT } from "./adminActionType";

const initialState = []

const adminReducer = (state = initialState,action)=>{
    switch (action.type) {
        case ADMIN_ADDED_PRODUCT:
           return [...state,action.payload]
    
        default:
            return state
    }
}
export default adminReducer