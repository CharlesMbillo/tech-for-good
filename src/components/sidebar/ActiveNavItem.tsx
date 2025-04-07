
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "../constants";

interface ActiveNavItemProps {
  item: typeof NAV_ITEMS[number];
  isActive: boolean;
  isOpen: boolean;
  onClick: () => void;
}

export const ActiveNavItem = ({ item, isActive, isOpen, onClick }: ActiveNavItemProps) => {
  const navigate = useNavigate();

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
              if (isOpen) onClick();
            }
          } else {
            navigate(item.href);
            if (isOpen) onClick();
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
};
