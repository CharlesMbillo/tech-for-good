
import { CheckIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const CoreExpertise = () => {
  const expertiseAreas = [
    "Full-Stack Web & Mobile Development",
    "Cloud Computing (focus on Cloud Native technologies like microservices, containers, and container orchestration)",
    "Data Solutions Modelling",
    "Enterprise IT Consulting"
  ];

  return (
    <section id="expertise" className="py-16 bg-purple-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700">
              Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Core Technical Skills</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Specialized expertise in building solutions for emerging markets with a focus on accessibility and impact.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {expertiseAreas.map((expertise, index) => (
            <Card key={index} className="border border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                    <CheckIcon className="h-4 w-4 text-purple-700" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-left">{expertise}</h3>
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
