export function ExecutiveRecoveryDashboard() {
  return (
    <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-white">

      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <p className="text-sm font-semibold tracking-wide text-amber-400">
            EXECUTIVE RECOVERY DASHBOARD
          </p>

          <h3 className="mt-4 text-3xl font-semibold tracking-tight">
            Portfolio-Level Recovery Intelligence
          </h3>

          <p className="mt-4 max-w-2xl text-slate-400">
            Monitor lender performance, retained portfolio activity,
            operational throughput, settlement trends, and recovery projections
            across all active operations.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-4">
          <p className="text-sm text-slate-400">
            Monthly Recovery Projection
          </p>

          <p className="mt-2 text-4xl font-semibold text-white">
            ₹2.8Cr
          </p>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {[
          {
            label: "Active Portfolios",
            value: "18",
          },
          {
            label: "Retained Cases",
            value: "4,280",
          },
          {
            label: "Settlement Success",
            value: "82%",
          },
          {
            label: "Escalation Cases",
            value: "214",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {item.label}
            </p>

            <p className="mt-4 text-3xl font-semibold text-white">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Analytics Grid */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">

        {/* Recovery Trends */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">

          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold">
                Monthly Recovery Trends
              </h4>

              <p className="mt-1 text-sm text-slate-400">
                Allocation and settlement performance overview
              </p>
            </div>

            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              +18% Growth
            </span>
          </div>

          {/* Fake Graph */}
          <div className="mt-10 flex h-64 items-end gap-4">
            {[40, 60, 48, 78, 66, 92, 80].map((item, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-2xl bg-blue-500"
                style={{
                  height: `${item}%`,
                }}
              />
            ))}
          </div>

          <div className="mt-4 flex justify-between text-xs text-slate-500">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>
        </div>

        {/* Portfolio Health */}
        <div className="space-y-6">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h4 className="text-lg font-semibold">
              Portfolio Health
            </h4>

            <div className="mt-6 flex items-center justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full border-[12px] border-blue-900 border-t-blue-500 text-2xl font-semibold">
                84%
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-slate-400">
              Active recovery portfolio health score
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h4 className="text-lg font-semibold">
              Retention Insights
            </h4>

            <div className="mt-6 space-y-4">
              {[
                "High-value retained cases",
                "Legal escalation monitoring",
                "Demise classification review",
                "Police complaint hold tracking",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-slate-800 px-4 py-3 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}