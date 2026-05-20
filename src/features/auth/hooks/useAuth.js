import { useDispatch, useSelector } from "react-redux";

import {
  loginUser,
  signupUser,
} from "../redux/authThunk";

import { logout } from "../redux/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const login = (data) => dispatch(loginUser(data));

  const signup = (data) => dispatch(signupUser(data));

  const signout = () => dispatch(logout());

  return {
    ...auth,
    login,
    signup,
    signout,
  };
};