export function FieldVisitTracker() {
  return (
    <div className="mt-16 grid gap-6 lg:grid-cols-3">

      {/* Main Visit Table */}
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm lg:col-span-2">

        <div className="border-b border-slate-100 px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Field Recovery Operations
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Track assigned field visits and recovery outcomes
              </p>
            </div>

            <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
              Active Visits
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
                  Area
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Field Agent
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Visit Status
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Outcome
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 bg-white">
              {[
                {
                  customer: "Ravi Kumar",
                  area: "Velachery",
                  agent: "Suresh",
                  status: "Assigned",
                  outcome: "Visit Scheduled",
                },
                {
                  customer: "Deepa M",
                  area: "Tambaram",
                  agent: "Prakash",
                  status: "Completed",
                  outcome: "Settlement Discussed",
                },
                {
                  customer: "Arun S",
                  area: "Anna Nagar",
                  agent: "Dinesh",
                  status: "Revisit",
                  outcome: "Customer Unavailable",
                },
              ].map((item) => (
                <tr key={item.customer} className="hover:bg-slate-50">

                  <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-slate-900">
                    {item.customer}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                    {item.area}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                    {item.agent}
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {item.status}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-700">
                    {item.outcome}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Side Widgets */}
      <div className="space-y-6">

        {/* Visit Outcomes */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Visit Outcomes
          </h3>

          <div className="mt-6 space-y-4">
            {[
              "Settlement Discussion",
              "Promise Collected",
              "Door Locked",
              "Address Mismatch",
              "Escalation Recommended",
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

        {/* Regional Activity */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Regional Activity
          </h3>

          <div className="mt-6 space-y-4">
            {[
              "Chennai Central",
              "Tambaram",
              "Velachery",
              "Anna Nagar",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
              >
                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>

                <span className="text-xs font-semibold text-emerald-600">
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}