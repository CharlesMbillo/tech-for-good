import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { LIVE_JIMWAS_URL, JIMWAS_REPO_URL, GITHUB_URL } from "./constants";

const jimwasTech = [
  "React",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "M-Pesa Daraja",
  "KCB Buni",
  "Offline-First PWA",
  "IndexedDB Sync",
  "Row Level Security (RLS)",
  "RBAC",
];

const rentflowTech = [
  "React",
  "TypeScript",
  "Supabase",
  "Equity Bank Biller API",
  "IPN Webhooks",
  "Automated Cashbook",
  "Bank Reconciliation",
  "Property Management",
];

const censusTech = [
  "Offline-First",
  "Field Data Capture",
  "Data Validation",
  "Quality Control",
  "Central DB Sync",
  "Audit Trails",
];

export const ProjectsSection = () => {
  return (
    <section id="work" className="section-py bg-white" aria-labelledby="work-heading">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-14">
          <p className="section-label">Featured Projects &amp; Technical Evidence</p>
          <h2 id="work-heading" className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-3">
            Real systems. Real problems.
          </h2>
          <p className="text-ink-muted max-w-2xl">
            Demonstrated track record designing, deploying, and supporting enterprise-grade business applications,
            financial reconciliation workflows, and resilient data collection platforms.
          </p>
        </div>

        {/* 1. Jimwas POS — Flagship */}
        <article
          className="mb-12 rounded-2xl border border-surface-border overflow-hidden"
          aria-labelledby="jimwas-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Visual panel */}
            <div className="lg:col-span-2 bg-ink p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <p className="text-xs text-brand font-semibold tracking-widest uppercase mb-3">
                  Flagship Project · Production POS &amp; Inventory
                </p>
                <h3 id="jimwas-heading" className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                  Jimwas Enterprises POS
                </h3>
                <p className="text-xs text-white/50 mb-4 font-mono">2025/26 – Current | Role: Lead Architect &amp; Developer</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Full-featured retail Point of Sale system engineered with role-based void workflows,
                  granular PostgreSQL RLS policies, M-Pesa STK Push tracking, and offline IndexedDB sync.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {jimwasTech.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="border-white/20 text-white/80 bg-white/5 text-xs"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-3 p-8 flex flex-col justify-between bg-white">
              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-semibold text-ink-muted tracking-widest uppercase mb-2">
                    Key Technical Achievements
                  </h4>
                  <ul className="text-sm text-ink space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span><strong>4 User Access Tiers:</strong> Engineered a full-featured retail POS supporting Admin, Manager, Cashier, and Supervisor with role-based void workflows.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span><strong>13+ Relational Tables with RLS:</strong> Built a PostgreSQL schema on Supabase protected by granular Row Level Security (RLS) policies.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Payment Integration:</strong> Integrated M-Pesa Daraja STK Push &amp; KCB Buni with real-time transaction state tracking, CSV reconciliation exports, and automated audit trails.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Offline-First Persistence:</strong> Built browser IndexedDB caching with automatic cloud synchronisation upon network restoration.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Architecture Security Review:</strong> Identified client-side credential exposure risks (VITE_ variables) and formulated backend Edge Function migration runbooks.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-surface-border">
                <a
                  href={LIVE_JIMWAS_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Jimwas POS live application (opens in new tab)"
                >
                  <Button
                    size="sm"
                    className="bg-brand text-white hover:bg-brand/90 transition-colors font-medium gap-1.5"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Live App (jimwas-yn.vercel.app)
                  </Button>
                </a>
                <Link to="/projects/jimwas-pos">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-surface-border text-ink hover:bg-surface font-medium"
                  >
                    View Case Study
                  </Button>
                </Link>
                <a
                  href={JIMWAS_REPO_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Jimwas POS repository on GitHub (opens in new tab)"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-surface-border text-ink-muted hover:text-ink font-medium gap-1.5"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub Repo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* 2. Rent Reconciliation & Payment Automation System */}
        <article
          className="mb-12 rounded-2xl border border-surface-border overflow-hidden"
          aria-labelledby="rentflow-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Visual panel */}
            <div className="lg:col-span-2 bg-[#1e293b] p-8 flex flex-col justify-between min-h-[260px]">
              <div>
                <p className="text-xs text-brand font-semibold tracking-widest uppercase mb-3">
                  Project · Financial Systems &amp; Reconciliation
                </p>
                <h3 id="rentflow-heading" className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                  Rent Reconciliation &amp; Payment Automation System
                </h3>
                <p className="text-xs text-white/50 mb-4 font-mono">2025/26 – Current | 74-Unit Residential Property</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Real-time bank reconciliation workflows integrating Equity Bank Biller API and IPN webhooks
                  for automated cashbook updates and discrepancy elimination.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {rentflowTech.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="border-white/30 text-white/90 bg-white/10 text-xs"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-3 p-8 flex flex-col justify-between bg-white">
              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-semibold text-ink-muted tracking-widest uppercase mb-2">
                    Key Technical Achievements
                  </h4>
                  <ul className="text-sm text-ink space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Equity Bank Biller API &amp; IPN:</strong> Integrated Instant Payment Notification (IPN) webhooks for real-time payment capture and account status updates.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span><strong>End-to-End Automated Flows:</strong> Streamlined Payment Notification → Transaction Verification → Ledger Reconciliation → Account Balance Update.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Discrepancy Elimination:</strong> Eliminated manual payment discrepancies through automated exception flagging and digital audit trail generation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Operational Scale:</strong> Deployed for 74-unit residential property in Nairobi covering tenant records, arrears tracking, and financial reconciliation.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-surface-border">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Rent Reconciliation System on GitHub (opens in new tab)"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-surface-border text-ink-muted hover:text-ink font-medium gap-1.5"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* 3. Census & Field Data Capture Platform */}
        <article
          className="rounded-2xl border border-surface-border overflow-hidden"
          aria-labelledby="census-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Visual panel */}
            <div className="lg:col-span-2 bg-[#0f172a] p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <p className="text-xs text-brand font-semibold tracking-widest uppercase mb-3">
                  Project · Data Integrity &amp; Offline Systems
                </p>
                <h3 id="census-heading" className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                  Census &amp; Field Data Capture Platform
                </h3>
                <p className="text-xs text-white/50 mb-4 font-mono">2024 | Field Data Operations</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Engineered an offline-first data capture and validation architecture ensuring reliable field data
                  collection and zero record loss prior to central database synchronisation.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {censusTech.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="border-white/30 text-white/90 bg-white/10 text-xs"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-3 p-8 flex flex-col justify-between bg-white">
              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-semibold text-ink-muted tracking-widest uppercase mb-2">
                    Key Technical Achievements
                  </h4>
                  <ul className="text-sm text-ink space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Zero Record Loss Architecture:</strong> Designed resilient local caching ensuring 100% field data retention across unstable rural connections.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Validation at Source:</strong> Enforced client-side schemas to catch errors before records enter synchronization pipelines, upholding strict data quality.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span><strong>Central Database Synchronization:</strong> Automated batch reconciliation against central repositories once network connectivity was detected.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-surface-border">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Census Platform on GitHub (opens in new tab)"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-surface-border text-ink-muted hover:text-ink font-medium gap-1.5"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
