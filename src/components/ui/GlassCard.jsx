export default function GlassCard({ children, className = "", dark = false }) {
  return (
    <div
      className={`${dark ? "glass-dark" : "glass"} rounded-2xl shadow-[0_8px_30px_rgba(6,40,61,0.08)] ${className}`}
    >
      {children}
    </div>
  );
}
