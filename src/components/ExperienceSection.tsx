
const experiences = [
  {
    role: "IT & DevOps Support — POS & Business Systems",
    period: "Ongoing",
    type: "Production Systems",
    responsibilities: [
      "Deployed and maintained Jimwas POS — a React/TypeScript/Supabase PWA covering sales, inventory, payments and RBAC",
      "Investigated and resolved data integrity issues: duplicate transactions, orphaned stock movements and synchronisation conflicts",
      "Implemented transaction idempotency, offline-first operation and deterministic stock reversal on voided sales",
      "Managed role-based access control across cashier, manager and admin user roles",
      "Maintained production deployments on Vercel with CI/CD via GitHub",
    ],
  },
  {
    role: "Housing Management & Financial Operations",
    period: "Ongoing",
    type: "Financial Systems",
    responsibilities: [
      "Built and deployed RentFlow for a 74-unit residential property deployment in Nairobi",
      "Managed Equity Biller reconciliation workflows for rent payment processing",
      "Maintained tenant records, arrears tracking and financial reporting",
      "Handled end-to-end rent collection workflows including payment verification and reconciliation",
    ],
  },
  {
    role: "ERP & Business Systems Support",
    period: "Prior",
    type: "Operational IT",
    responsibilities: [
      "Supported Rance Lab Hotel POS, Tally Prime Agrovet IMS and Amonium Lite POS deployments",
      "Managed database administration, data backups and user access management",
      "Handled system troubleshooting, operational configuration and user training",
      "Worked with Excel-based reporting, Power BI dashboards and financial data workflows",
    ],
  },
  {
    role: "Cloud Infrastructure & DevOps",
    period: "Ongoing",
    type: "DevOps",
    responsibilities: [
      "AWS Certified Cloud Practitioner — EC2, Lambda, S3, RDS, VPC",
      "CI/CD pipeline management with GitHub Actions and Vercel deployments",
      "Linux administration, Bash scripting and system configuration",
      "Production monitoring, log analysis and incident investigation",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-py bg-white" aria-labelledby="experience-heading">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-label">Track Record</p>
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
            Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 pb-8 border-b border-surface-border last:border-0"
            >
              <div className="lg:col-span-1">
                <span className="inline-block text-xs font-semibold text-brand tracking-widest uppercase mb-1">
                  {exp.type}
                </span>
                <h3 className="text-sm font-semibold text-ink leading-snug">{exp.role}</h3>
                <p className="text-xs text-ink-muted mt-1">{exp.period}</p>
              </div>
              <div className="lg:col-span-3">
                <ul className="space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink-muted">
                      <span className="text-brand mt-1.5 flex-shrink-0">—</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
