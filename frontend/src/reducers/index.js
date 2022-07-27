import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer.js";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderMineListReducer,
  orderPayReducer,
  orderSummaryReducer,
} from "./orderReducers.js";
import { productCreateReducer, productDeleteReducer, productDetailsReducer, productListReducer } from "./productReducer.js";
import {
  userDetailsReducer,
  userRegisterReducer,
  userSigninReducer,
  userUpdateProfileReducer,
} from "./userReducers.js";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderSummary: orderSummaryReducer,
  productCreate: productCreateReducer,
  productDelete: productDeleteReducer,
});

export default rootReducer;
