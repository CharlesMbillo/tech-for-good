
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Option 1: Most likely correct (using 'Bot' without Icon suffix)
// Option 2: If you're using a version that adds 'Icon' suffixes
import { ArrowRightIcon, CircleIcon, ServerIcon, GlobeIcon, DatabaseIcon, BrainIcon, BotIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="mb-10 text-center">
          <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700 mb-4">
            Services
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Services
          </h2>
          <p className="mx-auto max-w-3xl text-gray-500 md:text-xl">
            All your computing/digital needs... covered.
          </p>
        </div>
        
         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Cloud Computing Services Card */}
          <Card className="overflow-hidden border-purple-100 transition-all hover:shadow-lg">
            <div className="p-1 bg-purple-50">
              <div className="h-48 flex items-center justify-center bg-purple-100 rounded-t-md">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="p-4">
                    <ServerIcon className="h-20 w-20 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">Cloud Computing Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Amazon EC2 Compute Services",
                  "AWS Lambda Serverless Solutions",
                  "AWS Outposts",
                  "Infrastructure Management",
                  "Cloud Integration",
                  "Cybersecurity Protocols"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ArrowRightIcon className="h-4 w-4 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* AI/ML Services Card */}
          <Card className="overflow-hidden border-purple-100 transition-all hover:shadow-lg">
            <div className="p-1 bg-purple-50">
              <div className="h-48 flex items-center justify-center bg-purple-100 rounded-t-md">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="p-4">
                    <BrainIcon className="h-20 w-20 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">AI & Machine Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Generative AI Development",
                  "Machine Learning Models",
                  "Computer Vision Solutions",
                  "Natural Language Processing",
                  "AI Chatbot Development",
                  "Predictive Analytics"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ArrowRightIcon className="h-4 w-4 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Web Development Services Card */}
          <Card className="overflow-hidden border-purple-100 transition-all hover:shadow-lg">
            <div className="p-1 bg-purple-50">
              <div className="h-48 bg-purple-100 rounded-t-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Web Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">Web Development Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Full-stack Development",
                  "Responsive Web Design",
                  "UI/UX Design",
                  "SEO and Conversion Rate Optimization (CRO)",
                  "Cloud Hosting",
                  "Web Media Branding & Management",
                  "API Integration",
                  "Cloud Migration"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ArrowRightIcon className="h-4 w-4 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Comprehensive Managed Services */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Comprehensive Managed Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Core Managed Services Card */}
            <Card className="border-purple-100">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center gap-2">
                  <ServerIcon className="h-6 w-6 text-purple-600" />
                  <CardTitle>Core Managed Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {[
                    "Managed Databases (SQL/NoSQL)",
                    "Enterprise Email Solutions",
                    "Managed Websites",
                    "Managed Mobile Apps",
                    "Managed APIs"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CircleIcon className="h-2 w-2 text-purple-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Specialized Solutions Card */}
            <Card className="border-purple-100">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center gap-2">
                  <DatabaseIcon className="h-6 w-6 text-purple-600" />
                  <CardTitle>Specialized Solutions</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Data Management & Analytics</h4>
                    <ul className="space-y-1 ml-5 list-disc text-sm">
                      <li>AWS S3 Storage Solutions</li>
                      <li>Kobo/ODK Data Collection</li>
                      <li>Power BI & SPSS Analytics</li>
                      <li>Python Data Pipelines</li>
                      <li>MySQL/MongoDB Administration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Business Systems</h4>
                    <ul className="space-y-1 ml-5 list-disc text-sm">
                      <li>
                        ERP Solutions:
                        <ul className="ml-5 list-circle text-sm mt-1">
                          <li>Rance Lab Hotel POS</li>
                          <li>Tally Prime Agrovet IMS</li>
                          <li>Amonium Lite POS</li>
                        </ul>
                      </li>
                      <li>E-Commerce Platform Management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Robotics & Automation Card */}
            <Card className="border-purple-100">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center gap-2">
                  <RobotIcon className="h-6 w-6 text-purple-600" />
                  <CardTitle>Robotics & Automation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {[
                    "IoT Solutions Development",
                    "Robotic Process Automation (RPA)",
                    "Smart Home Systems",
                    "Industrial Automation",
                    "Embedded Systems Programming"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CircleIcon className="h-2 w-2 text-purple-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
