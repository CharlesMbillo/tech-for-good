
import { Button } from "@/components/ui/button";
import { initCalendly } from "@/utils/calendly";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  const openCalendly = () => {
    initCalendly();
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <img
          src="/src/assets/charles_plp.jpg"
          alt="Background pattern"
          className="w-full h-full object-cover"
          loading="lazy"
          width="1200"
          height="800"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-none mb-2">
            Tech Solutions Developer
          </Badge>

          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            <span className="text-purple-700">Tech for Good |</span> Full-Stack Solutions
            Developer | Cloud Practitioner <span className="text-purple-700">| Founder</span>
          </h1>

          <p className="max-w-[700px] text-gray-500 md:text-xl">
           Bridging Technology and Real-World Impact.
          </p>

          <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
            <Button className="bg-purple-700 hover:bg-purple-800">
              <a href="./Resume for DevOsps-aware Full-Stack Developer-2.pdf">View Resume </a>
            </Button>
            <Button
              variant="outline"
              className="border-purple-700 text-purple-700 hover:bg-purple-50"
              onClick={openCalendly}
              type="button"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
