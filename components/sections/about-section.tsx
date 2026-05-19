import { stats, values } from "@/lib/about-data";
import { StatCard } from "@/components/ui/stat-card";
import { ValueCard } from "@/components/ui/value-card";

export function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
             Building Practical Technology With Long-Term Vision
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
             Invok Nectar is a technology company that builds custom websites,
             digital marketing systems, AI solutions and practical software platforms.
             </p>

            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
             We combine execution speed, market understanding and product discipline
             to create systems that generate measurable business outcomes.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {values.map((item) => (
              <ValueCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
