import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  REMOVE_ITEM,
} from "../constants/ActionTypes";

const initialState = {
  items: [
    {
      itemId: 1,
      name: "Winter body",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      msrp: 110,
      salePrice: 100,
      thumbnailImage: "",
    },
    {
      itemId: 2,
      name: "Adidas",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      msrp: 80,
      salePrice: 59,
      thumbnailImage: "",
    },
    {
      itemId: 3,
      name: "Vans",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      msrp: 120,
      salePrice: 109,
      thumbnailImage: "",
    },
    {
      itemId: 4,
      name: "White",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      msrp: 260,
      salePrice: 239,
      thumbnailImage: "",
    },
    {
      itemId: 5,
      name: "Cropped-sho",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      msrp: 160,
      salePrice: 149,
      thumbnailImage: "",
    },
    {
      itemId: 6,
      name: "Blues",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      msrp: 90,
      salePrice: 79,
      thumbnailImage: "",
    },
  ],
  cartItems: [],
  total: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let addedItem = state.items.find(
        (item) => action.payload.itemId === item.itemId,
      );
      let existingItem = state.cartItems.find(
        (item) => action.payload.itemId === item.itemId,
      );

      if (existingItem) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.salePrice,
        };
      } else {
        addedItem.quantity = 1;
        let newTotal = state.total + addedItem.salePrice;
        return {
          ...state,
          cartItems: [...state.cartItems, addedItem],
          total: newTotal,
        };
      }
    }
    case ADD_QUANTITY: {
      let addedItem = state.cartItems.find(
        (item) => item.itemId === action.payload.itemId,
      );
      addedItem.quantity += 1;
      let newTotal = state.total + addedItem.salePrice;
      return {
        ...state,
        total: newTotal,
      };
    }
    case SUBTRACT_QUANTITY: {
      let subtractedItem = state.cartItems.find(
        (item) => item.itemId === action.payload.itemId,
      );

      // remove item if the quantity is now 0
      if (subtractedItem.quantity === 1) {
        let newItems = state.cartItems.filter(
          (item) => item.itemId !== action.payload.itemId,
        );
        let newTotal = state.total - subtractedItem.salePrice;
        return {
          ...state,
          cartItems: newItems,
          total: newTotal,
        };
      } else {
        subtractedItem.quantity -= 1;
        let newTotal = state.total - subtractedItem.salePrice;
        return {
          ...state,
          total: newTotal,
        };
      }
    }
    case REMOVE_ITEM: {
      let itemToRemove = state.cartItems.find(
        (item) => action.payload.itemId === item.itemId,
      );
      let newItems = state.cartItems.filter(
        (item) => action.payload.itemId !== item.itemId,
      );

      let newTotal =
        state.total - itemToRemove.salePrice * itemToRemove.quantity;
      return {
        ...state,
        cartItems: newItems,
        total: newTotal,
      };
    }
    default:
      return state;
  }
};

export default cart;
