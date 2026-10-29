import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Server,
  Layers,
  Building2,
  Database,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  ExternalLink,
} from "lucide-react";
import { LIVE_JIMWAS_URL, JIMWAS_REPO_URL } from "./constants";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  category: "support" | "cloud" | "financial";
  typeLabel: string;
  icon: React.ElementType;
  keyMetrics: { label: string; value: string; icon: React.ElementType }[];
  responsibilities: string[];
  techStack: string[];
  link?: { url: string; label: string };
}

const experiences: ExperienceItem[] = [
  {
    id: "msp",
    role: "DevOps Aware & IT Support Specialist",
    company: "Managed Service Provider",
    location: "Nairobi, Kenya",
    period: "2014 – Present (10+ Years)",
    isCurrent: true,
    category: "support",
    typeLabel: "Tenured MSP Leadership",
    icon: Server,
    keyMetrics: [
      { label: "Data Validation Record", value: "99.9% Accuracy", icon: ShieldCheck },
      { label: "Manual Recon Reduction", value: ">60% Saved", icon: TrendingUp },
      { label: "Hands-on IT Support", value: "10+ Years", icon: Zap },
    ],
    responsibilities: [
      "Administer and maintain business-critical IT systems, endpoints, and digital workflows across multiple client operations.",
      "Provide tier-1 and tier-2 hardware, software, and network troubleshooting for workstations, local network equipment, and peripheral devices.",
      "Maintain data integrity, automated backups, and structured digital records across SQL databases and cloud platforms, achieving a documented 99.9% data validation accuracy rate.",
      "Author Standard Operating Procedures (SOPs), incident root cause analyses (RCA), and operational deployment checklists to streamline support workflows.",
      "Design automated data pipelines and financial reporting workflows (Excel, Google Sheets, Power BI) reducing manual reconciliation time by over 60%.",
      "Train end-users and client teams on software tools, cybersecurity hygiene, and secure data handling procedures.",
    ],
    techStack: [
      "Windows Server",
      "Linux Administration",
      "Network Troubleshooting",
      "SQL Databases",
      "Power BI",
      "Advanced Excel",
      "SOP Authoring",
      "Disaster Recovery",
    ],
  },
  {
    id: "jimwas",
    role: "Lead Architect & Developer — Jimwas POS & Business Systems",
    company: "Jimwas Enterprises",
    location: "Nairobi, Kenya",
    period: "2025/26 – Current",
    isCurrent: true,
    category: "cloud",
    typeLabel: "Flagship Production System",
    icon: Layers,
    keyMetrics: [
      { label: "Security & Access", value: "4 RBAC Tiers", icon: ShieldCheck },
      { label: "Database Architecture", value: "13+ Relational Tables", icon: Database },
      { label: "High Availability", value: "IndexedDB Offline Sync", icon: Zap },
    ],
    responsibilities: [
      "Engineered a full-featured retail Point of Sale system supporting 4 user access tiers (Admin, Manager, Cashier, Supervisor) with role-based void workflows.",
      "Built a PostgreSQL schema on Supabase with 13+ relational tables, protected by granular Row Level Security (RLS) policies.",
      "Integrated M-Pesa Daraja STK Push and KCB Buni with real-time transaction state tracking, CSV reconciliation exports, and automated audit trails.",
      "Built offline-first transaction persistence using browser IndexedDB with automatic cloud synchronisation upon network restoration.",
      "Conducted an architecture security review identifying client-side credential exposure risks (VITE_ variables) and formulated backend Edge Function migration runbooks.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL RLS",
      "M-Pesa Daraja API",
      "KCB Buni",
      "IndexedDB",
      "Vercel CI/CD",
    ],
    link: { url: LIVE_JIMWAS_URL, label: "Live App (jimwas-yn.vercel.app)" },
  },
  {
    id: "rentflow",
    role: "Systems Specialist — Rent Reconciliation & Financial Automation",
    company: "Residential Property Deployment (74 Units)",
    location: "Nairobi, Kenya",
    period: "2025/26 – Current",
    isCurrent: true,
    category: "financial",
    typeLabel: "Financial Systems & Banking APIs",
    icon: Building2,
    keyMetrics: [
      { label: "Operational Scale", value: "74 Residential Units", icon: Building2 },
      { label: "Integration", value: "Equity Bank Biller & IPN", icon: Zap },
      { label: "Audit Integrity", value: "Zero Discrepancies", icon: ShieldCheck },
    ],
    responsibilities: [
      "Integrated Equity Bank Biller API and Instant Payment Notification (IPN) webhooks for real-time payment capture and account status updates.",
      "Automated end-to-end payment flows: Payment Notification → Transaction Verification → Ledger Reconciliation → Account Balance Update.",
      "Eliminated payment discrepancies through automated exception flagging and digital audit trail generation.",
      "Maintained tenant records, automated arrears calculations, and monthly financial reporting schedules.",
    ],
    techStack: [
      "Equity Bank Biller API",
      "IPN Webhooks",
      "Automated Reconciliation",
      "Supabase PostgreSQL",
      "Ledger Auditing",
      "Financial Reporting",
    ],
  },
  {
    id: "census",
    role: "Field Systems Architect — Census & Data Capture Platform",
    company: "Field Operations & Validation",
    location: "Kenya",
    period: "2024",
    isCurrent: false,
    category: "support",
    typeLabel: "Resilient Offline Architecture",
    icon: Database,
    keyMetrics: [
      { label: "Data Guarantee", value: "Zero Record Loss", icon: ShieldCheck },
      { label: "Quality Control", value: "Client-Side Schemas", icon: TrendingUp },
      { label: "Sync Engine", value: "Central DB Batch Sync", icon: Zap },
    ],
    responsibilities: [
      "Designed an offline data capture and validation architecture ensuring reliable field data collection and zero record loss prior to central database synchronisation.",
      "Implemented strict client-side validation rules to enforce high data integrity under unstable and remote network connectivity.",
      "Engineered automated conflict resolution and batch synchronization routines into central databases once connections restore.",
    ],
    techStack: [
      "Offline Data Architecture",
      "Data Validation",
      "Quality Control",
      "Batch Synchronization",
      "Audit Trail Generation",
    ],
  },
];

