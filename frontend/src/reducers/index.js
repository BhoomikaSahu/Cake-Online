import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer.js";
import { orderCreateReducer, orderDetailsReducer } from "./orderReducers.js";
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
})

export default rootReducer;