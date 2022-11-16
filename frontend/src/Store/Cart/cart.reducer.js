import { CART_ERROR, CART_LOADING, CART_SUCCESS } from "./cart.types"

let initialvalue = {
    loading: false,
    error: false,
    cartItems:""
}

export const cartReducer = (state = initialvalue, { type, payload })=>{
    switch (type) {
        case CART_LOADING: {
            return {
                ...state,
                loading:true
            }
        }
        case CART_ERROR: {
            return {
                ...state,
                error: true,
                loading:false
            }
        }
        case CART_SUCCESS: {
            console.log(payload);
            return {
                error: false,
                loading: false,
                cartItems:payload
            }
        }
        default: return state;
    }
}