type FilterCategory = "all" | "support" | "cloud" | "financial";

export const ExperienceSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredExperiences = experiences.filter((exp) => {
    if (activeFilter === "all") return true;
    return exp.category === activeFilter;
  });

  return (
    <section id="experience" className="section-py bg-surface border-y border-surface-border" aria-labelledby="experience-heading">
      <div className="section-container">
        {/* Header & Meta */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label">Professional Experience</p>
            <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
              10+ Years of Hands-on Systems &amp; IT Support
            </h2>
            <p className="text-ink-muted text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
              Proven track record across business systems administration, AWS cloud infrastructure,
              financial payment reconciliations, and mission-critical production reliability.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Roles (4)" },
              { id: "support", label: "IT & Systems Support" },
              { id: "cloud", label: "Cloud & POS Engineering" },
              { id: "financial", label: "Financial Automation" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as FilterCategory)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === tab.id
                    ? "bg-ink text-white shadow-sm"
                    : "bg-white text-ink-muted hover:text-ink border border-surface-border hover:border-ink/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="relative pl-0 md:pl-6 space-y-8">
          {/* Vertical Timeline Guide Line */}
          <div
            className="hidden md:block absolute left-9 top-6 bottom-6 w-0.5 bg-gradient-to-b from-brand via-brand/40 to-surface-border"
            aria-hidden="true"
          />

          {filteredExperiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.id}
                className="relative grid grid-cols-1 md:grid-cols-12 gap-6 bg-white border border-surface-border rounded-2xl p-6 md:p-8 card-hover shadow-sm"
              >
                {/* Timeline Node Icon (Desktop) */}
                <div className="hidden md:flex absolute -left-12 top-8 w-12 h-12 rounded-xl bg-ink text-white items-center justify-center border-4 border-surface shadow-md">
                  <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                </div>

                {/* Left Column: Role Details & Key Metrics */}
                <div className="md:col-span-5 space-y-5 border-b md:border-b-0 md:border-r border-surface-border pb-6 md:pb-0 md:pr-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-brand-light text-brand">
                        {exp.typeLabel}
                      </span>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-ink leading-snug">
                      {exp.role}
                    </h3>
                  </div>

                  {/* Company, Location & Duration */}
                  <div className="space-y-1.5 text-xs text-ink-muted">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-3.5 w-3.5 text-brand flex-shrink-0" aria-hidden="true" />
                      <span className="font-semibold text-ink">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-ink-muted flex-shrink-0" aria-hidden="true" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-brand flex-shrink-0" aria-hidden="true" />
                      <span className="font-mono text-ink font-medium">{exp.period}</span>
                    </div>
                  </div>

                  {/* Key Metrics Badges */}
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    {exp.keyMetrics.map((metric, mIdx) => {
                      const MetricIcon = metric.icon;
                      return (
                        <div
                          key={mIdx}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-surface border border-surface-border/80"
                        >
                          <div className="flex items-center gap-2">
                            <MetricIcon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                            <span className="text-[11px] text-ink-muted font-medium">{metric.label}</span>
                          </div>
                          <span className="text-xs font-bold text-ink">{metric.value}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Optional Live link */}
                  {exp.link && (
                    <div className="pt-2">
                      <a
                        href={exp.link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                      >
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        {exp.link.label}
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Column: Responsibilities & Tech Stack */}
                <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-3.5">
                      Core Responsibilities &amp; Impact
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-sm text-ink-muted leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 text-brand mt-1 flex-shrink-0" aria-hidden="true" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-surface-border">
                    <p className="text-[11px] font-semibold text-ink-muted uppercase tracking-wider mb-2">
                      Applied Tools &amp; Technologies
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-medium text-ink bg-surface border border-surface-border rounded-md px-2.5 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
