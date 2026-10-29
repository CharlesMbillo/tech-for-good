
import { Server, Network, Database, CreditCard, Code, FileSpreadsheet } from "lucide-react";

const capabilities = [
  {
    icon: Server,
    title: "Systems & Infrastructure Support",
    description:
      "Windows Server & Linux administration, workstation configuration, user helpdesk support, hardware/peripherals, SOPs, and disaster recovery runbooks.",
  },
  {
    icon: Network,
    title: "Networking & Cloud Infrastructure",
    description:
      "AWS Cloud Practitioner (EC2, VPC, S3, IAM, CloudWatch), subnetting, security groups, route tables, DNS, TCP/IP, VPN fundamentals, and Vercel CI/CD.",
  },
  {
    icon: Database,
    title: "Databases & Data Integrity",
    description:
      "Supabase (PostgreSQL), MySQL, Microsoft Access, Row Level Security (RLS), schema design, indexing, and data validation (documented 99.9% accuracy record).",
  },
  {
    icon: CreditCard,
    title: "Financial & Payment Systems",
    description:
      "M-Pesa Daraja STK Push API, KCB Buni Gateway, Equity Bank Biller API, Instant Payment Notification (IPN) webhooks, automated cashbook and bank reconciliation.",
  },
  {
    icon: Code,
    title: "Application & Scripting",
    description:
      "React, TypeScript, JavaScript, Python, Node.js, RESTful APIs, Git/GitHub, and offline-first Progressive Web Apps (IndexedDB sync).",
  },
  {
    icon: FileSpreadsheet,
    title: "Productivity & Reporting Tools",
    description:
      "Advanced Microsoft Excel & Google Sheets (formulas, pivot tables, macro automation), Power BI dashboards, SharePoint, Google Workspace, and Microsoft Teams.",
  },
];

export const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="section-py bg-surface" aria-labelledby="capabilities-heading">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-label">Core Technical Competencies</p>
          <h2 id="capabilities-heading" className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
            Capabilities &amp; Domains
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
