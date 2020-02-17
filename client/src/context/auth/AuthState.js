import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
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

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User

  // Register User

  // Login User

  // Logout

  // Clear Errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
