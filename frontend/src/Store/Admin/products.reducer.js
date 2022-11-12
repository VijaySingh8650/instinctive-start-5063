import { ADMIN_PRODUCTS_ERROR, ADMIN_PRODUCTS_LOADING, ADMIN_PRODUCTS_SUCCESS } from "./products.types"

const initialValue = {
    loading: false,
    error: false,
    adminProducts:""
}

 export const productsAdminSideReducer = (state=initialValue, {type,payload}) => {
     switch (type) {
         case ADMIN_PRODUCTS_LOADING: {
             return {
                 ...state,
                 loading: true
             }
        }
         case ADMIN_PRODUCTS_ERROR: {
             return {
                 ...state,
                 loading:false,
                 error:true
            } 
        }
         case ADMIN_PRODUCTS_SUCCESS: {
             console.log(payload);
             return {
                 loading: false,
                 error:false,
                adminProducts:payload 
            }
            
        }
        default : return state;
    }
}