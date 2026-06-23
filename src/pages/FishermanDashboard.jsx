import { useEffect, useState } from "react";
import { Waves, Coins, Ship, Trophy, Fish, MapPin } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import StatCard from "../components/ui/StatCard";
import Badge from "../components/ui/Badge";
import { SkeletonCard, SkeletonRow } from "../components/ui/Skeleton";
import MonthlyTrendChart from "../components/charts/MonthlyTrendChart";
import currentUser from "../data/currentUser.json";
import collectionHistory from "../data/collectionHistory.json";
import fishermen from "../data/fishermen.json";
import trends from "../data/trends.json";
import { useTranslation } from "../contexts/useTranslation.jsx";

const statusVariant = { Approved: "success", Pending: "pending" };

export default function FishermanDashboard() {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  const leaderboard = [...fishermen].sort((a, b) => a.rank - b.rank);

  return (
    <div className="px-5 lg:px-8 py-6 max-w-7xl mx-auto space-y-6">
      {/* Profile header */}
      <GlassCard className="p-6 flex flex-wrap items-center gap-5 justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ocean to-seafoam flex items-center justify-center text-white font-display font-bold text-xl">
            {currentUser.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <h2 className="font-display font-semibold text-xl text-abyss">{currentUser.name}</h2>
            <p className="text-sm text-abyss/55 flex items-center gap-1.5 mt-0.5">
              <MapPin size={13} /> {currentUser.village} · {currentUser.boat}
            </p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {currentUser.badges.map((b) => (
                <Badge key={b} variant="info">{b}</Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-abyss/50 uppercase font-semibold">{t("dashboard.collectionCenterLabel")}</p>
          <p className="font-medium text-abyss">{currentUser.collectionCenter}</p>
        </div>
      </GlassCard>

      {/* Stats */}
      {loading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Waves} label={t("dashboard.totalWaste")} value={currentUser.totalKg} suffix="kg" accent="#1363DF" trend="+12.4% this month" />
          <StatCard icon={Coins} label={t("dashboard.rewardsEarned")} value={currentUser.points.toLocaleString()} suffix="pts" accent="#0CCE6B" trend="+368 pts last trip" />
          <StatCard icon={Ship} label={t("dashboard.totalTrips")} value={currentUser.trips} suffix="trips" accent="#47B5FF" />
          <StatCard icon={Trophy} label={t("dashboard.currentRank")} value={`#${currentUser.rank}`} suffix={`of ${currentUser.totalFishermen}`} accent="#FF7A5C" />
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chart */}
        <GlassCard className="p-6 lg:col-span-2">
          <h3 className="font-display font-semibold text-abyss mb-1">{t("dashboard.chartHeading")}</h3>
          <p className="text-xs text-abyss/50 mb-2">{t("dashboard.chartCaption")}</p>
          <MonthlyTrendChart data={trends.personal} dataKey="kg" color="#1363DF" />
        </GlassCard>

        {/* Leaderboard */}
        <GlassCard className="p-6">
          <h3 className="font-display font-semibold text-abyss mb-4">{t("dashboard.leaderboardHeading")}</h3>
          <div className="space-y-3">
            {leaderboard.slice(0, 5).map((f) => (
              <div key={f.id} className="flex items-center gap-3">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    f.rank <= 3 ? "bg-ocean text-white" : "bg-abyss/10 text-abyss/60"
                  }`}
                >
                  {f.rank}
                </span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0"
                  style={{ backgroundColor: f.avatarColor }}
                >
                  {f.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <p className={`text-sm font-medium truncate ${f.id === currentUser.id ? "text-ocean" : "text-abyss"}`}>
                    {f.name} {f.id === currentUser.id && "(You)"}
                  </p>
                  <p className="text-xs text-abyss/45">{f.totalKg} kg collected</p>
                </div>
                <p className="font-mono-data text-xs font-semibold text-seafoam shrink-0">{f.points.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Collection history */}
      <GlassCard className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold text-abyss">{t("dashboard.recentHistoryHeading")}</h3>
          <Fish className="text-abyss/30" size={18} />
        </div>
        {loading ? (
          <div className="divide-y divide-abyss/5">
            {Array.from({ length: 4 }).map((_, i) => <SkeletonRow key={i} />)}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-abyss/45 text-xs uppercase font-semibold border-b border-abyss/5">
                  <th className="py-2.5 pr-4">{t("dashboard.history.date")}</th>
                  <th className="py-2.5 pr-4">{t("dashboard.history.category")}</th>
                  <th className="py-2.5 pr-4">{t("dashboard.history.weight")}</th>
                  <th className="py-2.5 pr-4">{t("dashboard.history.points")}</th>
                  <th className="py-2.5 pr-4">{t("dashboard.history.status")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-abyss/5">
                {collectionHistory.map((c) => (
                  <tr key={c.id} className="text-abyss/80">
                    <td className="py-3 pr-4 whitespace-nowrap">{c.date}</td>
                    <td className="py-3 pr-4 font-medium text-abyss whitespace-nowrap">{c.category}</td>
                    <td className="py-3 pr-4 font-mono-data whitespace-nowrap">{c.weightKg} kg</td>
                    <td className="py-3 pr-4 font-mono-data text-seafoam font-semibold whitespace-nowrap">+{c.points}</td>
                    <td className="py-3 pr-4">
                      <Badge variant={statusVariant[c.status]}>{t(`dashboard.tableStatus.${c.status.toLowerCase()}`)}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
