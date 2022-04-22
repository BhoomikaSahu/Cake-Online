import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer.js";
import {productDetailsReducer, productListReducer} from "./productReducer.js";
import { userSigninReducer } from "./userRedusers.js";

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
})

export default rootReducer;