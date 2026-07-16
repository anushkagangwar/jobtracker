// import { Link, useLocation } from "react-router-dom";
// import {
//   FiSearch,
//   FiBell,
//   FiMoon,
//   FiMenu,
// } from "react-icons/fi";

// const Navbar = () => {
//   const location = useLocation();

//   const getPageTitle = () => {
//     switch (location.pathname) {
//       case "/":
//         return "Dashboard";
//       case "/add-job":
//         return "Add Job";
//       case "/analytics":
//         return "Analytics";
//       default:
//         return "CareerPilot";
//     }
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
//       <div className="flex items-center justify-between px-6 py-4">

//         {/* Left Section */}
//         <div className="flex items-center gap-6">

//           {/* Mobile Menu */}
//           <button className="lg:hidden text-white text-2xl">
//             <FiMenu />
//           </button>

//           {/* Logo */}
//           <Link
//             to="/"
//             className="text-2xl font-bold text-blue-500"
//           >
//             CareerPilot
//           </Link>

//           {/* Page Title */}
//           <h2 className="hidden md:block text-xl font-semibold text-white">
//             {getPageTitle()}
//           </h2>

//         </div>

        

//         {/* Right Section */}
//         <div className="flex items-center gap-5">

//           <button className="text-xl text-slate-300 hover:text-blue-400 transition">
//             <FiBell />
//           </button>

//           <button className="text-xl text-slate-300 hover:text-yellow-400 transition">
//             <FiMoon />
//           </button>

//           {/* Profile */}
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
//               A
//             </div>

//             <div className="hidden md:block">
//               <p className="text-white font-semibold">
//                 Anushka
//               </p>

//               <p className="text-sm text-slate-400">
//                 Frontend Developer
//               </p>
//             </div>
//           </div>

//         </div>

//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiBell,
  FiMoon,
  FiMenu,
  FiLogOut,
} from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";

      case "/dashboard/add-job":
        return "Add Job";

      case "/dashboard/analytics":
        return "Analytics";

      case "/dashboard/edit-job":
        return "Edit Job";

      default:
        return "CareerPilot";
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Left */}
        <div className="flex items-center gap-6">

          <button className="text-2xl text-white lg:hidden">
            <FiMenu />
          </button>

          <Link
            to="/dashboard"
            className="text-2xl font-bold text-blue-500"
          >
            CareerPilot
          </Link>

          <h2 className="hidden text-xl font-semibold text-white md:block">
            {getPageTitle()}
          </h2>

        </div>

        {/* Right */}
        <div className="flex items-center gap-5">

          {/* Notification */}
          <button className="text-xl text-slate-300 transition hover:text-blue-400">
            <FiBell />
          </button>

          {/* Dark Mode */}
          <button className="text-xl text-slate-300 transition hover:text-yellow-400">
            <FiMoon />
          </button>

          {/* User */}
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-white">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>

            <div className="hidden md:block">
              <p className="font-semibold text-white">
                {user?.name || "User"}
              </p>

              <p className="text-sm text-slate-400">
                {user?.email || "No Email"}
              </p>
            </div>

          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
          >
            <FiLogOut />
            <span className="hidden lg:block">
              Logout
            </span>
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;