import axios from "axios";
import { CART_ERROR, CART_LOADING, CART_SUCCESS } from "./cart.types";

export const addProductsTocart = (accessToken, productId,size,quantity, price) => async (dispatch) => {
    dispatch({ type: CART_LOADING });
    try {
        let res = await axios.post(`${process.env.REACT_APP_URL}/api/cart`, {
            productId,  color:"default", size, quantity, price
        }, {
            headers: {
                authorization:accessToken
            }
        });
        dispatch({ type: CART_SUCCESS, payload: res.data });

    }
    catch (err) {

        dispatch({ type: CART_ERROR });

    }
}


