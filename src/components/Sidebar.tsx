import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "./constants";
import profileImage from "@/assets/profile.jpg";

export const Sidebar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <motion.div
        ref={sidebarRef}
        className={`
          hidden md:flex flex-col
          fixed top-0 left-0 h-screen w-64
          bg-white border-r border-gray-200
          z-40 overflow-y-auto
          ${isScrolled ? 'pt-4' : 'pt-8'}
          transition-all duration-300
        `}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="px-4">
          {/* Profile Section */}
          <div className={`flex flex-col items-center mb-6 ${isScrolled ? 'scale-90' : 'scale-100'} transition-transform`}>
            <div className="relative h-20 w-20 mb-3">
              <img
                src={profileImage}
                alt="Profile"
                className="rounded-full h-full w-full object-cover border-4 border-purple-100 shadow-md"
              />
              <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
            </div>
            <h2 className="font-bold text-lg text-gray-800">Charles Mbillo</h2>
            <p className="text-sm text-purple-600">Tech Solutions Developer</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Contact Button (stays at bottom) */}
          <div className="mt-auto mb-8 px-4">
            <button 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors shadow-md"
              onClick={() => {/* Calendly integration */}}
            >
              Book Consultation
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button
          className="h-14 w-14 rounded-full bg-purple-600 text-white shadow-xl flex items-center justify-center"
          onClick={() => document.getElementById('mobile-sidebar')?.classList.toggle('hidden')}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        id="mobile-sidebar"
        className="fixed inset-0 bg-black bg-opacity-50 z-40 hidden md:hidden"
      >
        <motion.div 
          className="absolute top-0 left-0 h-full w-72 bg-white shadow-xl"
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
        >
          {/* Mobile sidebar content */}
        </motion.div>
      </div>
    </>
  );
};