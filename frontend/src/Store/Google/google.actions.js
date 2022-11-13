import axios from "axios";
import { GOOGLE_ERROR, GOOGLE_LOADING, GOOGLE_SUCCESS } from "./google.actionTypes"


export const googleAuthentication = () => async (dispatch) => {
    dispatch({ type: GOOGLE_LOADING });
    try {
        const response = await axios.get("http://localhost:7000/auth/login/success",);
        dispatch({ type: GOOGLE_SUCCESS, payload:response });
        console.log(response)
    }
    catch (err) {
        dispatch({ type: GOOGLE_ERROR });
    }
}