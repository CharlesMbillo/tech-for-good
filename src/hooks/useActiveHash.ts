
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Custom hook to track active hash
export const useActiveHash = () => {
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
