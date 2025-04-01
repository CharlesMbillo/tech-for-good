
import React from "react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-purple-700">Charles Mbillo</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium transition-colors hover:text-purple-700">
            About
          </a>
          <a href="#expertise" className="text-sm font-medium transition-colors hover:text-purple-700">
            Expertise
          </a>
          <a href="#focus-areas" className="text-sm font-medium transition-colors hover:text-purple-700">
            Focus Areas
          </a>
          <a href="#contact" className="text-sm font-medium transition-colors hover:text-purple-700">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-purple-700 hover:bg-purple-800">
            Connect
          </Button>
        </div>
      </div>
    </header>
  );
};
