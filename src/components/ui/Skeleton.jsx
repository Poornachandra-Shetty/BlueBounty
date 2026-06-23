export function SkeletonBlock({ className = "" }) {
  return <div className={`animate-pulse bg-abyss/10 rounded-lg ${className}`} />;
}

export function SkeletonCard() {
  return (
    <div className="glass rounded-2xl p-5 space-y-3">
      <div className="flex items-center gap-3">
        <SkeletonBlock className="w-12 h-12 rounded-xl" />
        <div className="flex-1 space-y-2">
          <SkeletonBlock className="h-3 w-2/3" />
          <SkeletonBlock className="h-5 w-1/2" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonRow() {
  return (
    <div className="flex items-center gap-4 py-3">
      <SkeletonBlock className="h-4 w-1/6" />
      <SkeletonBlock className="h-4 w-1/4" />
      <SkeletonBlock className="h-4 w-1/6" />
      <SkeletonBlock className="h-4 w-1/6" />
      <SkeletonBlock className="h-4 w-1/6" />
    </div>
  );
}
