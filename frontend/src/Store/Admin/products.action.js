import axios from "axios";
import { ADMIN_PRODUCTS_ERROR, ADMIN_PRODUCTS_LOADING, ADMIN_PRODUCTS_SUCCESS } from "./products.types";

export const getProductsAdminSide = ({page,limit})=>async(dispatch) => {
    dispatch({ type: ADMIN_PRODUCTS_LOADING });
    try {
        let res = await axios.get(`${process.env.REACT_APP_URL}/api/furniture/products`, {
            params: {
                page:page,
                limit: limit
            }
        });
        dispatch({ type: ADMIN_PRODUCTS_SUCCESS, payload: res.data });
    }
    catch (err) {
        
        dispatch({ type: ADMIN_PRODUCTS_ERROR });
    }
}