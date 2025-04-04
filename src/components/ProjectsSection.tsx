
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ProjectsSection = () => {
  const openImageInNewTab = (imageUrl: string) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <section id="projects" className="py-16 bg-purple-50">
      <div className="container px-4 md:px-6">
        <div className="mb-10 text-center">
          <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700 mb-4">
            Projects
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-3xl text-gray-500 md:text-xl mb-8">
            Current Ongoing ...
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Community Based Projects */}
          <Card className="overflow-hidden border-purple-100 transition-all hover:shadow-lg">
            <div 
              className="h-48 overflow-hidden cursor-pointer" 
              onClick={() => openImageInNewTab("https://images.unsplash.com/photo-1531297484001-80022131f5a1")}
            >
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                alt="Community Based Projects"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Community Based</h3>
              <ul className="space-y-2 mb-6 list-disc pl-5">
                <li>USSD Guard Monitoring System</li>
                <li>Parish Census and Automation</li>
                <li>Library Management System</li>
              </ul>
              <Button 
                className="w-full bg-purple-700 hover:bg-purple-800"
                onClick={() => openImageInNewTab("https://images.unsplash.com/photo-1531297484001-80022131f5a1")}
              >
                View Project
              </Button>
            </CardContent>
          </Card>

          {/* EdTech Projects */}
          <Card className="overflow-hidden border-purple-100 transition-all hover:shadow-lg">
            <div 
              className="h-48 overflow-hidden cursor-pointer"
              onClick={() => openImageInNewTab("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d")}
            >
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="EdTech Projects"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">EdTech</h3>
              <ul className="space-y-2 mb-6 list-disc pl-5">
                <li>Offline Digital Content CBC</li>
                <li>Online Digital Content CBC</li>
                <li>Learning Management System</li>
              </ul>
              <Button 
                className="w-full bg-purple-700 hover:bg-purple-800"
                onClick={() => openImageInNewTab("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d")}
              >
                View Project
              </Button>
            </CardContent>
          </Card>

          {/* AI & Robotics Projects */}
          <Card className="overflow-hidden border-purple-100 transition-all hover:shadow-lg">
            <div 
              className="h-48 overflow-hidden cursor-pointer"
              onClick={() => openImageInNewTab("https://images.unsplash.com/photo-1555255707-c07966088b7b")}
            >
              <img
                src="https://images.unsplash.com/photo-1555255707-c07966088b7b"
                alt="AI & Robotics Projects"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">AI & Robotics</h3>
              <ul className="space-y-2 mb-6 list-disc pl-5">
                <li>Predictive Analytics Dashboard</li>
                <li>Computer Vision for Quality Control</li>
                <li>IoT Home Automation System</li>
              </ul>
              <Button 
                className="w-full bg-purple-700 hover:bg-purple-800"
                onClick={() => openImageInNewTab("https://images.unsplash.com/photo-1555255707-c07966088b7b")}
              >
                View Project
              </Button>
            </CardContent>
          </Card>

          {/* Fintech Projects */}
          <Card className="overflow-hidden border-purple-100 transition-all hover:shadow-lg">
            <div 
              className="h-48 overflow-hidden cursor-pointer"
              onClick={() => openImageInNewTab("https://images.unsplash.com/photo-1518770660439-4636190af475")}
            >
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                alt="Fintech Projects"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Fintech</h3>
              <ul className="space-y-2 mb-6 list-disc pl-5">
                <li>USSD Based Sacco Transactions App</li>
              </ul>
              <Button 
                className="w-full bg-purple-700 hover:bg-purple-800"
                onClick={() => openImageInNewTab("https://images.unsplash.com/photo-1518770660439-4636190af475")}
              >
                View Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
