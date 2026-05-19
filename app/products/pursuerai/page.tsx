export default function PursuerAIPage() {
  const modules = [
    {
      title: "Workflow Automation",
      description:
        "Automate follow-ups, task creation, reminders, and escalation rules.",
    },
    {
      title: "Pipeline Management",
      description:
        "Track accounts through every stage from allocation to closure.",
    },
    {
      title: "Operational CRM",
      description:
        "Manage customer profiles, notes, and complete interaction history.",
    },
    {
      title: "Analytical CRM",
      description:
        "Monitor conversion rates, productivity, and recovery trends.",
    },
    {
      title: "Business Reporting",
      description:
        "Generate MIS, DCR, settlement, and collection reports.",
    },
    {
      title: "Role-Based Access",
      description:
        "Control permissions for agents, managers, and enterprise users.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      description:
        "For solo professionals and small debt advisory practices.",
      features: [
        "Contact Management",
        "Pipeline Tracking",
        "Basic Reporting",
        "Excel Import",
      ],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Pro",
      description:
        "For teams that need automation and collaboration.",
      features: [
        "Workflow Automation",
        "Team Management",
        "Advanced Dashboards",
        "Settlement Tracker",
        "Role-Based Access",
      ],
      cta: "Request Demo",
      featured: true,
    },
    {
      name: "Enterprise",
      description:
        "For institutions requiring security, scale, and customization.",
      features: [
        "Custom Workflows",
        "API Access",
        "Dedicated Infrastructure",
        "Advanced Security",
        "Priority Support",
      ],
      cta: "Contact Sales",
      featured: false,
    },
  ];

  const faqs = [
    {
      question: "Who is PursuerAI designed for?",
      answer:
        "PursuerAI is built for collection agencies, debt advisory firms, financial services operations, and performance-driven teams.",
    },
    {
      question: "Can we import data from Excel?",
      answer:
        "Yes. Bulk data import from existing spreadsheets is supported.",
    },
    {
      question: "Can workflows be customized?",
      answer:
        "Yes. Pipeline stages, task rules, and automation logic can be configured to match your process.",
    },
    {
      question: "Does it support role-based access?",
      answer:
        "Yes. Permissions can be configured by user role and team.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-sm font-semibold tracking-wide text-amber-600">
            OPERATIONAL CRM & WORKFLOW AUTOMATION PLATFORM
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            Operational CRM Built for Collections and Advisory Teams
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            PursuerAI combines CRM, workflow automation, pipeline management,
            analytics, and business reporting in one platform designed for
            performance-driven teams.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              View Pricing
            </a>

            <a
              href="#demo"
              className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Request Demo
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Workflow Automation",
              "Pipeline Management",
              "Analytical CRM",
              "Business Reporting",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wide text-amber-600">
              BUILT FOR
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Teams That Operate at Scale
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              "Collection Agencies",
              "Debt Advisory Firms",
              "Recovery Teams",
              "Financial Services Operations",
              "Performance-Driven Sales Teams",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-wide text-amber-600">
              CORE MODULES
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Everything Your Operations Team Needs
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              From account allocation to payment tracking, PursuerAI centralizes
              every stage of your operational workflow.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <div
                key={module.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {module.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-wide text-amber-600">
              PRICING
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Flexible Plans for Teams of Every Size
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-8 ${
                  plan.featured
                    ? "border-slate-900 bg-white shadow-xl"
                    : "border-slate-200 bg-white"
                }`}
              >
                {plan.featured && (
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}

                <h3 className="mt-4 text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {plan.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>

                <a
                  href="#demo"
                  className={`mt-8 inline-block w-full rounded-lg px-6 py-3 text-center font-semibold transition ${
                    plan.featured
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : "border border-slate-300 text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wide text-amber-600">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-8"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="demo" className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Ready to Modernize Your Operations?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Replace spreadsheets and fragmented tools with a unified operational
            CRM platform built for scale.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Request a Demo
          </a>
        </div>
      </section>
    </main>
  );
}