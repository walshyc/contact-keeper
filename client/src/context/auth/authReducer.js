import {
    LOGIN_FAIL,
    LOGOUT,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    CLEAR_ERRORS,
    USER_LOADED,
    AUTH_ERROR
  } from "../types";

  export default (state, action) => {
      switch(action.type){
          case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true, 
                loading: false
            }
        case REGISTER_FAIL:
        localStorage.removeItem('token')
        return {
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false,
            user: null,
            error: action.payload
        }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
          default:
              return state
      }
  }