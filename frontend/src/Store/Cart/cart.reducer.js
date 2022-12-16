import { CART_ERROR, CART_LOADING, CART_SUCCESS } from "./cart.types";


let initialvalue = {
  loading: false,
  error: false,
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || { cartItems: [] },
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
          
            
            localStorage.setItem('cartItems', JSON.stringify({ cartItems }));
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
            
            localStorage.setItem('cartItems', JSON.stringify({ cartItems }));
            return {
              error: false,
              loading: false,
              cartItems: { cartItems },
            };
        }
        case "GET_DEFAULT_CART": {
            
            localStorage.removeItem('cartItems');
            return {
              error: false,
              loading: false,
              cartItems: { cartItems:[] },
            };
        }
        default: return state;
    }
}