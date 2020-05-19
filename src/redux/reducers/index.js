import { combineReducers } from "redux";
import promoCode from "./promoCode";
import cart from "./cart";

export default combineReducers({
  promoCode,
  cart,
});
