import axiosInstance from "../../../lib/axios";

export const getUsersApi = async (
  page = 0,
  size = 10
) => {
  const response = await axiosInstance.get(
    "/users",
    {
      params: {
        page,
        size,
      },
    }
  );

  return response.data;
};

export const updateUserRoleApi =
  async (userId, role) => {
    const response =
      await axiosInstance.put(
        `/users/${userId}/role`,
        {
          role,
        }
      );

    return response.data;
  };

export const deleteUserApi = async (
  userId
) => {
  const response = await axiosInstance.delete(
    `/users/${userId}`
  );

  return response.data;
};