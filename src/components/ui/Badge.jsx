const variants = {
  success: "bg-seafoam/15 text-seafoam",
  pending: "bg-coral/15 text-coral",
  info: "bg-ocean/15 text-ocean",
  neutral: "bg-abyss/10 text-abyss/70",
};

export default function Badge({ children, variant = "neutral" }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}>
      {children}
    </span>
  );
}
