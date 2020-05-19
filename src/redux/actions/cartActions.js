import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  REMOVE_ITEM,
} from "../constants/ActionTypes";

export const addToCart = (itemId) => ({
  type: ADD_TO_CART,
  payload: { itemId },
});

export const addQuantity = (itemId) => ({
  type: ADD_QUANTITY,
  payload: { itemId },
});

export const subtractQuantity = (itemId) => ({
  type: SUBTRACT_QUANTITY,
  payload: { itemId },
});

export const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  payload: { itemId },
});
