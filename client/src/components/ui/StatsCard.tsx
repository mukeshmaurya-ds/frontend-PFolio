interface StatsCardProps {
  value: string;
  label: string;
}

export default function StatsCard({
  value,
  label,
}: StatsCardProps) {
  return (
    <div
      aria-label={`${value} ${label}`}
      className="glass hover-lift rounded-2xl px-6 py-5 text-center md:px-8 md:py-6"
    >
      <p className="text-3xl font-bold text-cyan-400">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-400">
        {label}
      </p>
    </div>
  );
}