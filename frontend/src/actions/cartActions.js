import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constant/cartConstants';

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/product/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            img: data.img,
            price: data.price,
            countInStock: data.countInStock,
            product: data.id,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}   

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}