
export const ProfessionalSummary = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              A versatile technologist with 10+ years of experience architecting Web and Mobile solutions that prioritize user-centric, 
              inclusive, and ethical technology development. Blending innovation with social impact. 
              AWS Certified Cloud Practitioner specializing in ethical web/mobile solutions and economic empowerment technologies.
            </p>
            <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Based in Nairobi, Kenya, I deliver solutions designed for emerging markets with a focus on accessibility, 
              offline capabilities, and low-resource environments.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl">
              <img 
                src="/placeholder.svg" 
                alt="Charles Mbillo presenting at Power Learn Project"
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
