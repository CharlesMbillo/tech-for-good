import { forwardRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
}

export const MobileToggleButton = forwardRef<HTMLButtonElement, MobileToggleButtonProps>(
  ({ isOpen, className, ...props }, ref) => (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Button 
        ref={ref}
        size="icon" 
        className={cn(
          "h-12 w-12 rounded-full bg-purple-700 hover:bg-purple-800 text-white shadow-lg transition-transform",
          "hover:scale-105 active:scale-95",
          className
        )}
        aria-expanded={isOpen}
        aria-controls="sidebar-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        {...props}
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-transform rotate-180" />
        ) : (
          <Menu className="h-6 w-6 transition-transform" />
        )}
      </Button>
    </div>
  )
);

MobileToggleButton.displayName = "MobileToggleButton";