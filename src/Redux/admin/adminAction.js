import { ADMIN_ADDED_PRODUCT } from "./adminActionType"

export const addProduct = (product) => {
  return {
    type: ADMIN_ADDED_PRODUCT,
    payload: product,
  }
}
