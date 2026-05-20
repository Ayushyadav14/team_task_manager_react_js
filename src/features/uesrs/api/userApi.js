import axiosInstance from "../../../lib/axios";

export const getCurrentUserApi =
  async () => {
    const response = await axiosInstance.get(
      "/users/me"
    );

    return response.data;
  };

export const updateCurrentUserApi =
  async (payload) => {
    const response = await axiosInstance.put(
      "/users/me",
      payload
    );

    return response.data;
  };

export const changePasswordApi =
  async (payload) => {
    const response = await axiosInstance.post(
      "/users/change-password",
      payload
    );

    return response.data;
  };
