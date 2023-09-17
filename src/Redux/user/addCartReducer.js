import { ADD_TO_CART } from "./userActionType"

const initialState = []
const addCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]

    default:
      return state
  }
}
export default addCartReducer
