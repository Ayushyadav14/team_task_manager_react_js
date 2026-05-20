import {
  loginUserApi,
  logoutUserApi,
  registerUserApi,
} from "../api/authApi";

import {
  logout,
  setCredentials,
  setError,
  setLoading,
  setUser,
} from "./authSlice";

import axiosInstance from "../../../lib/axios";

export const registerUser =
  (credentials) => async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const data = await registerUserApi(
        credentials
      );

      dispatch(
        loginUser({
          email: credentials.email,
          password: credentials.password,
        })
      );

      return data;
    } catch (error) {
      dispatch(
        setError(
          error.response?.data?.message ||
            "Registration failed"
        )
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

export const loginUser =
  (credentials) => async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const data = await loginUserApi(
        credentials
      );

      dispatch(setCredentials(data));
    } catch (error) {
      dispatch(
        setError(
          error.response?.data?.message ||
            "Login failed"
        )
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

export const fetchCurrentUser =
  () => async (dispatch) => {
    try {
      const response = await axiosInstance.get(
        "/users/me"
      );

      dispatch(setUser(response.data));
    } catch (error) {
      dispatch(
        setError(
          error.response?.data?.message ||
            "Failed to fetch user"
        )
      );
    }
  };

export const logoutUser =
  () => async (dispatch, getState) => {
    try {
      const refreshToken =
        getState().auth.refreshToken;

      if (refreshToken) {
        await logoutUserApi(refreshToken);
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(logout());
    }
  };