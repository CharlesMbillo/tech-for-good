
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const jimwasTech = [
  "React",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "PWA",
  "IndexedDB",
  "RBAC",
  "Payments",
  "Inventory",
  "Offline Sync",
];

const rentflowTech = [
  "React",
  "TypeScript",
  "Supabase",
  "Financial Workflows",
  "Reconciliation",
  "Property Management",
];

export const ProjectsSection = () => {
  return (
    <section id="work" className="section-py bg-white" aria-labelledby="work-heading">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-14">
          <p className="section-label">Selected Work</p>
          <h2 id="work-heading" className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-3">
            Real systems. Real problems.
          </h2>
          <p className="text-ink-muted max-w-2xl">
            Practical engineering decisions built around operational reliability, financial accuracy
            and the needs of the people running the business.
          </p>
        </div>

        {/* Jimwas POS — Flagship */}
        <article
          className="mb-12 rounded-2xl border border-surface-border overflow-hidden"
          aria-labelledby="jimwas-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Visual panel */}
            <div className="lg:col-span-2 bg-ink p-8 flex flex-col justify-between min-h-[280px]">
              <div>
                <p className="text-xs text-brand font-semibold tracking-widest uppercase mb-3">
                  Flagship Project · Production POS
                </p>
                <h3 id="jimwas-heading" className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                  Jimwas POS
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Point-of-sale and inventory platform built for transaction integrity,
                  offline operation, payments, stock management and reliable synchronisation.
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
                    The Problem
                  </h4>
                  <p className="text-ink text-sm leading-relaxed">
                    Retail and hospitality businesses needed a system that could process sales,
                    track inventory and handle payments reliably — including during connectivity
                    interruptions. Reconciliation of transactions and stock movements had to be
                    auditable after the fact.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-ink-muted tracking-widest uppercase mb-2">
                    Engineering Focus
                  </h4>
                  <ul className="text-sm text-ink space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span>Transaction idempotency to prevent duplicate sale records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span>Offline-first via IndexedDB with deterministic sync on reconnect</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span>Stock reversal on voided sales with auditable movement records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span>Role-based access control across cashier, manager and admin roles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span>Payment account handling and delivery-fee lifecycle tracking</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-surface-border">
                <Link to="/projects/jimwas-pos">
                  <Button
                    size="sm"
                    className="bg-ink text-white hover:bg-brand transition-colors font-medium"
                  >
                    View Case Study
                  </Button>
                </Link>
                <a
                  href="https://github.com/CharlesMbillo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Jimwas POS on GitHub (opens in new tab)"
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

        {/* RentFlow */}
        <article
          className="rounded-2xl border border-surface-border overflow-hidden"
          aria-labelledby="rentflow-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Visual panel */}
            <div className="lg:col-span-2 bg-brand p-8 flex flex-col justify-between min-h-[260px]">
              <div>
                <p className="text-xs text-white/60 font-semibold tracking-widest uppercase mb-3">
                  Project · Housing & Finance
                </p>
                <h3 id="rentflow-heading" className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                  RentFlow
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Housing management and financial operations platform covering property
                  administration, rent workflows and reconciliation.
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
                    Deployment Context
                  </h4>
                  <p className="text-ink text-sm leading-relaxed">
                    Built for a 74-unit residential property deployment in Nairobi. Covers tenant
                    workflows, rent collection, Equity Biller payment reconciliation and
                    operational reporting for property administration.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-ink-muted tracking-widest uppercase mb-2">
                    Key Capabilities
                  </h4>
                  <ul className="text-sm text-ink space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span>Rent payment workflows with Equity Biller reconciliation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span>74-unit property and tenant management operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span>Financial reporting and arrears tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand mt-0.5 flex-shrink-0">—</span>
                      <span>Transaction audit trail and reconciliation reporting</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-surface-border">
                <a
                  href="https://github.com/CharlesMbillo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="RentFlow on GitHub (opens in new tab)"
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
