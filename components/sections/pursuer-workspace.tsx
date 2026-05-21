export function PursuerWorkspace() {
  const accounts = [
    {
      customer: "Ravi Kumar",
      bank: "HDFC Bank",
      amount: "₹48,000",
      stage: "Negotiation",
      agent: "Priya",
    },
    {
      customer: "Arun S",
      bank: "ICICI Bank",
      amount: "₹1,20,000",
      stage: "Settlement",
      agent: "Karthik",
    },
    {
      customer: "Deepa M",
      bank: "Axis Bank",
      amount: "₹76,000",
      stage: "Follow-Up",
      agent: "Naveen",
    },
    {
      customer: "Suresh P",
      bank: "SBI Card",
      amount: "₹34,500",
      stage: "Allocated",
      agent: "Aarthi",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-amber-600">
            OPERATIONAL WORKSPACE
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Manage Operations from One Unified Platform
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            PursuerAI centralizes collections workflows, customer pipelines,
            analytics, and operational reporting into one streamlined workspace.
          </p>
        </div>

        {/* Workspace Layout */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* CRM Table */}
          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
            <div className="border-b border-slate-100 px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Active Accounts
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Live operational account tracking
                  </p>
                </div>

                <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white">
                  Export Report
                </button>
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
                      Bank
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Amount
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Stage
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Agent
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 bg-white">
                  {accounts.map((item) => (
                    <tr
                      key={item.customer}
                      className="transition hover:bg-slate-50"
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                        {item.customer}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                        {item.bank}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-slate-900">
                        {item.amount}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                          {item.stage}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                        {item.agent}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Panels */}
          <div className="space-y-6">
            {/* Team Performance */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  Team Performance
                </h3>

                <span className="text-xs text-slate-500">
                  This Week
                </span>
              </div>

              <div className="mt-8 flex h-40 items-end justify-between gap-3">
                {[40, 60, 45, 85, 70, 100].map((h, i) => (
                  <div
                    key={i}
                    className="w-full rounded-md bg-blue-600"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Workflow Activity */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Workflow Activity
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "Settlement approved for HDFC batch",
                  "Follow-up automation triggered",
                  "Payment reminder sent",
                  "Agent allocation updated",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Recovery Progress */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Recovery Progress
              </h3>

              <div className="mt-6 flex items-center justify-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-[10px] border-amber-500 border-t-blue-600 text-xl font-semibold text-slate-900">
                  78%
                </div>
              </div>

              <p className="mt-4 text-center text-sm text-slate-500">
                Overall operational recovery efficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}