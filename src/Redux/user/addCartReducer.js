import { ADD_TO_CART, INCREMENT } from "./userActionType"

const initialState = []
// TODO:NEED TO UPDATE REDUCER FOR reduceQuantity
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
const addCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]

    case INCREMENT:
      return reduceQuantity(state, action.payload)

    default:
      return state
  }
}
export default addCartReducer
