
import profileImage from "@/assets/charles_plp.jpg";
import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Layers,
  Code,
  BookOpen,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MobileToggleButton } from "./MobileToggleButton";
import { NAV_ITEMS } from "./constants";

// Custom hook to track active hash
const useActiveHash = () => {
  const [activeHash, setActiveHash] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    // Set initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location]);

  return activeHash;
};

// Lazy load Calendly
const initCalendly = () => import("@/utils/calendly").then(module => module.initCalendly());

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const activeHash = useActiveHash();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  
  const toggleSidebar = () => setIsOpen(!isOpen);
  
  // Focus management
  useEffect(() => {
    if (isOpen && sidebarRef.current) {
      const firstFocusable = sidebarRef.current.querySelector('a[href]') as HTMLElement;
      firstFocusable?.focus();
    } else if (!isOpen && toggleButtonRef.current) {
      toggleButtonRef.current.focus();
    }
  }, [isOpen]);

  // Close sidebar when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Memoize nav items rendering with active state
  const renderedNavItems = useMemo(() => (
    NAV_ITEMS.map((item) => {
      const isActive = 
        (item.href === '#' && activeHash === '') || // Home case
        (item.href !== '#' && activeHash === item.href); // Other sections

      return (
        <li key={item.label}>
          <a
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200",
              isActive 
                ? "text-purple-700 font-medium bg-purple-50"
                : "text-gray-900 hover:text-purple-700 hover:bg-purple-50/50",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
            )}
            onClick={(e) => {
              e.preventDefault();
              if (item.href.startsWith('#')) {
                const element = document.querySelector(item.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  // Update URL hash without page jump
                  window.history.pushState(null, '', item.href);
                  if (isOpen) setIsOpen(false);
                }
              } else {
                navigate(item.href);
                if (isOpen) setIsOpen(false);
              }
            }}
          >
            <item.icon className="h-4 w-4" aria-hidden="true" />
            <span>{item.label}</span>
            {isActive && (
              <span className="ml-auto h-2 w-2 rounded-full bg-purple-700" aria-hidden="true" />
            )}
          </a>
        </li>
      );
    })
  ), [isOpen, navigate, activeHash]);

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <MobileToggleButton 
        ref={toggleButtonRef}
        isOpen={isOpen}
        onClick={toggleSidebar}
      />

      {/* Sidebar with Framer Motion animations */}
      <motion.div 
        ref={sidebarRef}
        id="sidebar-navigation"
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r shadow-sm",
          "md:sticky md:top-16 md:h-[calc(100vh-4rem)]"
        )}
        initial={{ x: -320 }}
        animate={{ 
          x: isOpen ? 0 : -320,
          transition: { type: "spring", stiffness: 300, damping: 30 }
        }}
        exit={{ x: -320 }}
        role="navigation"
        aria-label="Main navigation"
      >
        <ScrollArea className="h-full py-6">
          <div className="px-3 py-2">
            <div className="flex flex-col items-center mb-6 mt-4">
              <div className="relative h-24 w-24 mb-3">
                <img
                  src={profileImage}
                  alt="DevOps-Charles Mbillo"
                  className="rounded-full h-full w-full object-cover border-4 border-purple-100" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/default-profile.png';
                  }}
                />
                {/* Online status indicator (optional) */}
                <div className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-white">
                </div>
              </div>
              {/* Name and Title */}
              <span className="font-bold text-xl text-purple-700 mb-2">Charles Mbillo</span>
              <span className="text-sm text-gray-500">Tech Solutions Developer</span>
            </div>
            
            <nav aria-label="Secondary navigation">
              <ul className="space-y-1">
                {renderedNavItems}
              </ul>
            </nav>
            
            <div className="mt-10">
              <Button 
                className="w-full bg-purple-700 hover:bg-purple-800 focus-visible:ring-purple-500" 
                onClick={() => {
                  initCalendly();
                  if (isOpen) setIsOpen(false);
                }}
              >
                Book a Call
              </Button>
            </div>
          </div>
        </ScrollArea>
      </motion.div>
      
      {/* Animated Overlay with backdrop blur */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden" 
            onClick={() => setIsOpen(false)}
            role="presentation"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </>
  );
};
