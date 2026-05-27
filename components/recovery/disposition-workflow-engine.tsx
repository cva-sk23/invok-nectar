const dispositionGroups = [
  {
    parent: "SKIP",
    color: "bg-red-50 text-red-700",
    description: "Unreachable and contact failure workflows",
    children: ["No Contact", "RNR", "Wrong Number"],
  },
  {
    parent: "PTP",
    color: "bg-emerald-50 text-emerald-700",
    description: "Customer payment commitment workflows",
    children: ["Settlement", "Part Paid", "PDC"],
  },
  {
    parent: "WIP",
    color: "bg-amber-50 text-amber-700",
    description: "Active negotiation and follow-up workflows",
    children: ["CB", "SettNeg", "LM"],
  },
  {
    parent: "RTP",
    color: "bg-slate-100 text-slate-700",
    description: "Restricted and release-to-portfolio workflows",
    children: ["Demise", "Legal", "Police Complaint", "DND"],
  },
];

export function DispositionWorkflowEngine() {
  return (
    <div className="mt-16">

      <div className="max-w-3xl">
        <p className="text-sm font-semibold tracking-wide text-amber-600">
          DISPOSITION WORKFLOW ENGINE
        </p>

        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
          Hierarchical Operational Disposition Architecture
        </h3>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          Structured disposition hierarchy designed for recovery workflow
          movement, operational restrictions, follow-up management,
          and portfolio lifecycle control.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">

        {dispositionGroups.map((group) => (
          <div
            key={group.parent}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >

            <div>
              <span
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide ${group.color}`}
              >
                {group.parent}
              </span>

              <p className="mt-4 text-base leading-7 text-slate-600">
                {group.description}
              </p>
            </div>

            <div className="mt-8 space-y-4">

              {group.children.map((child) => (
                <div
                  key={child}
                  className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4"
                >

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {child}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Workflow-linked operational disposition
                    </p>
                  </div>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">

        <h4 className="text-xl font-semibold text-slate-900">
          Operational Workflow Controls
        </h4>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          {[
            "Admin-only DNF approval",
            "Auto follow-up scheduling",
            "Disposition audit tracking",
            "Restricted portfolio movement",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-medium text-slate-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}