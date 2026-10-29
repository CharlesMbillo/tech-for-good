const skillGroups = [
  {
    category: "Systems & Infrastructure Support",
    skills: [
      "Windows Server",
      "Linux Administration",
      "Workstation Configuration",
      "User Helpdesk Support",
      "Standard Operating Procedures (SOPs)",
      "Hardware & Peripherals",
      "Disaster Recovery Runbooks",
      "Automated Patch Management",
    ],
  },
  {
    category: "Networking & Cloud Infrastructure",
    skills: [
      "AWS Cloud Practitioner",
      "EC2 & VPC Design",
      "S3 & IAM Least Privilege",
      "CloudWatch",
      "Subnetting & Route Tables",
      "Security Groups & DNS",
      "TCP/IP & VPN Fundamentals",
      "Vercel CI/CD",
    ],
  },
  {
    category: "Databases & Data Integrity",
    skills: [
      "Supabase (PostgreSQL)",
      "MySQL",
      "Microsoft Access",
      "Row Level Security (RLS)",
      "Schema Design & Indexing",
      "Data Validation & Quality Control",
      "99.9% Accuracy Record",
    ],
  },
  {
    category: "Financial & Payment Systems",
    skills: [
      "M-Pesa Daraja STK Push API",
      "KCB Buni Gateway",
      "Equity Bank Biller API",
      "Instant Payment Notification (IPN)",
      "Automated Cashbook",
      "Bank Reconciliation Workflows",
    ],
  },
  {
    category: "Application & Scripting",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Python",
      "Node.js",
      "RESTful APIs",
      "Git & GitHub",
      "Offline-First PWA (IndexedDB Sync)",
    ],
  },
  {
    category: "Productivity & Reporting Tools",
    skills: [
      "Advanced Microsoft Excel",
      "Formulas & Pivot Tables",
      "Macro Automation",
      "Google Sheets Automation",
      "Power BI Dashboards",
      "SharePoint & Teams",
    ],
  },
];

const competencies = [
  {
    requirement: "LAN / WAN / Network Maintenance",
    competency: "Practical AWS VPC design (subnets, route tables, security groups) and 10+ years on-premise MSP network support.",
  },
  {
    requirement: "Server & Workstation Administration",
    competency: "Linux & Windows administration, EC2 provisioning, endpoint troubleshooting, automated patch management.",
  },
  {
    requirement: "Data Integrity & Security",
    competency: "PostgreSQL RLS policies, RBAC access control, IAM least privilege, verified 99.9% data validation record.",
  },
  {
    requirement: "Backup & Disaster Recovery",
    competency: "Automated cloud backups, S3 versioning, disaster recovery runbooks with documented RPO/RTO metrics.",
  },
  {
    requirement: "Systems & Payment Integration",
    competency: "Hands-on production integrations with M-Pesa Daraja, KCB Buni, and Equity Bank Biller APIs.",
  },
  {
    requirement: "User Support & SOP Documentation",
    competency: "10+ years resolving multi-user technical support incidents, creating standard operating runbooks.",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-py bg-surface" aria-labelledby="skills-heading">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-label">Core Technical Competencies</p>
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
            Technical &amp; Systems Competencies
          </h2>
          <p className="text-ink-muted text-sm mt-2 max-w-2xl">
            A comprehensive overview of tools, cloud services, databases, and operational frameworks applied in production.
          </p>
        </div>

        {/* 6 Competency Skill Groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="bg-white rounded-xl p-6 border border-surface-border">
              <h3 className="text-xs font-semibold text-brand tracking-widest uppercase mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block text-xs font-medium text-ink bg-surface border border-surface-border rounded-md px-2.5 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Documented Competency Matrix */}
        <div className="mt-12 bg-white border border-surface-border rounded-2xl p-6 md:p-8">
          <div className="mb-6">
            <span className="text-xs font-semibold text-brand tracking-widest uppercase">Operational Evidence</span>
            <h3 className="text-xl font-bold text-ink mt-1">Alignment to IT Officer &amp; Systems Engineering Requirements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competencies.map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-surface border border-surface-border">
                <p className="text-xs font-bold text-ink uppercase tracking-wider mb-1.5">{item.requirement}</p>
                <p className="text-sm text-ink-muted leading-relaxed">{item.competency}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AWS Certification callout */}
        <div className="mt-8 p-5 bg-white border border-surface-border rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0">
            <svg className="h-5 w-5 text-brand" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">AWS Certified Cloud Practitioner (Gold Class, 2024)</p>
            <p className="text-xs text-ink-muted mt-0.5">
              Amazon Web Services / Ajira eMobilis — Verified credential across EC2, VPC, S3, IAM, CloudWatch, RDS &amp; Cloud Security.
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
