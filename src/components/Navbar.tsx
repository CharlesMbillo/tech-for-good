import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home } from "lucide-react";
import { initCalendly } from "@/utils/calendly";

export const Navbar = () => {
  const openCalendly = () => {
    initCalendly();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-purple-700">Charles Mbillo</span>
        </div>
        
        {/* Desktop - Just show the Book a Call button */}
        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-purple-700 hover:bg-purple-800" onClick={openCalendly}>
            Book a Call
          </Button>
        </div>
        
        {/* Mobile Navigation - Keep the sheet for mobile */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <a href="#" className="text-lg font-medium transition-colors hover:text-purple-700 flex items-center gap-2">
                <Home className="h-5 w-5" />
                Home
              </a>
              <a href="#about" className="text-lg font-medium transition-colors hover:text-purple-700">
                About
              </a>
              <a href="#expertise" className="text-lg font-medium transition-colors hover:text-purple-700">
                Expertise
              </a>
              <a href="#focus-areas" className="text-lg font-medium transition-colors hover:text-purple-700">
                Focus Areas
              </a>
              <a href="#services" className="text-lg font-medium transition-colors hover:text-purple-700">
                Services
              </a>
              <a href="#projects" className="text-lg font-medium transition-colors hover:text-purple-700">
                Projects
              </a>
              <a href="#contact" className="text-lg font-medium transition-colors hover:text-purple-700">
                Contact
              </a>
              <Button className="mt-4 bg-purple-700 hover:bg-purple-800" onClick={openCalendly}>
                Book a Call
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
