import { useState } from "react";
import { Fuel, Snowflake, Anchor, ShieldCheck, Radar, Wrench, Lightbulb, Coins, X } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import Badge from "../components/ui/Badge";
import EmptyState from "../components/ui/EmptyState";
import rewards from "../data/rewards.json";
import currentUser from "../data/currentUser.json";

const icons = { Fuel, Snowflake, Anchor, ShieldCheck, Radar, Wrench, Lightbulb };
const categories = ["All", "Fuel", "Equipment", "Safety", "Maintenance"];

export default function Rewards() {
  const [filter, setFilter] = useState("All");
  const [toast, setToast] = useState(null);
  const [points, setPoints] = useState(currentUser.points);

  const filtered = filter === "All" ? rewards : rewards.filter((r) => r.category === filter);

  const handleRedeem = (reward) => {
    if (points < reward.points) {
      setToast({ type: "error", text: "Not enough points to redeem this reward." });
    } else {
      setPoints((p) => p - reward.points);
      setToast({ type: "success", text: `Redeemed: ${reward.title}` });
    }
    setTimeout(() => setToast(null), 2800);
  };

  return (
    <div className="px-5 lg:px-8 py-6 max-w-7xl mx-auto space-y-6">
      <GlassCard className="p-6 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-br from-seafoam/10 to-ocean/10">
        <div>
          <p className="text-xs text-abyss/50 uppercase font-semibold">Your Balance</p>
          <p className="font-mono-data text-3xl font-bold text-abyss flex items-center gap-2">
            <Coins className="text-seafoam" size={26} /> {points.toLocaleString()} pts
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                filter === c ? "bg-ocean text-white" : "bg-white text-abyss/60 hover:text-abyss"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </GlassCard>

      {filtered.length === 0 ? (
        <EmptyState icon={Coins} title="No rewards in this category" subtitle="Check back soon — new partner rewards are added regularly." />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((r) => {
            const Icon = icons[r.icon] || Coins;
            const affordable = points >= r.points;
            return (
              <GlassCard key={r.id} className="p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-ocean/10 flex items-center justify-center">
                    <Icon size={20} className="text-ocean" />
                  </div>
                  <Badge variant="neutral">{r.category}</Badge>
                </div>
                <h3 className="font-display font-semibold text-abyss mb-1">{r.title}</h3>
                <p className="text-sm text-abyss/55 mb-4 flex-1">{r.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-data font-bold text-abyss">{r.points.toLocaleString()} pts</span>
                  <span className="text-xs text-abyss/45">{r.stock} left</span>
                </div>
                <button
                  onClick={() => handleRedeem(r)}
                  disabled={!affordable}
                  className="w-full bg-seafoam text-white font-semibold py-2.5 rounded-xl hover:bg-ocean transition-colors disabled:bg-abyss/10 disabled:text-abyss/40 disabled:cursor-not-allowed"
                >
                  {affordable ? "Redeem Now" : "Insufficient Points"}
                </button>
              </GlassCard>
            );
          })}
        </div>
      )}

      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-lg text-white text-sm font-medium fade-up ${
            toast.type === "success" ? "bg-seafoam" : "bg-coral"
          }`}
        >
          {toast.text}
          <button onClick={() => setToast(null)}><X size={15} /></button>
        </div>
      )}
    </div>
  );
}
