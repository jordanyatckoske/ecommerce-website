export const getCartState = (store) => store.cart;
export const getCartItems = (store) =>
  getCartState(store) ? getCartState(store).cartItems : {};
export const getItemCartQuantity = (store, itemId) =>
  getCartState(store)
    ? getCartItems(store).find((item) => item.itemId === itemId).quantity
    : {};
