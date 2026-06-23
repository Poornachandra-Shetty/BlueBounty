import { NavLink } from "react-router-dom";
import { Anchor, LayoutDashboard, Upload, BarChart3, Gift, ShieldCheck, Waves, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Waves, end: true },
  { to: "/dashboard", label: "Fisherman Dashboard", icon: LayoutDashboard },
  { to: "/submit", label: "Waste Submission", icon: Upload },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/rewards", label: "Rewards", icon: Gift },
  { to: "/admin", label: "Admin Dashboard", icon: ShieldCheck },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-abyss/40 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 z-40 shrink-0 transition-transform duration-300
        bg-abyss net-mesh text-white flex flex-col
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-tide/20 flex items-center justify-center">
              <Anchor size={18} className="text-tide" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">BlueBounty</span>
          </div>
          <button onClick={onClose} className="lg:hidden text-white/70 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200
                ${isActive ? "bg-tide/20 text-tide" : "text-white/65 hover:bg-white/5 hover:text-white"}`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="px-6 py-5 border-t border-white/10">
          <p className="text-xs text-white/40 leading-relaxed">
            Demo build · Smart India Hackathon<br />Blue Economy Track
          </p>
        </div>
      </aside>
    </>
  );
}
