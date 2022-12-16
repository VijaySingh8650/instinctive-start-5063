import {combineReducers, legacy_createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import { productsAdminSideReducer } from "./Admin/products.reducer";
import { authReducer } from "./Auth/auth.reducer";
import { cartReducer } from "./Cart/cart.reducer";
import { googleReducer } from "./Google/google.reducer";
import { wishlistReducer } from "./Wishlist/wishlist.reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    google:googleReducer,
    wishlist:wishlistReducer,
    adminProducts: productsAdminSideReducer,
    cart:cartReducer
})
const createCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer,createCompose(applyMiddleware(thunk)))