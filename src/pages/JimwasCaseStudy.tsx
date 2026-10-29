
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GITHUB_URL } from "@/components/constants";

const tech = [
  "React 18",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "PWA",
  "IndexedDB",
  "Vite",
  "Tailwind CSS",
  "RBAC",
  "Payments",
  "Inventory",
  "Offline Sync",
];

const architecture = [
  { layer: "User Interface", detail: "React 18 + TypeScript PWA — installable, offline-capable" },
  { layer: "Business Logic", detail: "Sale completion, RBAC, payment workflows, delivery-fee lifecycle" },
  { layer: "Local State (Offline)", detail: "IndexedDB — stores pending transactions during connectivity loss" },
  { layer: "Synchronisation", detail: "Deterministic sync on reconnect — conflict detection, idempotent writes" },
  { layer: "Database", detail: "Supabase / PostgreSQL — transactions, inventory, users, audit log" },
  { layer: "Deployment", detail: "Vercel — CI/CD via GitHub Actions" },
];

const challenges = [
  {
    title: "Duplicate Transaction Prevention",
    detail:
      "Sales can be submitted multiple times if a user double-clicks or a network retry fires. Each sale is assigned a deterministic idempotency key generated from the cart contents and timestamp. The server rejects any second write with the same key — the user sees one completed transaction.",
  },
  {
    title: "Idempotent Sale Completion",
    detail:
      "The sale completion flow (validate → reserve stock → write sale record → write sale items → debit payment account) is designed so that any partial failure can be safely retried. Each step checks current state before executing — completing a partially-saved sale never creates orphaned records.",
  },
  {
    title: "Stock Reversal on Voided Sales",
    detail:
      "When a sale is voided, the system generates reversal stock movements for every line item using the original sale's deterministic movement identifiers. This ensures the stock adjustment is auditable, traceable to the specific sale, and cannot be applied twice.",
  },
  {
    title: "Offline Synchronisation",
    detail:
      "IndexedDB holds pending transactions locally when Supabase is unreachable. On reconnect, the sync process replays queued operations in original order, applies idempotency checks, and confirms each write before dequeuing. Connectivity interruptions do not result in data loss or duplication.",
  },
  {
    title: "Role-Based Access Control",
    detail:
      "Access gates are enforced at both UI and database (RLS) level. A cashier cannot void a sale, access management reports or modify inventory settings. All permission checks use the authenticated session context — not client-supplied role claims alone.",
  },
  {
    title: "Payment Account & Delivery Fee Lifecycle",
    detail:
      "Payments support multiple accounts (cash, mobile money). The delivery fee has its own lifecycle: assigned at sale creation, confirmed on dispatch, voided if the sale is cancelled. Every status change writes an audit record.",
  },
];

export const JimwasCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Back nav */}
      <div className="border-b border-surface-border bg-white sticky top-0 z-30">
        <div className="section-container py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
            aria-label="Back to portfolio"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Portfolio
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors"
            aria-label="GitHub (opens in new tab)"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-ink py-16 md:py-24" aria-labelledby="casestudy-heading">
        <div className="section-container">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand mb-4">
            Case Study · Production POS
          </p>
          <h1 id="casestudy-heading" className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Jimwas POS
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">
            Production point-of-sale and inventory platform designed around transaction integrity,
            offline operation, payments, inventory management and reliable synchronisation.
          </p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <Badge
                key={t}
                variant="outline"
                className="border-white/20 text-white/70 bg-white/5 text-xs"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <div className="section-container py-16 md:py-20 space-y-16">

        {/* Overview */}
        <section aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="text-2xl font-bold text-ink tracking-tight mb-6">
            Overview
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-ink-muted uppercase tracking-widest mb-3">The Problem</h3>
              <p className="text-ink-muted leading-relaxed text-sm">
                Retail and hospitality businesses needed a system that could process sales,
                track inventory and handle multiple payment methods reliably — including
                during connectivity interruptions. Data needed to remain accurate and
                reconcilable at the end of every trading day, with full auditability of
                every stock movement, payment and user action.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-ink-muted uppercase tracking-widest mb-3">The Solution</h3>
              <p className="text-ink-muted leading-relaxed text-sm">
                A React/TypeScript progressive web app with offline-first architecture.
                Sales, inventory movements and payment records are written to IndexedDB
                when offline and synchronised deterministically to Supabase/PostgreSQL
                when connectivity is restored. Every critical operation is idempotent.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section aria-labelledby="arch-heading">
          <h2 id="arch-heading" className="text-2xl font-bold text-ink tracking-tight mb-6">
            Architecture
          </h2>
          <div className="rounded-xl border border-surface-border overflow-hidden">
            <div className="bg-surface px-6 py-3 border-b border-surface-border">
              <p className="text-xs font-semibold text-ink-muted tracking-widest uppercase">
                System Layers
              </p>
            </div>
            <div className="divide-y divide-surface-border">
              {architecture.map((layer, idx) => (
                <div key={idx} className="flex items-start gap-4 px-6 py-4">
                  <div className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-brand">{idx + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{layer.layer}</p>
                    <p className="text-sm text-ink-muted mt-0.5">{layer.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Challenges */}
        <section aria-labelledby="challenges-heading">
          <h2 id="challenges-heading" className="text-2xl font-bold text-ink tracking-tight mb-6">
            Engineering Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="rounded-xl border border-surface-border p-6 bg-white card-hover"
              >
                <h3 className="text-sm font-semibold text-ink mb-3">{challenge.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{challenge.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back CTA */}
        <div className="border-t border-surface-border pt-10 flex flex-wrap gap-4">
          <Link to="/">
            <Button variant="outline" className="border-surface-border text-ink font-medium gap-2">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Portfolio
            </Button>
          </Link>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            <Button className="bg-ink text-white hover:bg-brand transition-colors font-medium gap-2">
              <Github className="h-4 w-4" aria-hidden="true" />
              View on GitHub
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
