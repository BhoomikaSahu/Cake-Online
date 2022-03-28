import axios from 'axios';
import { CART_ADD_ITEM } from '../constant/cartConstants';

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const {Data} = await axios(`/api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: Data.name,
            img: Data.img,
            price: Data.price,
            countInStock: Data.countInStock,
            product: Data.id,
            qty
        }
    })
}   