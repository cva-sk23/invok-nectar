import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <AboutSection />
      <ServicesSection />
    </main>
  );
}