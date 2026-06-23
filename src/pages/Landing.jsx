import { Link } from "react-router-dom";
import {
  Anchor, Waves, ScanLine, Coins, ArrowRight, Fish, Cpu, BrainCircuit,
  Gift, MapPin, TrendingUp, ShieldCheck, Trash2, Recycle, Users, Building2,
} from "lucide-react";
import GlassCard from "../components/ui/GlassCard";

const steps = [
  {
    icon: Trash2,
    title: "Collect at Sea",
    body: "Fishermen gather plastic debris and ghost nets caught in their trawls during routine fishing trips instead of discarding them overboard.",
  },
  {
    icon: ScanLine,
    title: "Weigh & Classify",
    body: "At IoT-enabled smart collection centers, sensors weigh the haul and an AI model classifies the waste type in seconds.",
  },
  {
    icon: Coins,
    title: "Earn & Redeem",
    body: "Reward points are credited instantly — redeemable for fuel, equipment discounts, and safety gear in the BlueBounty marketplace.",
  },
];

const features = [
  { icon: Cpu, title: "IoT Smart Centers", body: "Automated weighing stations log every kilogram with tamper-proof sensor data." },
  { icon: BrainCircuit, title: "AI Waste Classification", body: "Computer vision sorts ghost nets, PET, and plastic sheeting without manual review." },
  { icon: MapPin, title: "Live Pollution Mapping", body: "Authorities track hotspots in real time to direct cleanup and policy response." },
  { icon: Gift, title: "Instant Digital Rewards", body: "Points convert to fuel vouchers and gear discounts the moment a load is verified." },
];

const stats = [
  { value: "9,150", label: "kg Marine Waste Collected", suffix: "kg" },
  { value: "312", label: "Active Fishermen Onboarded", suffix: "" },
  { value: "2,870", label: "kg Ghost Nets Recovered", suffix: "kg" },
  { value: "₹18.3L", label: "Rewards Distributed", suffix: "" },
];

const partners = [
  { name: "Coastal Fisheries Dept.", icon: Building2 },
  { name: "Sagar Mitra NGO", icon: Users },
  { name: "BlueTech IoT Labs", icon: Cpu },
  { name: "National Clean Coast Mission", icon: ShieldCheck },
];

