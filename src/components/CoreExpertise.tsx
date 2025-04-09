import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const SmartBadge = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);

  // Extract the first keyword before ":" or use the whole text if no colon
  const colonIndex = text.indexOf(":");
  const firstPart = colonIndex > 0 ? text.substring(0, colonIndex + 1) : text;
  const restPart = colonIndex > 0 ? text.substring(colonIndex + 1) : "";

  // Determine if we need a "Read more" toggle
  const needsToggle = restPart.length > 30 || text.length > 50;

  return (
    <Badge
      variant="outline"
      className="bg-purple-50 text-purple-700 border-purple-200"
    >
      {needsToggle ? (
        <>
          {expanded ? (
            <span>{text}</span>
          ) : (
            <span>
              {firstPart}
              {restPart.length > 0 && (
                <>
                  {restPart.substring(0, 30)}
                  {restPart.length > 30 && "..."}
                </>
              )}
            </span>
          )}
          {needsToggle && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              className="ml-1 text-purple-600 hover:text-purple-800 font-medium"
            >
              {expanded ? (
                <span className="flex items-center">
                  less <ChevronUpIcon className="ml-0.5 h-3 w-3" />
                </span>
              ) : (
                <span className="flex items-center">
                  more <ChevronDownIcon className="ml-0.5 h-3 w-3" />
                </span>
              )}
            </button>
          )}
        </>
      ) : (
        text
      )}
    </Badge>
  );
};

export const CoreExpertise = () => {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>(
    {}
  );

  const toggleCardExpansion = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const expertiseAreas = [
    {
      title:
        "Cloud Computing (focus on Cloud Native technologies like microservices, containers, and container orchestration)",
      badges: [
        "Microservices Architecture: (Decoupled services with single responsibilities, API-driven communication (REST/gRPC), Independent scaling of components, Resilience patterns (circuit breakers, retries))",
        "Containerization & Orchestration: (Docker, Kubernetes)",
        "Infrastructure as Code IaC: (Terraform, AWS CloudFormation)",
        "Cloud Platforms (AWS/Openstack): (Compute: EC2, Lambda, ECS/EKS)(Storage: S3, EBS, EFS)(Networking: VPC, ALB/NLB, Route 53)(Database: RDS, DynamoDB, ElastiCache)",
        "CI/CD Pipelines: (GitHub Actions: Integrated CI/CD) (Jenkins: Customizable pipelines)",
        "Operational Excellence: Linux Administration (Bash scripting for automation, Systemd for service management, Performance tuning (sysctl), Security hardening (SELinux, iptables))",
        "Configuration Management: (YAML/JSON for declarative configs, Helm for Kubernetes packaging, Ansible for server provisioning)",
        "Emerging Trends: Serverless architecture (Lambda, Cloud Functions), Edge computing (CloudFront, Lambda@Edge)",
      ],
    },
    {
      title: "Database and Data Analysis Technologies Expertise",
      badges: [
        "Database Technologies: Relational Databases: (PostgreSQL:Advanced open-source RDBMS with JSON support), (MySQL: Popular relational database for web applications), (SQL Optimization: Query tuning, indexing strategies), (Schema Design: Normalization, ER modeling)",
        "Database Technologies: NoSQL Solutions: (MongoDB: Document-oriented database), (Flexible Schemas: Dynamic data structures), (Aggregation Framework: Complex data processing), (Atlas: Managed cloud database service)",
        "Data Collection & Analysis: Data Collection Tools: (Survey Design: Form logic, validation), (Field Data Management: Offline-capable solutions), (Data Integration: API connections to databases)",
        "Business Intelligence: (Power BI: Interactive dashboards and reports), (DAX Formulas: Advanced calculations), (Data Modeling: Star schemas, relationships), (Visual Storytelling: Effective data presentation)",
        "Spreadsheet Mastery: Excel Advanced Features: (Power Query (ETL capabilities)), (PivotTables and advanced charting), (VBA scripting for automation), (Complex formulas (INDEX-MATCH, array formulas))",
        "Data Cleaning: Transformation techniques",
        "Financial Modeling: Forecasting, scenario analysis",
        "Data Workflow Integration: (ETL Processes: Extract, Transform, Load pipelines), (API Connections: Live data feeds to BI tools), (Data Governance: Quality control measures), (Cross-Platform Integration: Connecting Excel to databases)",
        "Emerging Skills: (Open Data Kit (ODK) Cloud integrations), (PostGIS for geospatial data in PostgreSQL), (MongoDB Atlas Charts for embedded visualizations), (Power BI Premium capabilities), (Excel Power Pivot for big data analysis)",
      ],
    },
    {
      title: "Full-Stack Web & Mobile Development",
      badges: [
        "MERN STACK",
        "HTML/CSS/JS",
        "Bootstrap/Tailwind CSS",
        "Node.js",
        "React Native",
        "sqlite",
        "Django/Flask",
      ],
    },
    {
      title: "Enterprise IT Consulting",
      badges: ["Strategy", "Architecture", "Implementation"],
    },
  ];

  // Number of badges to show before collapsing the card
  const MAX_VISIBLE_BADGES = 5;

  return (
    <section id="expertise" className="py-16 bg-purple-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
              Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Core Technical Skills
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Specialized expertise in building solutions for emerging markets
              with a focus on accessibility and impact.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {expertiseAreas.map((expertise, index) => (
            <Card
              key={index}
              className="border border-purple-100 hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                    <CheckIcon className="h-4 w-4 text-purple-700" />
                  </div>
                  <div className="space-y-2 w-full">
                    <h3 className="font-medium text-left">{expertise.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {expertise.badges
                        .slice(
                          0,
                          expandedCards[index]
                            ? expertise.badges.length
                            : MAX_VISIBLE_BADGES
                        )
                        .map((badge, i) => (
                          <SmartBadge key={i} text={badge} />
                        ))}
                    </div>
                    {expertise.badges.length > MAX_VISIBLE_BADGES && (
                      <button
                        onClick={() => toggleCardExpansion(index)}
                        className="flex items-center text-sm text-purple-600 hover:text-purple-800 mt-2"
                      >
                        {expandedCards[index] ? (
                          <>
                            Show less <ChevronUpIcon className="ml-1 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Read more...{" "}
                            <ChevronDownIcon className="ml-1 h-4 w-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
