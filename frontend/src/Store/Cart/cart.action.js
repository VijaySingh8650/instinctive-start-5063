import axios from "axios";
import { CART_ERROR, CART_LOADING, CART_SUCCESS} from "./cart.types";

export const addProductsTocart = (accessToken, productId,size,quantity, price) => async (dispatch) => {
    dispatch({ type: CART_LOADING });
    try {
        console.log("item is being added");
        let res = await axios.post(`${process.env.REACT_APP_URL}/api/cart`, {
            productId,  color:"default", size, quantity, price
        }, {
            headers: {
                authorization:accessToken
            }
        });
        console.log(res,"added");
        // dispatch({ type: CART_SUCCESS, payload: res.data });

    }
    catch (err) {

        dispatch({ type: CART_ERROR });

    }
}
export const addProductsTocartWithoutLogin =
    ({ productId, size, quantity, price }) =>(dispatch)=> {
        
        return dispatch({ type: CART_SUCCESS, payload: { productId, size, quantity:+quantity, price } })

    };
 


