import { NavLink } from "react-router-dom";

import { ROUTES } from "../../routes/routeConstants";

function Sidebar() {
  const navItems = [
    {
      label: "Dashboard",
      path: ROUTES.DASHBOARD,
    },
    {
      label: "Projects",
      path: ROUTES.PROJECTS,
    },
    {
      label: "Tasks",
      path: ROUTES.TASKS,
    },
    {
      label: "Team",
      path: ROUTES.TEAM,
    },
    {
      label: "Settings",
      path: ROUTES.SETTINGS,
    },
  ];

  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold text-blue-600">
          Task Manager
        </h1>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;