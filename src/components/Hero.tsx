
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            <span className="text-purple-700">Tech for Good</span> Solutions Architect
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl">
            Building ethical, inclusive, and user-centric technology solutions for emerging markets
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="bg-purple-700 hover:bg-purple-800">View Portfolio</Button>
            <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
