
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
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-none mb-2">
              About Me
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            <b>Innovation Driven Full-Stack Developer & Solutions Architect</b> with 3+ years of experience building scalable web, mobile, data, and cloud solutions that bridge technology and real-world impact. Adept at <b>end-to-end execution</b>—from ideation to deployment—with a DevOps-aware approach to optimize performance, security, and business efficiency. Passionate about <b>blending technical innovation with social good</b>, delivering measurable results through adaptable problem-solving and cross-functional collaboration.</p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <Badge
                variant="outline"
                className="bg-purple-50 text-purple-700 border-purple-200 self-start"
              >
                AWS Certified Cloud Practitioner
              </Badge>

              {/* Credly Badge */}
              <div
                className="certification-badge"
                data-iframe-width="230"
                data-iframe-height="180"
                data-share-badge-id="1d468bdd-b3f8-4508-b53a-df1a339b4058"
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>

            <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Based in Nairobi-Kenya, I deliver solutions designed for emerging
              markets with a focus on accessibility, offline capabilities, and
              low-resource environments. Prioritize client-focused solutions, inclusive, transformative and
              ethical technology development under tight constraints."
            </p>
          </div>
          <div className="flex justify-center">
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
        </div>
      </div>
    </section>
  );
};
