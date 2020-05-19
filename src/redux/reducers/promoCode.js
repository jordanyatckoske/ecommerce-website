import { PROMO_CODE } from "../constants/ActionTypes";

const initialState = {
  value: "",
};

export default function promoCode(state = initialState, action) {
  switch (action.type) {
    case PROMO_CODE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
}
