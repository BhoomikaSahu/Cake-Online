import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import {productDetailsReducer, productListReducer} from "./productReducer";

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

export default rootReducer;