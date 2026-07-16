import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiPlusCircle,
  FiBarChart2,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";

const Sidebar = () => {
  const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FiHome size={20} />,
  },
  {
    name: "Add Job",
    path: "/dashboard/add-job",
    icon: <FiPlusCircle size={20} />,
  },
  {
    name: "Analytics",
    path: "/dashboard/analytics",
    icon: <FiBarChart2 size={20} />,
  },
];

  return (
    <aside className="hidden lg:flex fixed left-0 top-[73px] h-[calc(100vh-73px)] w-64 bg-slate-900 border-r border-slate-800 flex-col">

      {/* Sidebar Header */}
      <div className="px-6 py-6 border-b border-slate-800">
        <h2 className="text-lg font-semibold text-white">
          Navigation
        </h2>
        <p className="text-sm text-slate-400">
          Manage your career
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {item.icon}

            <span className="font-medium">
              {item.name}
            </span>
          </NavLink>
        ))}

      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-5">
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4">
          <h3 className="font-semibold text-white">
            CareerPilot 🚀
          </h3>

          <p className="mt-2 text-sm text-blue-100">
            Track every application and land your dream job.
          </p>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;