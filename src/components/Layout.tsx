
import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      console.log('Calendly script loaded successfully');
    };
    document.head.appendChild(script);
    
    return () => {
      // Cleanup if needed
      const calendlyScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      const calendlyCSS = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
      
      if (calendlyScript) {
        calendlyScript.remove();
      }
      
      if (calendlyCSS) {
        calendlyCSS.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
