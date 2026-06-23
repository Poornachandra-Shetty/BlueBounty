import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useTranslation } from "../../contexts/useTranslation.jsx";

export default function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const isHome = pathname === "/";

  const titles = {
    "/": "",
    "/dashboard": t("pageTitles.dashboard"),
    "/submit": t("pageTitles.submit"),
    "/analytics": t("pageTitles.analytics"),
    "/rewards": t("pageTitles.rewards"),
    "/admin": t("pageTitles.admin"),
  };

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
