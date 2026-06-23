// Simulated AI classification — no real model, deterministic-ish dummy logic for demo purposes.

const POINTS_PER_KG = {
  "Ghost Net": 20,
  "PET Bottles": 15,
  "Plastic Sheeting": 15,
  "Fishing Line": 15,
  "Mixed Plastic": 15,
  "Other Marine Debris": 10,
};

const AI_LABELS = {
  "Ghost Net": ["Ghost Net (Nylon, High Density)", "Ghost Net (Degraded Trawl Net)"],
  "PET Bottles": ["PET Bottles (Single-use, Clear)", "PET Bottles (Mixed Color)"],
  "Plastic Sheeting": ["Plastic Sheeting (Tarpaulin Fragment)", "Plastic Sheeting (Packaging Film)"],
  "Fishing Line": ["Monofilament Fishing Line"],
  "Mixed Plastic": ["Mixed Plastic Debris (Multi-category)"],
  "Other Marine Debris": ["Unclassified Marine Debris"],
};

export function simulateAIClassification(category, weightKg) {
  const labels = AI_LABELS[category] || AI_LABELS["Other Marine Debris"];
  const label = labels[Math.floor(Math.random() * labels.length)];
  const confidence = Math.round(84 + Math.random() * 15); // 84-99%
  const rate = POINTS_PER_KG[category] || 10;
  const basePoints = Math.round(weightKg * rate);
  const bonus = category === "Ghost Net" ? Math.round(basePoints * 0.15) : 0;
  const totalPoints = basePoints + bonus;

  return {
    classifiedAs: label,
    confidence,
    basePoints,
    bonus,
    totalPoints,
    noteKey: category === "Ghost Net" ? "wasteSubmission.ghostNetNote" : "wasteSubmission.standardNote",
  };
}
