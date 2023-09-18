
import { ADMIN_ADDED_PRODUCT, ADMIN_ITEM_REDUCE } from "./adminActionType";

const initialState = []
export const reduceQuantity = (arr, id) => {
    return arr.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        }
      }
      return item
    })
  }

const adminReducer = (state = initialState,action)=>{
    switch (action.type) {
        case ADMIN_ADDED_PRODUCT:
           return [...state,action.payload]
        case ADMIN_ITEM_REDUCE:
            return reduceQuantity(state, action.payload)

    
        default:
            return state
    }
}
export default adminReducer