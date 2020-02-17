import React, { useReducer } from "react";
import axios from "axios";
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
  const loadUser = () => {};

  // Register User
  const register = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/users", formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg
      });
    }
  };

  // Login User
  const login = () => {};

  // Logout
  const logout = () => {};

  // Clear Errors
  const clearErrors = () => {
    dispatch({type: CLEAR_ERRORS})
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        register,
        login,
        logout,
        clearErrors,
        loadUser
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
