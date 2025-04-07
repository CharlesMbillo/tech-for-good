
import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home } from "lucide-react";
import { NAV_ITEMS } from "@/components/constants";

interface MobileNavigationProps {
  onBookCallClick: () => void;
}

export const MobileNavigation = ({ onBookCallClick }: MobileNavigationProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col gap-4 mt-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-medium transition-colors hover:text-purple-700 flex items-center gap-2"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </a>
          ))}
          <Button className="mt-4 bg-purple-700 hover:bg-purple-800" onClick={onBookCallClick}>
            Book a Call
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
