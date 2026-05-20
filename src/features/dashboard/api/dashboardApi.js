import axiosInstance from "../../../lib/axios";

export const getMyDashboardApi = async () => {
  const response = await axiosInstance.get(
    "/dashboard/my"
  );

  return response.data;
};

export const getAdminDashboardApi =
  async () => {
    const response = await axiosInstance.get(
      "/dashboard/admin"
    );

    return response.data;
  };

export const getProjectStatsApi = async (
  projectId
) => {
  const response = await axiosInstance.get(
    `/dashboard/projects/${projectId}/stats`
  );

  return response.data;
};