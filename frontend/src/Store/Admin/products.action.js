import axios from "axios";
import { ADMIN_PRODUCTS_ERROR, ADMIN_PRODUCTS_LOADING, ADMIN_PRODUCTS_SUCCESS } from "./products.types";

export const getProductsAdminSide = ()=>async(dispatch) => {
    dispatch({ type: ADMIN_PRODUCTS_LOADING });
    try {
        let res = await axios.get("http://localhost:8080/api/furniture/products");
        dispatch({ type: ADMIN_PRODUCTS_SUCCESS, payload: res.data });
    }
    catch (err) {
        
        dispatch({ type: ADMIN_PRODUCTS_ERROR });
    }
}