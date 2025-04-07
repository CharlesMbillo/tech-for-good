
import { useMemo } from "react";
import { NAV_ITEMS } from "../constants";
import { ActiveNavItem } from "./ActiveNavItem";

interface NavigationProps {
  activeHash: string;
  isOpen: boolean;
  onNavItemClick: () => void;
}

export const Navigation = ({ activeHash, isOpen, onNavItemClick }: NavigationProps) => {
  // Memoize nav items rendering with active state
  const renderedNavItems = useMemo(() => (
    NAV_ITEMS.map((item) => {
      const isActive = 
        (item.href === '#' && activeHash === '') || // Home case
        (item.href !== '#' && activeHash === item.href); // Other sections

      return (
        <ActiveNavItem 
          key={item.label}
          item={item} 
          isActive={isActive} 
          isOpen={isOpen}
          onClick={onNavItemClick}
        />
      );
    })
  ), [activeHash, isOpen, onNavItemClick]);

  return (
    <nav aria-label="Secondary navigation">
      <ul className="space-y-1">
        {renderedNavItems}
      </ul>
    </nav>
  );
};
