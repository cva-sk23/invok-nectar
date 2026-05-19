type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="text-3xl font-bold text-slate-900">{value}</div>
      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </div>
  );
}
