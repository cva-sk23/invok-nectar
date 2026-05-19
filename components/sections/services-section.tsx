import { ServiceCard } from '@/components/ui/service-card';
import { services } from '@/lib/services-data';

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
            What We Do
          </p>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Services Designed to Drive Business Growth
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            We build practical digital solutions that help businesses establish
            their online presence, generate leads and operate more efficiently.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}