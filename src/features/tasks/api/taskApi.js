import axiosInstance from "../../../lib/axios";

export const getTasksApi = async (
  projectId,
  params
) => {
  const response = await axiosInstance.get(
    `/projects/${projectId}/tasks`,
    {
      params,
    }
  );

  return response.data;
};

export const getTaskApi = async (
  projectId,
  taskId
) => {
  const response = await axiosInstance.get(
    `/projects/${projectId}/tasks/${taskId}`
  );

  return response.data;
};

export const createTaskApi = async (
  projectId,
  payload
) => {
  const response = await axiosInstance.post(
    `/projects/${projectId}/tasks`,
    payload
  );

  return response.data;
};

export const updateTaskApi = async (
  projectId,
  taskId,
  payload
) => {
  const response = await axiosInstance.put(
    `/projects/${projectId}/tasks/${taskId}`,
    payload
  );

  return response.data;
};

export const updateTaskStatusApi =
  async (projectId, taskId, status) => {
    const response =
      await axiosInstance.patch(
        `/projects/${projectId}/tasks/${taskId}/status`,
        {
          status,
        }
      );

    return response.data;
  };

export const deleteTaskApi = async (
  projectId,
  taskId
) => {
  const response = await axiosInstance.delete(
    `/projects/${projectId}/tasks/${taskId}`
  );

  return response.data;
};

export const addTaskCommentApi =
  async (projectId, taskId, payload) => {
    const response =
      await axiosInstance.post(
        `/projects/${projectId}/tasks/${taskId}/comments`,
        payload
      );

    return response.data;
  };

export const deleteTaskCommentApi =
  async (
    projectId,
    taskId,
    commentId
  ) => {
    const response =
      await axiosInstance.delete(
        `/projects/${projectId}/tasks/${taskId}/comments/${commentId}`
      );

    return response.data;
  };