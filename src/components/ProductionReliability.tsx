
import { ShieldCheck, RefreshCw, Wifi, Database, Lock, TestTube } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Transaction Idempotency",
    description:
      "Sales are completed exactly once. Duplicate transaction prevention and idempotent sale completion are core design requirements — not afterthoughts.",
  },
  {
    icon: Database,
    title: "Data Integrity",
    description:
      "Stock movements, financial records and audit trails are tied together. Every voided sale triggers a verifiable stock reversal. Every payment leaves a traceable record.",
  },
  {
    icon: Wifi,
    title: "Offline-First Workflows",
    description:
      "Systems must continue operating when connectivity is unreliable. IndexedDB-backed local state with deterministic synchronisation when the connection restores.",
  },
  {
    icon: RefreshCw,
    title: "Cloud Synchronisation",
    description:
      "Local state is reconciled against Supabase/PostgreSQL with conflict detection. Data written offline does not overwrite newer server state silently.",
  },
  {
    icon: Lock,
    title: "Role-Based Access Control",
    description:
      "Access to sensitive operations — voids, refunds, reports, user management — is gated by role. Cashier, manager and admin capabilities are clearly separated.",
  },
  {
    icon: TestTube,
    title: "Production Troubleshooting",
    description:
      "Production issues are traced systematically rather than guessed at. Log analysis, database inspection and transaction audit trails are the first tools.",
  },
];

export const ProductionReliability = () => {
  return (
    <section
      id="reliability"
      className="section-py bg-surface"
      aria-labelledby="reliability-heading"
    >
      <div className="section-container">
        <div className="mb-12">
          <p className="section-label">Operational Standards</p>
          <h2
            id="reliability-heading"
            className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-3"
          >
            Production &amp; Reliability
          </h2>
          <p className="text-ink-muted max-w-2xl">
            I care whether the system works correctly after deployment — not just whether
            it passes a demo. These are the standards I apply.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-xl p-6 border border-surface-border card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-ink mb-2">{pillar.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
