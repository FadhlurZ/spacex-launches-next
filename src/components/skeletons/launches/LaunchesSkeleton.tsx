import { LaunchCardSkeleton } from "./LaunchCardSkeleton";

export function LaunchesSkeleton() {
  return (
    <div className="mt-4">
      <ul className="grid grid-cols-4 gap-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <LaunchCardSkeleton key={i} />
        ))}
      </ul>
    </div>
  );
}
