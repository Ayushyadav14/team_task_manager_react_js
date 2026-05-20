import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import { fetchCurrentUser } from "../../features/auth/redux/authThunk";

function DashboardLayout({ children }) {
  const dispatch = useDispatch();

  const { user, token } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, token, user]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;