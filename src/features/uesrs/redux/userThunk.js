import {
  getCurrentUserApi,
  updateCurrentUserApi,
} from "../api/userApi";

import {
  setError,
  setLoading,
  setProfile,
} from "./userSlice";

export const fetchCurrentUserProfile =
  () => async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const data =
        await getCurrentUserApi();

      dispatch(setProfile(data));
    } catch (error) {
      dispatch(
        setError(
          error.response?.data?.message ||
            "Failed to fetch profile"
        )
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

export const updateCurrentUser =
  (payload) => async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const data =
        await updateCurrentUserApi(
          payload
        );

      dispatch(setProfile(data));
    } catch (error) {
      dispatch(
        setError(
          error.response?.data?.message ||
            "Failed to update profile"
        )
      );
    } finally {
      dispatch(setLoading(false));
    }
  };