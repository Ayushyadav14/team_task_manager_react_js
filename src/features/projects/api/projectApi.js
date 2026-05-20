import axiosInstance from "../../../lib/axios";

export const getProjectsApi = async () => {
  const response = await axiosInstance.get(
    "/projects"
  );

  return response.data;
};

export const getProjectApi = async (
  projectId
) => {
  const response = await axiosInstance.get(
    `/projects/${projectId}`
  );

  return response.data;
};

export const createProjectApi = async (
  payload
) => {
  const response = await axiosInstance.post(
    "/projects",
    payload
  );

  return response.data;
};

export const updateProjectApi = async (
  projectId,
  payload
) => {
  const response = await axiosInstance.put(
    `/projects/${projectId}`,
    payload
  );

  return response.data;
};

export const deleteProjectApi = async (
  projectId
) => {
  const response = await axiosInstance.delete(
    `/projects/${projectId}`
  );

  return response.data;
};

export const addProjectMemberApi = async (
  projectId,
  payload
) => {
  const response = await axiosInstance.post(
    `/projects/${projectId}/members`,
    payload
  );

  return response.data;
};

export const removeProjectMemberApi =
  async (projectId, userId) => {
    const response =
      await axiosInstance.delete(
        `/projects/${projectId}/members/${userId}`
      );

    return response.data;
  };