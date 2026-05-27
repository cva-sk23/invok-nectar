export function RecoveryIntelligenceVault() {
  return (
    <div className="mt-16 grid gap-6 lg:grid-cols-3">

      {/* Main Vault Table */}
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm lg:col-span-2">

        <div className="border-b border-slate-100 px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Recovery Intelligence Vault
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Unified historical recovery intelligence and dedupe monitoring
              </p>
            </div>

            <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
              Duplicate Detection Active
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Customer
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Lenders
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Active Accounts
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Historical Status
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Risk
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 bg-white">
              {[
                {
                  customer: "Ravi Kumar",
                  lenders: "3",
                  accounts: "5",
                  status: "Repeat Allocation",
                  risk: "High",
                },
                {
                  customer: "Deepa M",
                  lenders: "2",
                  accounts: "3",
                  status: "Previous Settlement",
                  risk: "Medium",
                },
                {
                  customer: "Arun S",
                  lenders: "4",
                  accounts: "7",
                  status: "Escalation History",
                  risk: "High",
                },
              ].map((item) => (
                <tr key={item.customer} className="hover:bg-slate-50">

                  <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-slate-900">
                    {item.customer}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                    {item.lenders}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-slate-900">
                    {item.accounts}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                    {item.status}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        item.risk === "High"
                          ? "bg-red-50 text-red-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {item.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Side Widgets */}
      <div className="space-y-6">

        {/* Intelligence Signals */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Intelligence Signals
          </h3>

          <div className="mt-6 space-y-4">
            {[
              "Duplicate mobile detection",
              "Historical lender mapping",
              "Repeat delinquency tracking",
              "Settlement behavior history",
              "Cross-team recovery visibility",
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

        {/* Vault Metrics */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Vault Metrics
          </h3>

          <div className="mt-6 space-y-4">
            {[
              "12,480 unified customer records",
              "4,280 duplicate matches detected",
              "820 escalation histories indexed",
              "92% historical recovery visibility",
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