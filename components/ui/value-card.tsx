type ValueCardProps = {
  title: string;
  description: string;
};

export function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8">
      <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}
