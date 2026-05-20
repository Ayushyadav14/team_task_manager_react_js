import axiosInstance from "../../../lib/axios";

export const registerUserApi = async (data) => {
  const response = await axiosInstance.post(
    "/auth/register",
    data
  );

  return response.data;
};

export const loginUserApi = async (data) => {
  const response = await axiosInstance.post(
    "/auth/login",
    data
  );

  return response.data;
};

export const forgotPasswordApi = async (
  payload
) => {
  const response = await axiosInstance.post(
    "/auth/forgot-password",
    payload
  );

  return response.data;
};

export const refreshTokenApi = async (
  refreshToken
) => {
  const response = await axiosInstance.post(
    "/auth/refresh",
    {
      refreshToken,
    }
  );

  return response.data;
};

export const logoutUserApi = async (
  refreshToken
) => {
  const response = await axiosInstance.post(
    "/auth/logout",
    {
      refreshToken,
    }
  );

  return response.data;
};
