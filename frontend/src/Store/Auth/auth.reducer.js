import {
    AUTH_SIGNIN_ERROR,
    AUTH_SIGNIN_LOADING,
    AUTH_SIGNIN_SUCCESS,
    AUTH_SIGNOUT,
    AUTH_SIGNUP_ERROR,
    AUTH_SIGNUP_LOADING,
    AUTH_SIGNUP_SUCCESS,
  } from "./auth.actionTypes";
  
  let accessToken = localStorage.getItem("accessToken") || "";
  let email = localStorage.getItem("email") || "";
  const initState = {
    accessToken: accessToken,
    loading: false,
    error: false,
    msg:"",
    email: email,
  };
  
  export const authReducer = (state = initState, { type, payload }) => {
   
    switch (type) {
      case AUTH_SIGNUP_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case AUTH_SIGNUP_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case AUTH_SIGNUP_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
        };
      }
  
      case AUTH_SIGNIN_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case AUTH_SIGNIN_ERROR: {
        return {
          ...state,
          loading: false,
          error:true,
          msg: payload,
        };
      }
      case AUTH_SIGNIN_SUCCESS: {
        localStorage.setItem("accessToken", payload.accessToken);
        localStorage.setItem("email", payload.email);
        //console.log(payload.accessToken)
        return {
          ...state,
          loading: false,
          error: false,
          accessToken: payload.accessToken,
          email: payload.email,
        };
      }
      case AUTH_SIGNOUT: {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("email");
        return {
          ...state,
          loading: false,
          error: false,
          accessToken: "",
          email: "",
        };
      }
      default: {
        return state;
      }
    }
  };
  