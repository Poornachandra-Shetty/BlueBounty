import { Menu, Bell, Droplets } from "lucide-react";

export default function Topbar({ onMenuClick, title }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-mist/80 border-b border-abyss/5">
      <div className="flex items-center justify-between px-5 lg:px-8 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow-sm"
          >
            <Menu size={18} className="text-abyss" />
          </button>
          <h1 className="font-display font-semibold text-xl text-abyss">{title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 bg-seafoam/10 text-seafoam text-xs font-semibold px-3 py-1.5 rounded-full">
            <Droplets size={13} /> Live Demo Data
          </div>
          <button className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-abyss/70 hover:text-ocean">
            <Bell size={17} />
          </button>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-ocean to-seafoam" />
        </div>
      </div>
    </header>
  );
}
