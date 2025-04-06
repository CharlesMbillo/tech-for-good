
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect } from "react";

export const ProfessionalSummary = () => {
  // Initialize Credly badge script after component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const openImageInNewTab = () => {
    window.open("/src/components/images/charles_plp.jpg", "_blank");
  };

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-none mb-2">
            About Me
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Profile image column */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-xl border border-purple-100">
              <AspectRatio ratio={1 / 1} className="bg-purple-50">
                <img
                  src="/src/components/images/charles_plp.jpg"
                  loading="lazy"
                  alt="Charles Mbillo - Professional Web Developer"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={openImageInNewTab}
                />
              </AspectRatio>
            </div>
          </div>
          
          {/* Content column */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              <p><b>DevOps-Aware Full-Stack Developer | AWS Certified Cloud Practitioner</b></p>
              <p>
                Experienced in designing, building, and deploying <b>scalable web, mobile, and cloud solutions</b>
                for emerging markets. Combines <b>3+ years of Full-Stack expertise</b> (frontend to infrastructure) 
                with a focus on <b>performance, security, and cost-efficiency</b>. Passionate about <b>impact-driven technology</b>, 
                delivering accessible, client-focused solutions that maximize resources and drive measurable outcomes.
              </p>
            </div>
            
            {/* Certification badge */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-5 bg-purple-50 rounded-lg">
              <Badge
                variant="outline"
                className="bg-purple-50 text-purple-700 border-purple-200"
              >
                AWS Certified Cloud Practitioner
              </Badge>

              <div
                className="certification-badge"
                data-iframe-width="150"
                data-iframe-height="150"
                data-share-badge-id="1d468bdd-b3f8-4508-b53a-df1a339b4058"
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>

            <div className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              <p><b>Robotics, Automation & AI/ML</b></p>
              <p>
                "From LEGO Mindstorms prototypes to hardened Raspberry Pi/Arduino deployments, my focus is
                robotics that solve real problems. 
                The Integrated Coding and Robotics Program (ICRPplus) with BLIS Global, we're 
                <b> manufacturing Africa's IoT workforce through brutal pragmatism:</b>
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Fintech: ATM predictive maintenance bots cutting bank downtime by 40%</li>
                <li>Agritech: Solar-powered soil sensors triggering micro-irrigation via M-Pesa payments</li>
                <li>Healthtech: Offline-capable diagnostic robots for rural clinics (TensorFlow Lite on Jetson Nano)</li>
                <li>Smart Cities: License plate recognition for matatu fleets using Edge Impulse-optimized models</li>
              </ul>
              <p className="mt-2">
                CBC-aligned labs deliver 80% hands-on training on the exact systems powering Africa's digital economy. This isn't education - it's industrial-grade skills injection."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