export default function Landing() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative bg-abyss net-mesh text-white pt-20 pb-28 px-6 lg:px-12 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-ocean/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-seafoam/20 blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-2.5 mb-8 lg:ml-0 ml-14">
            <div className="w-9 h-9 rounded-xl bg-tide/20 flex items-center justify-center">
              <Anchor size={18} className="text-tide" />
            </div>
            <span className="font-display font-bold text-lg">BlueBounty</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-white/10 text-tide px-3 py-1.5 rounded-full mb-6">
                <Waves size={13} /> AI-Powered Blue Economy Platform
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
                Empowering Fishermen<br />to Clean <span className="text-tide">Oceans.</span>
              </h1>
              <p className="text-white/70 text-lg max-w-md mb-8 leading-relaxed">
                BlueBounty turns every fishing trip into a cleanup mission — rewarding fishermen for bringing back
                plastic debris and ghost nets instead of leaving them at sea.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 bg-tide text-abyss font-semibold px-6 py-3.5 rounded-xl hover:bg-white transition-colors duration-200"
                >
                  Enter Fisherman Dashboard <ArrowRight size={17} />
                </Link>
                <Link
                  to="/analytics"
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/15 font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors duration-200"
                >
                  View Pollution Analytics
                </Link>
              </div>
            </div>

            {/* Signature element: sonar/net hero visual */}
            <div className="relative h-80 lg:h-[420px] flex items-center justify-center fade-up" style={{ animationDelay: "0.15s" }}>
              <div className="absolute w-56 h-56 rounded-full border border-tide/30 sonar-ring" />
              <div className="absolute w-56 h-56 rounded-full border border-tide/30 sonar-ring" style={{ animationDelay: "1.2s" }} />
              <GlassCard dark className="relative w-64 p-6 drift">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-white/50 font-medium">Live Collection Center</span>
                  <span className="w-2 h-2 rounded-full bg-seafoam animate-pulse" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Fish size={28} className="text-tide" />
                  <div>
                    <p className="font-mono-data text-2xl font-semibold">18.4 kg</p>
                    <p className="text-xs text-white/50">Ghost Net · Sensor #VS-04</p>
                  </div>
                </div>
                <div className="h-px bg-white/10 mb-4" />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/50">Reward Credited</span>
                  <span className="font-mono-data text-seafoam font-semibold">+368 pts</span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-6 lg:px-12 py-20 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-coral text-xs font-bold uppercase tracking-wider">The Problem</span>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-abyss mt-3 mb-5 leading-tight">
              Every trawl pulls up more than fish.
            </h2>
            <p className="text-abyss/65 leading-relaxed mb-4">
              Indian fishing fleets routinely haul in plastic waste and abandoned "ghost nets" tangled in their
              gear. With no incentive or system to bring it ashore, most of it goes straight back into the sea —
              compounding marine pollution and damaging fishing grounds the very fishermen depend on.
            </p>
            <p className="text-abyss/65 leading-relaxed">
              Ghost nets alone keep killing marine life for years after being discarded, and microplastics entering
              the food chain put both ecosystems and livelihoods at risk.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <GlassCard className="p-6">
              <Trash2 className="text-coral mb-3" size={26} />
              <p className="font-mono-data text-2xl font-bold text-abyss">8M+ tonnes</p>
              <p className="text-xs text-abyss/60 mt-1">plastic enters oceans yearly (est.)</p>
            </GlassCard>
            <GlassCard className="p-6">
              <Recycle className="text-ocean mb-3" size={26} />
              <p className="font-mono-data text-2xl font-bold text-abyss">640k tonnes</p>
              <p className="text-xs text-abyss/60 mt-1">of ghost gear lost at sea annually</p>
            </GlassCard>
            <GlassCard className="p-6 col-span-2">
              <Fish className="text-seafoam mb-3" size={26} />
              <p className="font-mono-data text-2xl font-bold text-abyss">No incentive, no return trip</p>
              <p className="text-xs text-abyss/60 mt-1">Fishermen currently have zero economic reason to bring waste ashore.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 lg:px-12 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-ocean text-xs font-bold uppercase tracking-wider">How BlueBounty Works</span>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-abyss mt-3">
              From the net to the wallet, in three steps.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((s, i) => (
              <div key={s.title} className="relative">
                <GlassCard className="p-7 h-full">
                  <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center mb-5">
                    <s.icon size={22} className="text-ocean" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-abyss mb-2">{s.title}</h3>
                  <p className="text-sm text-abyss/60 leading-relaxed">{s.body}</p>
                </GlassCard>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 text-abyss/15" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="px-6 lg:px-12 py-20 bg-abyss net-mesh text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-tide text-xs font-bold uppercase tracking-wider">Impact So Far</span>
            <h2 className="font-display font-bold text-3xl lg:text-4xl mt-3">Measured in kilograms, not slogans.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s) => (
              <GlassCard dark key={s.label} className="p-6 text-center">
                <p className="font-mono-data text-3xl font-bold text-tide">{s.value}</p>
                <p className="text-xs text-white/55 mt-2 leading-snug">{s.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 lg:px-12 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-ocean text-xs font-bold uppercase tracking-wider">Platform Features</span>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-abyss mt-3">Built for the boat and the back office.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <GlassCard key={f.title} className="p-6">
              <div className="w-11 h-11 rounded-xl bg-seafoam/10 flex items-center justify-center mb-4">
                <f.icon size={20} className="text-seafoam" />
              </div>
              <h3 className="font-display font-semibold text-abyss mb-2">{f.title}</h3>
              <p className="text-sm text-abyss/60 leading-relaxed">{f.body}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="px-6 lg:px-12 py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-abyss/50 text-xs font-bold uppercase tracking-wider">Partners & Stakeholders</span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
            {partners.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-2 text-abyss/60">
                <p.icon size={26} />
                <span className="text-xs font-medium text-center leading-snug">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-20">
        <GlassCard className="max-w-5xl mx-auto p-10 lg:p-14 text-center bg-gradient-to-br from-ocean/10 to-seafoam/10">
          <TrendingUp className="mx-auto text-ocean mb-4" size={32} />
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-abyss mb-3">
            Ready to turn every catch into a cleanup?
          </h2>
          <p className="text-abyss/60 mb-7 max-w-lg mx-auto">
            Join the fishermen already earning rewards for the ocean they protect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/submit" className="bg-ocean text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-abyss transition-colors duration-200">
              Submit Your First Collection
            </Link>
            <Link to="/admin" className="bg-white text-abyss font-semibold px-6 py-3.5 rounded-xl border border-abyss/10 hover:border-abyss/30 transition-colors duration-200">
              Government / Admin Login
            </Link>
          </div>
        </GlassCard>
      </section>

      <footer className="text-center py-8 text-xs text-abyss/40">
        BlueBounty — Demo prototype built for hackathon presentation. All data shown is simulated.
      </footer>
    </div>
  );
}
