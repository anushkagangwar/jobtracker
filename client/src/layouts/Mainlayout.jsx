import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 min-h-screen p-6 lg:ml-64">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;