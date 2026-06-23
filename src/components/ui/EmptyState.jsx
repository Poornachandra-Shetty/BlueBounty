export default function EmptyState({ icon: Icon, title, subtitle, action }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      {Icon && (
        <div className="w-16 h-16 rounded-2xl bg-ocean/10 flex items-center justify-center mb-4">
          <Icon size={28} className="text-ocean" />
        </div>
      )}
      <h3 className="font-display font-semibold text-lg text-abyss mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-abyss/60 max-w-sm">{subtitle}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
