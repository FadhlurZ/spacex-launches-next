export default function HeroSkeleton() {
  return (
    <div className="relative w-full h-[500px]">
      <div className="bg-neutral-700 w-full h-[500px] animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
