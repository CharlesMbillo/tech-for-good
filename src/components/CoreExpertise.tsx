import { CheckIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CoreExpertise = () => {
  const expertiseAreas = [
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
      title: "Data Solutions Modelling",
      badges: [
        "Excel",
        "PostgreSQL",
        "mySQL",
        "MongoDB",
        "Kobo/ODK",
        "Power BI",
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
