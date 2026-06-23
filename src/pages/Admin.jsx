import { useState } from "react";
import { Users, Building2, CalendarCheck, IndianRupee, CheckCircle2, XCircle, Activity, AlertTriangle, UserPlus, Gift, Trophy } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import StatCard from "../components/ui/StatCard";
import Badge from "../components/ui/Badge";
import EmptyState from "../components/ui/EmptyState";
import analytics from "../data/analytics.json";
import adminData from "../data/admin.json";
import { useTranslation } from "../contexts/useTranslation.jsx";

const activityIcons = {
  approval: CheckCircle2,
  new_fisherman: UserPlus,
  redemption: Gift,
  alert: AlertTriangle,
  milestone: Trophy,
};

const activityColor = {
  approval: "text-seafoam",
  new_fisherman: "text-ocean",
  redemption: "text-tide",
  alert: "text-coral",
  milestone: "text-abyss",
};

export default function Admin() {
  const { t } = useTranslation();
  const [queue, setQueue] = useState(adminData.approvalQueue);

  const handleDecision = (id) => setQueue((q) => q.filter((item) => item.id !== id));

  return (
    <div className="px-5 lg:px-8 py-6 max-w-7xl mx-auto space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label={t("admin.registeredFishermen")} value={analytics.platformStats.activeFishermen} accent="#1363DF" />
        <StatCard icon={Building2} label={t("admin.collectionCenters")} value={analytics.platformStats.collectionCenters} accent="#47B5FF" />
        <StatCard icon={CalendarCheck} label={t("admin.todaysCollections")} value="312" suffix="kg" accent="#0CCE6B" />
        <StatCard icon={IndianRupee} label={t("admin.csrRewards")} value={`₹${(analytics.platformStats.totalRewardsDistributed / 100000).toFixed(1)}L`} accent="#FF7A5C" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Collection centers table */}
        <GlassCard className="p-6">
          <h3 className="font-display font-semibold text-abyss mb-4">{t("admin.centerStatus")}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-abyss/45 text-xs uppercase font-semibold border-b border-abyss/5">
                  <th className="py-2.5 pr-4">{t("admin.table.center")}</th>
                  <th className="py-2.5 pr-4">{t("admin.table.dailyAvg")}</th>
                  <th className="py-2.5 pr-4">{t("admin.table.sensors")}</th>
                  <th className="py-2.5 pr-4">{t("admin.table.status")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-abyss/5">
                {analytics.collectionCenters.map((c) => (
                  <tr key={c.id}>
                    <td className="py-3 pr-4">
                      <p className="font-medium text-abyss">{c.name}</p>
                      <p className="text-xs text-abyss/45">{c.location}</p>
                    </td>
                    <td className="py-3 pr-4 font-mono-data">{c.dailyAvgKg} kg</td>
                    <td className="py-3 pr-4 font-mono-data">{c.sensorHealth}</td>
                    <td className="py-3 pr-4">
                      <Badge variant={c.status === "Operational" ? "success" : "pending"}>{t(`admin.status.${c.status.toLowerCase()}`)}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Activity feed */}
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-abyss">{t("admin.recentActivity")}</h3>
            <Activity className="text-abyss/30" size={18} />
          </div>
          <div className="space-y-4">
            {adminData.activityFeed.map((a) => {
              const Icon = activityIcons[a.type];
              return (
                <div key={a.id} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-abyss/5 flex items-center justify-center shrink-0">
                    <Icon size={15} className={activityColor[a.type]} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-abyss/80 leading-snug">{a.text}</p>
                    <p className="text-xs text-abyss/40 mt-0.5">{a.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </GlassCard>
      </div>

      {/* Approval queue */}
      <GlassCard className="p-6">
        <h3 className="font-display font-semibold text-abyss mb-4">{t("admin.approvalQueue")}</h3>
        {queue.length === 0 ? (
          <EmptyState
            icon={CheckCircle2}
            title={t("admin.queueCleared")}
            subtitle={t("admin.queueClearedSubtitle")}
          />
        ) : (
          <div className="space-y-3">
            {queue.map((item) => (
              <div key={item.id} className="flex flex-wrap items-center gap-4 justify-between bg-white/50 rounded-xl p-4">
                <div className="min-w-0">
                  <p className="font-medium text-abyss">{item.fisherman}</p>
                  <p className="text-xs text-abyss/50">{item.category} · {item.weightKg} kg · {item.center}</p>
                  <p className="text-xs text-abyss/40 mt-0.5">{t("admin.submitted")} {item.submitted}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="info">{t("admin.aiConfidence")} {item.aiConfidence}%</Badge>
                  <button
                    onClick={() => handleDecision(item.id)}
                    className="w-9 h-9 rounded-lg bg-seafoam/10 text-seafoam hover:bg-seafoam hover:text-white transition-colors flex items-center justify-center"
                  >
                    <CheckCircle2 size={17} />
                  </button>
                  <button
                    onClick={() => handleDecision(item.id)}
                    className="w-9 h-9 rounded-lg bg-coral/10 text-coral hover:bg-coral hover:text-white transition-colors flex items-center justify-center"
                  >
                    <XCircle size={17} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </GlassCard>
    </div>
  );
}
