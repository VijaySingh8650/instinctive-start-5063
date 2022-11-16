import axios from "axios";
import { CART_ERROR, CART_LOADING } from "./cart.types";

export const addProductsTocart = ({accessToken}) => async (dispatch) => {
    dispatch({ type: CART_LOADING });
    try {
        let res = await axios.post(`${process.env.REACT_APP_URL}/api/cart`, {
            headers: {
                authorization:accessToken
            }
        });

    }
    catch (err) {

        dispatch({ type: CART_ERROR });

    }
}