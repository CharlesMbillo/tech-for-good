
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useActiveHash } from "../hooks/useActiveHash";
import { MobileToggleButton } from "./MobileToggleButton";
import { SidebarContent } from "./sidebar/SidebarContent";

// Lazy load Calendly
const initCalendly = () => import("@/utils/calendly").then(module => module.initCalendly());

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleNavItemClick = () => {
    if (isOpen) setIsOpen(false);
  };

  const handleBookCallClick = () => {
    initCalendly();
    if (isOpen) setIsOpen(false);
  };

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
          "md:sticky md:top-0 md:h-screen"// Changed to sticky on desktop
        )}
        initial={{ x: -320 }}
        animate={{ 
          x: isOpen || window.innerWidth >= 768 ? 0 : -320,
          transition: { type: "spring", stiffness: 300, damping: 30 }
        }}
        exit={{ x: -320 }}
        role="navigation"
        aria-label="Main navigation"
      >
        <SidebarContent 
          activeHash={activeHash} 
          isOpen={isOpen} 
          onNavItemClick={handleNavItemClick}
          onBookCallClick={handleBookCallClick}
        />
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
