import { CART_ERROR, CART_LOADING, CART_SUCCESS } from "./cart.types";
import Cookies from 'js-cookie';

let initialvalue = {
  loading: false,
  error: false,
  cartItems: Cookies.get('cartItems')
    ? JSON.parse(Cookies.get('cartItems'))
    : { cartItems: [] },
};

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
            const { productId } = payload;
            const checkCartItem = state.cartItems.cartItems.find(el => el.productId._id === productId._id);
            const cartItems = checkCartItem
              ? state.cartItems.cartItems.map((el) =>
                  el.productId._id === payload.productId._id ? payload : el
                )
              : [...state.cartItems.cartItems, payload];
          console.log(cartItems);
          Cookies.set('cartItems', JSON.stringify({ cartItems }));
          return {
            error: false,
            loading: false,
            cartItems:{ cartItems},
          };
        }
        case "DELETE_CART_ITEMS":{
            const cartItems = state.cartItems.cartItems.filter(
              (el) => el.productId._id !== payload.id
            );
            Cookies.set('cartItems', JSON.stringify({ cartItems }));
            return {
              error: false,
              loading: false,
              cartItems: { cartItems },
            };
        }
        case "GET_DEFAULT_CART": {
            Cookies.remove('cartItems');
            return {
              error: false,
              loading: false,
              cartItems: { cartItems:[] },
            };
        }
        default: return state;
    }
}