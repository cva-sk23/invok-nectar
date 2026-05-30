export function PerformanceReviewMonitoringCenter() {
  return (
    <div className="mt-16">

      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-wide text-amber-600">
          PERFORMANCE REVIEW & MONITORING CENTER
        </p>

        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
          Operational Visibility Across Teams, Floors and Locations
        </h3>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          Monitor executive productivity, team performance, floor activity,
          lender processes and location-level operational outcomes.
        </p>
      </div>

      {/* Executive Performance */}
      <div className="mt-12 rounded-3xl border border-slate-200 bg-white shadow-sm">

        <div className="border-b border-slate-100 px-6 py-5">
          <h4 className="text-lg font-semibold text-slate-900">
            Executive Performance Review
          </h4>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100">

            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Executive
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Calls
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Connected
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  PTP
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Settlements
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 bg-white">

              {[
                {
                  executive: "Arun",
                  calls: "128",
                  connected: "62",
                  ptp: "14",
                  settlement: "3",
                  status: "Above Target",
                },
                {
                  executive: "Priya",
                  calls: "114",
                  connected: "58",
                  ptp: "11",
                  settlement: "2",
                  status: "On Track",
                },
                {
                  executive: "Karthik",
                  calls: "89",
                  connected: "39",
                  ptp: "6",
                  settlement: "1",
                  status: "Needs Review",
                },
              ].map((row) => (
                <tr key={row.executive}>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    {row.executive}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {row.calls}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {row.connected}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {row.ptp}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {row.settlement}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Monitoring Grid */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">

        {/* Team Leader Review */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          <h4 className="text-lg font-semibold text-slate-900">
            Team Leader Review
          </h4>

          <div className="mt-6 space-y-4">

            {[
              "Team A - 82% Achievement",
              "Team B - 76% Achievement",
              "Team C - 91% Achievement",
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

        {/* Floor Manager View */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          <h4 className="text-lg font-semibold text-slate-900">
            Floor Manager View
          </h4>

          <div className="mt-6 space-y-4">

            {[
              "2 Teams Below Target",
              "15 Pending Reviews",
              "4 High Value PTPs",
              "3 Settlement Approvals",
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

        {/* Management View */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          <h4 className="text-lg font-semibold text-slate-900">
            Location Performance
          </h4>

          <div className="mt-6 space-y-4">

            {[
              "Chennai - 84%",
              "Bangalore - 79%",
              "Hyderabad - 88%",
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
      </div>
    </div>
  );
}