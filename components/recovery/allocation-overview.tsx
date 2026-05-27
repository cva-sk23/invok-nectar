import { OpsCard } from "./ops-card";

export function AllocationOverview() {
  return (
    <div className="mt-16">

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <OpsCard title="Allocation Batches" value="24" />
        <OpsCard title="Team Leaders" value="18" />
        <OpsCard title="Pending Negotiations" value="320" />
        <OpsCard title="Settlement Reviews" value="86" />
      </div>

      {/* Main Operations Grid */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">

        {/* Allocation Table */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm lg:col-span-2">

          <div className="border-b border-slate-100 px-6 py-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Allocation Command Center
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Batch-wise operational account distribution
                </p>
              </div>

              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Live Allocation
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Batch
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Lender
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Accounts
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Team
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                {[
                  {
                    batch: "JAN-2026-A",
                    lender: "OneCard",
                    accounts: "2,430",
                    team: "Chennai Team",
                    status: "Active",
                  },
                  {
                    batch: "JAN-2026-B",
                    lender: "Axis Bank",
                    accounts: "1,280",
                    team: "Bangalore Team",
                    status: "Follow-Up",
                  },
                  {
                    batch: "JAN-2026-C",
                    lender: "HDFC Bank",
                    accounts: "980",
                    team: "Hyderabad Team",
                    status: "Settlement",
                  },
                ].map((item) => (
                  <tr key={item.batch} className="hover:bg-slate-50">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-slate-900">
                      {item.batch}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                      {item.lender}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-slate-900">
                      {item.accounts}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                      {item.team}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Side Panels */}
        <div className="space-y-6">

          {/* Team Leader Performance */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Team Leader Performance
            </h3>

            <div className="mt-6 space-y-4">
              {[
                {
                  team: "Chennai Team",
                  recovery: "81%",
                },
                {
                  team: "Bangalore Team",
                  recovery: "74%",
                },
                {
                  team: "Hyderabad Team",
                  recovery: "79%",
                },
              ].map((item) => (
                <div
                  key={item.team}
                  className="rounded-2xl bg-slate-50 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">
                      {item.team}
                    </p>

                    <span className="text-sm font-semibold text-emerald-600">
                      {item.recovery}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bucket Distribution */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Bucket Distribution
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "0-30 DPD",
                "31-60 DPD",
                "61-90 DPD",
                "90+ DPD",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
                >
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>

                  <span className="text-sm font-semibold text-slate-900">
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}