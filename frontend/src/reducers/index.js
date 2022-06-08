import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer.js";
import { orderCreateReducer, orderDetailsReducer, orderPayReducer } from "./orderReducers.js";
import {productDetailsReducer, productListReducer} from "./productReducer.js";
import { userRegisterReducer, userSigninReducer } from "./userReducers.js";

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails : orderDetailsReducer,
    orderPay: orderPayReducer,
})

export default rootReducer;