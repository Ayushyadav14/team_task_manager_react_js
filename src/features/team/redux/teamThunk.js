import {
  deleteUserApi,
  getUsersApi,
  updateUserRoleApi,
} from "../api/teamApi";

import {
  removeMember,
  setError,
  setLoading,
  setMembers,
  updateMember,
} from "./teamSlice";

export const fetchMembers =
  (page, size) => async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const data = await getUsersApi(
        page,
        size
      );

      dispatch(setMembers(data.content));
    } catch (error) {
      dispatch(
        setError(
          error.response?.data?.message ||
            "Failed to fetch users"
        )
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

export const changeUserRole =
  (userId, role) =>
  async (dispatch) => {
    try {
      const data =
        await updateUserRoleApi(
          userId,
          role
        );

      dispatch(updateMember(data));
    } catch (error) {
      dispatch(
        setError(
          error.response?.data?.message ||
            "Failed to update role"
        )
      );
    }
  };

export const deleteUser =
  (userId) => async (dispatch) => {
    try {
      await deleteUserApi(userId);

      dispatch(removeMember(userId));
    } catch (error) {
      dispatch(
        setError(
          error.response?.data?.message ||
            "Failed to delete user"
        )
      );
    }
  };