import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function Home() {
  const products = [
    {
      name: "GOresolve",
      desc: "Consumer debt resolution platform helping individuals resolve unsecured debt stress with clarity, dignity and structure.",
      status: "Live Product",
      link: "https://goresolve.in",
    },
    {
      name: "PursuerAI",
      desc: "Smart CRM and workflow platform designed for collections teams and performance-led operations.",
      status: "Coming Soon",
      link: "#",
    },
    {
      name: "Mediaberg",
      desc: "Analytics and data intelligence platform built for better decisions and measurable growth.",
      status: "In Development",
      link: "#",
    },
    {
      name: "Nectar Growth",
      desc: "Growth systems and marketing intelligence tools built for modern digital businesses.",
      status: "Planned",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="leading-tight">
            <div className="text-lg font-semibold tracking-tight">
              INVOK NECTAR
            </div>
            <div className="mt-1 text-xs font-medium text-slate-500">
              Technology with a Human Pulse
            </div>
          </div>

          <nav className="hidden gap-8 text-[15px] font-medium text-slate-700 md:flex">
            <a href="#" className="transition hover:text-slate-900">
              Home
            </a>
            <a href="#products" className="transition hover:text-slate-900">
              Products
            </a>
            <a href="#about" className="transition hover:text-slate-900">
              About Us
            </a>
            <a href="#services" className="transition hover:text-slate-900">
              Services
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Careers
            </a>
            <a href="#" className="transition hover:text-slate-900">
              Blog
            </a>
            <a href="#contact" className="transition hover:text-slate-900">
              Contact
            </a>
          </nav>

          <button className="rounded-lg bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
            Get In Touch
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          <div>
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-700">
              DIGITAL PLATFORMS FOR REAL PROBLEMS
            </span>

            <h1 className="mt-8 text-4xl font-semibold leading-[1.2] tracking-tight text-slate-900 md:text-5xl">
              Building Practical Digital Platforms for a{" "}
              <span className="text-amber-600">Better Tomorrow</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-slate-600 md:text-lg">
              Invok Nectar creates practical software platforms that help
              businesses operate smarter and consumers solve real financial
              problems.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button className="rounded-lg bg-slate-900 px-7 py-3 text-base font-semibold text-white transition hover:bg-slate-800">
                Explore Products
              </button>

              <button className="rounded-lg border border-slate-300 px-7 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50">
                Partner With Us
              </button>
            </div>

            <p className="mt-8 text-sm text-slate-500">
              Built in India with systems designed to scale globally.
            </p>
          </div>

          {/* Dashboard Mockup */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="grid grid-cols-3 gap-3">
              <Metric title="SEO Pages" value="60+" />
              <Metric title="Clients" value="B2C" />
              <Metric title="Success" value="92%" />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="col-span-2 flex h-48 items-end justify-between rounded-lg bg-white p-4">
                {[40, 70, 55, 100, 88, 120].map((h, i) => (
                  <div
                    key={i}
                    className="w-2.5 rounded-sm bg-blue-600"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>

              <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4">
                <div className="h-20 w-20 rounded-full border-8 border-amber-500 border-t-blue-600" />
                <p className="mt-3 text-sm font-semibold">92%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wide text-amber-600">
              OUR PRODUCTS
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Platforms Solving Real Problems
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Focused platforms across consumer finance, business automation,
              analytics and growth.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((item) => (
              <div
                key={item.name}
                className={`group flex flex-col rounded-lg border transition-all ${
                  item.name === "GOresolve"
                    ? "border-emerald-300 bg-emerald-50 shadow-md hover:shadow-lg"
                    : "border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300"
                } p-6`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {item.status}
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-block text-sm font-semibold transition ${
                    item.name === "GOresolve"
                      ? "text-emerald-700 hover:text-emerald-800"
                      : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  {item.name === "GOresolve" ? "Visit Platform" : "Learn More"}{" "}
                  →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Stats */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 text-center md:grid-cols-2 lg:grid-cols-4">
            <Stat value="1M+" label="Users Empowered" />
            <Stat value="500+" label="Business Clients" />
            <Stat value="10M+" label="Resolutions Processed" />
            <Stat value="Growing" label="Across India & Beyond" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-slate-400">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-10">
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              INVOK NECTAR
            </h3>
            <p className="mt-4 text-sm leading-7">
              Technology with a Human Pulse. Building premium SaaS platforms
              across fintech, AI and operations.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Products</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="https://goresolve.in"
                  className="transition hover:text-white"
                >
                  GOresolve
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  PursuerAI
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Mediaberg
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#about" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@invoknectar.com"
                  className="transition hover:text-white"
                >
                  hello@invoknectar.com
                </a>
              </li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 px-6 py-8 text-center text-xs text-slate-500 lg:px-10">
          © 2026 Invok Nectar. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold text-slate-500">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-semibold text-blue-600">{value}</div>
      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </div>
  );
}
