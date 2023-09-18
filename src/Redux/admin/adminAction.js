import { ADMIN_ADDED_PRODUCT, ADMIN_ITEM_REDUCE } from "./adminActionType"

export const addProduct = (product) => {
  return {
    type: ADMIN_ADDED_PRODUCT,
    payload: product,
  }
}
export const reduceQuantityFromAdmin = (id) => {
  return {
    type: ADMIN_ITEM_REDUCE,
    payload: id,
  }
}
