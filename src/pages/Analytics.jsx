import { Trash2, Users, Anchor, Recycle, MapPin } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import StatCard from "../components/ui/StatCard";
import StackedTrendChart from "../components/charts/StackedTrendChart";
import CategoryDonut from "../components/charts/CategoryDonut";
import PollutionHeatmap from "../components/charts/PollutionHeatmap";
import analytics from "../data/analytics.json";
import trends from "../data/trends.json";
import hotspots from "../data/hotspots.json";

const severityStyle = {
  High: "bg-coral/10 text-coral border-coral/20",
  Medium: "bg-tide/10 text-ocean border-ocean/20",
  Low: "bg-seafoam/10 text-seafoam border-seafoam/20",
};

export default function Analytics() {
  const topZones = [...hotspots].sort((a, b) => b.wasteKg - a.wasteKg).slice(0, 4);

  return (
    <div className="px-5 lg:px-8 py-6 max-w-7xl mx-auto space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Trash2} label="Total Marine Waste" value={analytics.platformStats.totalWasteKg.toLocaleString()} suffix="kg" accent="#1363DF" />
        <StatCard icon={Users} label="Active Fishermen" value={analytics.platformStats.activeFishermen} accent="#47B5FF" />
        <StatCard icon={Anchor} label="Ghost Nets Recovered" value={analytics.platformStats.ghostNetsKg.toLocaleString()} suffix="kg" accent="#0CCE6B" />
        <StatCard icon={Recycle} label="Plastic Recovered" value={analytics.platformStats.plasticKg.toLocaleString()} suffix="kg" accent="#FF7A5C" />
      </div>

      {/* Map */}
      <GlassCard className="p-6">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div>
            <h3 className="font-display font-semibold text-abyss">Coastal Pollution Heatmap</h3>
            <p className="text-xs text-abyss/50">Marker size & color indicate severity of waste concentration</p>
          </div>
          <div className="flex gap-3 text-xs">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-coral" /> High</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-ocean" /> Medium</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-seafoam" /> Low</span>
          </div>
        </div>
        <PollutionHeatmap />
      </GlassCard>

      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <h3 className="font-display font-semibold text-abyss mb-1">Monthly Waste Trends</h3>
          <p className="text-xs text-abyss/50 mb-2">Platform-wide collection by category, Jan – Jun 2026</p>
          <StackedTrendChart data={trends.platform} />
        </GlassCard>
        <GlassCard className="p-6">
          <h3 className="font-display font-semibold text-abyss mb-1">Waste Category Distribution</h3>
          <p className="text-xs text-abyss/50 mb-2">Cumulative breakdown by material type</p>
          <CategoryDonut data={analytics.categoryDistribution} />
        </GlassCard>
      </div>

      {/* Top polluted zones */}
      <GlassCard className="p-6">
        <h3 className="font-display font-semibold text-abyss mb-4">Top Polluted Coastal Zones</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topZones.map((z) => (
            <div key={z.id} className={`rounded-xl border p-4 ${severityStyle[z.severity]}`}>
              <div className="flex items-center gap-1.5 mb-2">
                <MapPin size={14} />
                <p className="font-semibold text-sm text-abyss">{z.name}</p>
              </div>
              <p className="font-mono-data text-xl font-bold text-abyss">{z.wasteKg.toLocaleString()} kg</p>
              <p className="text-xs mt-1 opacity-80">{z.dominant}</p>
              <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wide">{z.severity} severity</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
