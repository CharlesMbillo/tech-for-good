
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  User,
  Briefcase,
  Layers,
  Code,
  BookOpen,
  Mail,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { initCalendly } from "@/utils/calendly";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleSidebar = () => setIsOpen(!isOpen);
  
  const openCalendly = () => {
    initCalendly();
  };

  const navItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: User, label: "About", href: "#about" },
    { icon: Code, label: "Expertise", href: "#expertise" },
    { icon: Layers, label: "Focus Areas", href: "#focus-areas" },
    { icon: Briefcase, label: "Services", href: "#services" },
    { icon: BookOpen, label: "Projects", href: "#projects" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button 
          size="icon" 
          className="h-12 w-12 rounded-full bg-purple-700 hover:bg-purple-800 text-white shadow-lg"
          onClick={toggleSidebar}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r shadow-sm transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:sticky md:top-16 md:h-[calc(100vh-4rem)]",
        )}
      >
        <ScrollArea className="h-full py-6">
          <div className="px-3 py-2">
            <div className="flex flex-col items-center mb-6 mt-4">
              <span className="font-bold text-xl text-purple-700 mb-2">Charles Mbillo</span>
              <span className="text-sm text-gray-500">Tech Solutions Developer</span>
            </div>
            
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-purple-700"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.href.startsWith('#')) {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        if (isOpen) setIsOpen(false);
                      }
                    } else {
                      navigate(item.href);
                      if (isOpen) setIsOpen(false);
                    }
                  }}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
            
            <div className="mt-10">
              <Button 
                className="w-full bg-purple-700 hover:bg-purple-800" 
                onClick={openCalendly}
              >
                Book a Call
              </Button>
            </div>
          </div>
        </ScrollArea>
      </div>
      
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
