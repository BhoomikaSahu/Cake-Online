import { combineReducers } from "redux";
import {productDetailsReducer, productListReducer} from "./reducer";

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

export default rootReducer;