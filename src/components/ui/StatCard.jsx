import GlassCard from "./GlassCard";

export default function StatCard({ icon: Icon, label, value, suffix = "", accent = "#1363DF", trend }) {
  return (
    <GlassCard className="p-5 flex items-center gap-4 hover:-translate-y-0.5 transition-transform duration-300">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${accent}1A` }}
      >
        <Icon size={22} style={{ color: accent }} />
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wide text-abyss/60 font-semibold truncate">{label}</p>
        <p className="font-mono-data text-2xl font-semibold text-abyss leading-tight">
          {value}
          <span className="text-sm font-normal text-abyss/50 ml-1">{suffix}</span>
        </p>
        {trend && <p className="text-xs text-seafoam font-medium mt-0.5">{trend}</p>}
      </div>
    </GlassCard>
  );
}
