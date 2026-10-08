
const skillGroups = [
  {
    category: "Systems & Development",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "Progressive Web Apps",
      "IndexedDB",
      "Node.js",
      "Python",
    ],
  },
  {
    category: "DevOps & Reliability",
    skills: [
      "Git & GitHub",
      "Vercel",
      "CI/CD (GitHub Actions)",
      "Vite",
      "AWS EC2 / Lambda / S3",
      "Linux Administration",
      "Bash Scripting",
      "Production Troubleshooting",
      "Deployment",
      "Log Analysis",
    ],
  },
  {
    category: "Financial & Operations",
    skills: [
      "Excel (Advanced)",
      "Power BI",
      "Reconciliation",
      "Transaction Analysis",
      "Financial Reporting",
      "Data Integrity",
      "Financial Workflows",
      "Equity Biller",
    ],
  },
  {
    category: "Business Systems",
    skills: [
      "POS Platforms",
      "Inventory Management",
      "Payments",
      "Role-Based Access Control",
      "Auditability",
      "Workflow Automation",
      "Property Management",
      "ERP (Tally Prime, Rance Lab)",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-py bg-surface" aria-labelledby="skills-heading">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-label">Technical &amp; Operational</p>
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category} className="bg-white rounded-xl p-6 border border-surface-border">
              <h3 className="text-xs font-semibold text-brand tracking-widest uppercase mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block text-xs font-medium text-ink bg-surface border border-surface-border rounded-md px-3 py-1.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AWS Certification callout */}
        <div className="mt-8 p-5 bg-white border border-surface-border rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0">
            <svg className="h-5 w-5 text-brand" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">AWS Certified Cloud Practitioner</p>
            <p className="text-xs text-ink-muted mt-0.5">
              Verified credential — cloud fundamentals, EC2, Lambda, S3, RDS and cloud architecture
            </p>
          </div>
          <a
            href="https://www.credly.com/badges/1d468bdd-b3f8-4508-b53a-df1a339b4058"
            target="_blank"
            rel="noreferrer"
            className="sm:ml-auto text-xs font-medium text-brand hover:underline flex-shrink-0"
            aria-label="Verify AWS certification on Credly (opens in new tab)"
          >
            Verify on Credly →
          </a>
        </div>
      </div>
    </section>
  );
};
