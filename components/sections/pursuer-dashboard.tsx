export function PursuerDashboard() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-amber-600">
            INSIDE PURSUERAI
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Operational Visibility Across Your Entire Workflow
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Track accounts, team productivity, settlements, and operational
            performance from one centralized platform.
          </p>
        </div>

        {/* Dashboard Layout */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* Left Main Dashboard */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            {/* Top Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <MetricCard title="Active Accounts" value="12,480" />
              <MetricCard title="Recovery Rate" value="78%" />
              <MetricCard title="Team Productivity" value="91%" />
            </div>

            {/* Pipeline */}
            <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900">
                  Collections Pipeline
                </h3>

                <span className="text-xs text-slate-500">
                  Live Workflow
                </span>
              </div>

              <div className="mt-5 grid grid-cols-4 gap-3">
                <PipelineCard
                  stage="Allocated"
                  value="2,340"
                />

                <PipelineCard
                  stage="Follow-Up"
                  value="4,120"
                />

                <PipelineCard
                  stage="Negotiation"
                  value="1,820"
                />

                <PipelineCard
                  stage="Closed"
                  value="3,760"
                />
              </div>
            </div>

            {/* Activity */}
            <div className="mt-6 rounded-2xl border border-slate-100 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900">
                  Team Activity
                </h3>

                <span className="text-xs text-slate-500">
                  Updated 5 mins ago
                </span>
              </div>

              <div className="mt-6 flex h-40 items-end justify-between gap-3">
                {[35, 60, 45, 80, 72, 95, 88].map((h, i) => (
                  <div
                    key={i}
                    className="w-full rounded-md bg-blue-600"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Panels */}
          <div className="space-y-6">
            {/* Workflow Automation */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Workflow Automation
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Automatically assign tasks, trigger reminders, and manage
                escalation workflows.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Auto Follow-Ups",
                  "Escalation Rules",
                  "Settlement Triggers",
                  "Payment Alerts",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Reporting */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Business Reporting
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Generate operational reports and monitor performance metrics
                across teams.
              </p>

              <div className="mt-6 flex items-center justify-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-[10px] border-amber-500 border-t-blue-600 text-xl font-semibold text-slate-900">
                  91%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </p>

      <p className="mt-3 text-2xl font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function PipelineCard({
  stage,
  value,
}: {
  stage: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-white p-4 text-center shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {stage}
      </p>

      <p className="mt-3 text-xl font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}