import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Invok Nectar is a DPIIT-recognized data science company building practical digital platforms for finance, AI and operations. Founded by domain experts with backgrounds in logistics and financial services.",
  alternates: {
    canonical: "https://invoknectar.com/about",
  },
  openGraph: {
    title: "About Us | Invok Nectar",
    description:
      "DPIIT-recognized data science company building practical digital platforms for finance, AI and operations.",
    url: "https://invoknectar.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
    </main>
  );
}
