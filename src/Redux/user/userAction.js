import { ADD_TO_CART, DECREMENT, INCREMENT } from "./userActionType"

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  }
}
export const incrementProduct = (id) => {
  return {
    type: INCREMENT,
    payload: id,
  }
}
export const decrementProduct = (id) => {
  return {
    type: DECREMENT,
    payload: id,
  }
}
