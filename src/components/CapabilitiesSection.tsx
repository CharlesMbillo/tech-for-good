
import { Monitor, DollarSign, Server, BarChart2 } from "lucide-react";

const capabilities = [
  {
    icon: Monitor,
    title: "Business Systems",
    description:
      "POS platforms, inventory management, payments, user access control and end-to-end operational workflows.",
  },
  {
    icon: DollarSign,
    title: "Financial Operations",
    description:
      "Reconciliation, transaction integrity, financial reporting, payment workflows and data accuracy at scale.",
  },
  {
    icon: Server,
    title: "DevOps & Reliability",
    description:
      "Production troubleshooting, deployment, testing, synchronisation and keeping systems dependable in daily use.",
  },
  {
    icon: BarChart2,
    title: "Data & Automation",
    description:
      "Excel-based analysis, reporting pipelines, workflow automation and structured data for operational decisions.",
  },
];

export const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="section-py bg-surface" aria-labelledby="capabilities-heading">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-label">What I Do</p>
          <h2 id="capabilities-heading" className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
            Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="bg-white rounded-xl p-6 border border-surface-border card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-ink mb-2">{cap.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
