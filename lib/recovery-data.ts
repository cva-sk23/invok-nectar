export const dispositionGroups = [
  {
    parent: "SKIP",
    description: "Unreachable and contact failure workflows",
    children: ["No Contact", "RNR", "Wrong Number"],
  },

  {
    parent: "PTP",
    description: "Customer payment commitment workflows",
    children: ["Settlement", "Part Paid", "PDC"],
  },

  {
    parent: "WIP",
    description: "Active negotiation and follow-up workflows",
    children: ["CB", "SettNeg", "LM"],
  },

  {
    parent: "RTP",
    description: "Restricted and release-to-portfolio workflows",
    children: ["Demise", "Legal", "Police Complaint", "DND"],
  },
];

export const operationalRoles = [
  {
    role: "Top Management",
    access: [
      "Multi-location visibility",
      "Portfolio intelligence",
      "Recovery projections",
    ],
  },

  {
    role: "Location Head",
    access: [
      "Branch operations monitoring",
      "Team performance visibility",
      "Daily collection reports",
    ],
  },

  {
    role: "Floor Manager",
    access: [
      "Executive productivity",
      "Workflow supervision",
      "Disposition monitoring",
    ],
  },

  {
    role: "Team Leader",
    access: [
      "PTP tracking",
      "Settlement workflow",
      "Queue monitoring",
    ],
  },

  {
    role: "Recovery Executive",
    access: [
      "Assigned accounts",
      "Disposition updates",
      "Field visit activity",
    ],
  },

  {
    role: "Admin & Operations Control",
    access: [
      "Allocation uploads",
      "MIS reporting",
      "Portfolio retention control",
    ],
  },
];

export const executiveMetrics = [
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
];