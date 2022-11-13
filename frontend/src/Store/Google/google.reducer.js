import { GOOGLE_ERROR, GOOGLE_LOADING, GOOGLE_SUCCESS } from "./google.actionTypes";

const initialValue = {
    loading: false,
    error: false,
    token:""
}

export const googleReducer = (state=initialValue, {type,payload}) => {
    switch (type) {
        case GOOGLE_LOADING: {
            return {
                ...state,
                loading:true
            }
        }
        case GOOGLE_ERROR: {
            return {
                ...state,
                error:true
            }
        }
        case GOOGLE_SUCCESS: {
            console.log(payload.accessToken);
            return {
                ...state,
                token:payload
            }
        }
        default: return state;
    }
}