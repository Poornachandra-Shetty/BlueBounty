import { useState } from "react";
import { Upload, MapPin, CheckCircle2, Sparkles, Loader2, ImagePlus } from "lucide-react";
import GlassCard from "../components/ui/GlassCard";
import { simulateAIClassification } from "../utils/aiClassifier";
import { useTranslation } from "../contexts/useTranslation.jsx";

const categories = [
  { value: "Ghost Net", labelKey: "wasteSubmission.categories.ghostNet" },
  { value: "PET Bottles", labelKey: "wasteSubmission.categories.petBottles" },
  { value: "Plastic Sheeting", labelKey: "wasteSubmission.categories.plasticSheeting" },
  { value: "Fishing Line", labelKey: "wasteSubmission.categories.fishingLine" },
  { value: "Mixed Plastic", labelKey: "wasteSubmission.categories.mixedPlastic" },
  { value: "Other Marine Debris", labelKey: "wasteSubmission.categories.otherMarineDebris" },
];
const locations = [
  { value: "Versova Smart Collection Hub, Mumbai", labelKey: "wasteSubmission.locations.versova" },
  { value: "Malvan Coastal Station, Sindhudurg", labelKey: "wasteSubmission.locations.malvan" },
  { value: "Ratnagiri Bay Center", labelKey: "wasteSubmission.locations.ratnagiri" },
  { value: "Karwar Port Facility", labelKey: "wasteSubmission.locations.karwar" },
  { value: "Mangalore Dock Hub", labelKey: "wasteSubmission.locations.mangalore" },
];

export default function WasteSubmission() {
  const [imagePreview, setImagePreview] = useState(null);
  const [category, setCategory] = useState("");
  const [weight, setWeight] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("idle"); // idle | analyzing | done
  const [result, setResult] = useState(null);
  const { t } = useTranslation();

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const canSubmit = category && weight && location && Number(weight) > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("analyzing");
    setTimeout(() => {
      const aiResult = simulateAIClassification(category, Number(weight));
      setResult(aiResult);
      setStatus("done");
    }, 1800);
  };

  const reset = () => {
    setImagePreview(null);
    setCategory("");
    setWeight("");
    setLocation("");
    setStatus("idle");
    setResult(null);
  };

  return (
    <div className="px-5 lg:px-8 py-6 max-w-3xl mx-auto space-y-6">
      <GlassCard className="p-6 lg:p-8">
        <h2 className="font-display font-semibold text-xl text-abyss mb-1">{t("wasteSubmission.heading")}</h2>
        <p className="text-sm text-abyss/55 mb-6">
          {t("wasteSubmission.subheading")}
        </p>

        {status !== "done" ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Image upload */}
            <div>
              <label className="text-sm font-medium text-abyss block mb-2">{t("wasteSubmission.uploadLabel")}</label>
              <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-abyss/15 rounded-xl h-40 cursor-pointer hover:border-ocean/40 transition-colors overflow-hidden relative">
                {imagePreview ? (
                  <img src={imagePreview} alt={t("wasteSubmission.uploadHint")} className="w-full h-full object-cover" />
                ) : (
                  <>
                    <ImagePlus className="text-abyss/30" size={28} />
                    <span className="text-xs text-abyss/45">{t("wasteSubmission.uploadHint")}</span>
                  </>
                )}
                <input type="file" accept="image/*" onChange={handleImage} className="hidden" />
              </label>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-abyss block mb-2">{t("wasteSubmission.categoryLabel")}</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white border border-abyss/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30"
                  required
                >
                  <option value="">{t("wasteSubmission.categoryPlaceholder")}</option>
                  {categories.map((c) => <option key={c.value} value={c.value}>{t(c.labelKey)}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-abyss block mb-2">{t("wasteSubmission.weightLabel")}</label>
                <input
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={t("wasteSubmission.weightPlaceholder")}
                  className="w-full bg-white border border-abyss/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-abyss block mb-2">{t("wasteSubmission.locationLabel")}</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-abyss/30" size={16} />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white border border-abyss/10 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30"
                  required
                >
                  <option value="">{t("wasteSubmission.locationPlaceholder")}</option>
                  {locations.map((l) => <option key={l.value} value={l.value}>{t(l.labelKey)}</option>)}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={!canSubmit || status === "analyzing"}
              className="w-full flex items-center justify-center gap-2 bg-ocean text-white font-semibold py-3.5 rounded-xl hover:bg-abyss transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === "analyzing" ? (
                <>
                  <Loader2 className="animate-spin" size={18} /> {t("wasteSubmission.analyzing")}
                </>
              ) : (
                <>
                  <Upload size={18} /> {t("wasteSubmission.submitButton")}
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-3 bg-seafoam/10 text-seafoam rounded-xl px-4 py-3">
              <CheckCircle2 size={20} />
              <p className="text-sm font-semibold">{t("wasteSubmission.successMessage")}</p>
            </div>

            {imagePreview && (
              <img src={imagePreview} alt={t("wasteSubmission.uploadLabel")} className="w-full h-44 object-cover rounded-xl" />
            )}

            <GlassCard className="p-5 bg-ocean/5">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={17} className="text-ocean" />
                <h3 className="font-display font-semibold text-abyss">{t("wasteSubmission.aiResultHeading")}</h3>
              </div>
              <div className="space-y-3 text-sm">
                <Row label={t("wasteSubmission.classifiedAs")} value={result.classifiedAs} />
                <Row label={t("wasteSubmission.confidence")} value={`${result.confidence}%`} />
                <Row label={t("wasteSubmission.submittedWeight")} value={`${weight} kg`} />
                <Row label={t("wasteSubmission.baseReward")} value={`${result.basePoints} pts`} />
                {result.bonus > 0 && <Row label={t("wasteSubmission.ghostNetBonus")} value={`+${result.bonus} pts`} highlight />}
                <div className="h-px bg-abyss/10" />
                <Row label={t("wasteSubmission.estimatedTotalReward")} value={`${result.totalPoints} pts`} bold />
              </div>
              <p className="text-xs text-abyss/50 mt-4">{t(result.noteKey)}</p>
            </GlassCard>

            <button
              onClick={reset}
              className="w-full bg-white border border-abyss/15 text-abyss font-semibold py-3 rounded-xl hover:border-abyss/30 transition-colors"
            >
              {t("wasteSubmission.submitAnother")}
            </button>
          </div>
        )}
      </GlassCard>
    </div>
  );
}

function Row({ label, value, highlight, bold }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-abyss/55">{label}</span>
      <span className={`font-mono-data ${bold ? "text-lg font-bold text-abyss" : "font-medium"} ${highlight ? "text-seafoam" : "text-abyss"}`}>
        {value}
      </span>
    </div>
  );
}
