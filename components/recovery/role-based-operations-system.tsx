const operationalRoles = [
  {
    role: "Top Management",
    color: "bg-red-50 text-red-700",
    description:
      "Enterprise-level operational visibility across all locations, portfolios, teams, and recovery performance.",

    access: [
      "Multi-location visibility",
      "Portfolio intelligence",
      "Recovery projections",
      "Operational analytics",
      "Retention monitoring",
    ],
  },

  {
    role: "Location Head",
    color: "bg-blue-50 text-blue-700",
    description:
      "Location-wide operational supervision including floor performance, lender workflow, and team productivity.",

    access: [
      "Branch operations monitoring",
      "Team performance visibility",
      "Daily collection reports",
      "Lender-wise tracking",
      "Allocation monitoring",
    ],
  },

  {
    role: "Floor Manager",
    color: "bg-purple-50 text-purple-700",
    description:
      "Supervises multiple team leaders and manages operational execution across recovery floors.",

    access: [
      "Floor activity tracking",
      "Executive productivity",
      "Workflow supervision",
      "Disposition monitoring",
      "Recovery escalation review",
    ],
  },

  {
    role: "Team Leader",
    color: "bg-amber-50 text-amber-700",
    description:
      "Monitors executive-level recovery workflows, follow-ups, PTP activity, and operational movement.",

    access: [
      "Executive monitoring",
      "PTP tracking",
      "Settlement workflow",
      "Daily follow-up review",
      "Operational queue management",
    ],
  },

  {
    role: "Recovery Executive",
    color: "bg-emerald-50 text-emerald-700",
    description:
      "Hybrid operational role combining telecalling recovery workflow and field visit execution.",

    access: [
      "Assigned recovery accounts",
      "Disposition updates",
      "Telecalling workflow",
      "Field visit activity",
      "PTP follow-up",
    ],
  },

  {
    role: "Admin & Operations Control",
    color: "bg-slate-100 text-slate-700",
    description:
      "Centralized operational control layer handling reporting, allocations, workflow governance, and lender coordination.",

    access: [
      "Allocation uploads",
      "Disposition governance",
      "MIS reporting",
      "Portfolio retention control",
      "Operational audit visibility",
    ],
  },
];

export function RoleBasedOperationsSystem() {
  return (
    <div className="mt-16">

      {/* Header */}
      <div className="max-w-3xl">

        <p className="text-sm font-semibold tracking-wide text-amber-600">
          ROLE-BASED OPERATIONS SYSTEM
        </p>

        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
          Multi-Layer Recovery Operations Hierarchy
        </h3>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          Structured operational visibility designed for multi-location
          recovery workflows, hybrid field operations, portfolio monitoring,
          and enterprise-scale collections management.
        </p>
      </div>

      {/* Roles Grid */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">

        {operationalRoles.map((item) => (
          <div
            key={item.role}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >

            {/* Role Header */}
            <div>

              <span
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide ${item.color}`}
              >
                {item.role}
              </span>

              <p className="mt-5 text-base leading-7 text-slate-600">
                {item.description}
              </p>
            </div>

            {/* Access Controls */}
            <div className="mt-8 space-y-4">

              {item.access.map((access) => (
                <div
                  key={access}
                  className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4"
                >

                  <p className="text-sm font-semibold text-slate-900">
                    {access}
                  </p>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                    Enabled
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Governance Layer */}
      <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">

        <h4 className="text-xl font-semibold text-slate-900">
          Operational Governance Architecture
        </h4>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          {[
            "Multi-location operational visibility",
            "Hybrid field and telecalling workflows",
            "Restricted lender reporting access",
            "Disposition and retention governance",
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