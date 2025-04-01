
// Utility functions for Calendly integration

export const initCalendly = () => {
  if (typeof window !== 'undefined') {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/mbillocharles/client'
      });
    } else {
      console.error('Calendly script not loaded');
      // Fallback - reload the script
      loadCalendlyScript();
    }
  }
};

export const loadCalendlyScript = () => {
  const script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  script.onload = () => {
    if (window.Calendly) {
      console.log('Calendly script loaded successfully');
      initCalendly();
    }
  };
  document.head.appendChild(script);
  
  // Also load CSS if not present
  if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
};
