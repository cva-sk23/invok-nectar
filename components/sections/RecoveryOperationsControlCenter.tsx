import { AllocationOverview } from "@/components/recovery/allocation-overview";
import { SettlementWorkflow } from "@/components/recovery/settlement-workflow";
import { AgentProductivityBoard } from "@/components/recovery/agent-productivity-board";
import { PtpTracker } from "@/components/recovery/ptp-tracker";

export function RecoveryOperationsControlCenter() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-amber-600">
            RECOVERY OPERATIONS CONTROL CENTER
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Built for High-Volume Recovery and Allocation Operations
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Manage account allocations, monitor team productivity,
            track recovery performance, and streamline operational
            workflows from one centralized platform.
          </p>
        </div>

        {/* Sections */}
        <AllocationOverview />

        <SettlementWorkflow />

        <AgentProductivityBoard />

        <PtpTracker />
      </div>
    </section>
  );
}