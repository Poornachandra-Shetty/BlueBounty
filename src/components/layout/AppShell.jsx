import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const titles = {
  "/": "",
  "/dashboard": "Fisherman Dashboard",
  "/submit": "Waste Submission",
  "/analytics": "Pollution Analytics",
  "/rewards": "Rewards Marketplace",
  "/admin": "Admin Dashboard",
};

export default function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="flex min-h-screen bg-mist">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 min-w-0">
        {!isHome && <Topbar onMenuClick={() => setSidebarOpen(true)} title={titles[pathname] || ""} />}
        {isHome && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden fixed top-5 left-5 z-20 w-10 h-10 rounded-lg bg-white/90 shadow-md flex items-center justify-center"
          >
            <Menu size={18} className="text-abyss" />
          </button>
        )}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
