
import React from "react";
import { initCalendly } from "@/utils/calendly";
import { Logo } from "./navbar/Logo";
import { DesktopNavigation } from "./navbar/DesktopNavigation";
import { MobileNavigation } from "./navbar/MobileNavigation";

export const Navbar = () => {
  const openCalendly = () => {
    initCalendly();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        
        {/* Desktop Navigation */}
        <DesktopNavigation onBookCallClick={openCalendly} />
        
        {/* Mobile Navigation */}
        <MobileNavigation onBookCallClick={openCalendly} />
      </div>
    </header>
  );
};
