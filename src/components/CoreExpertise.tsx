import { CheckIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CoreExpertise = () => {
  const expertiseAreas = [
    {
      title:
        "Cloud Computing (focus on Cloud Native technologies like microservices, containers, and container orchestration)",
      badges: [
        "Microservices Architecture: (Decoupled services with single responsibilities, API-driven communication (REST/gRPC), Independent scaling of components, Resilience patterns (circuit breakers, retries))",
        "Containerization  & Orchestration: (Docker, Kubbernetes)",
        "Infrastructure as Code IaC: (Terraform, AWS CloudFormation)",
        "Cloud Platforms (AWS/Openstack): (Compute: EC2, Lambda, ECS/EKS)(Storage: S3, EBS, EFS)(Storage: S3, EBS, EFS)(Networking: VPC, ALB/NLB, Route 53)(Database: RDS, DynamoDB, ElastiCache)",
        "CI/CD Pipelines: (GitHub Actions: Integrated CI/CD) (Jenkins: Customizable pipelines)",
        "Operational Excellence:Linux Administration (Bash scripting for automation, Systemd for service management, Performance tuning (sysctl), Security hardening (SELinux, iptables))",
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
                  <div className="space-y-2">
                    <h3 className="font-medium text-left">{expertise.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {expertise.badges.map((badge, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-purple-50 text-purple-700 border-purple-200"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
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
