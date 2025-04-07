
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProfileSection } from "./ProfileSection";
import { Navigation } from "./Navigation";
import { BookCallButton } from "./BookCallButton";

interface SidebarContentProps {
  activeHash: string;
  isOpen: boolean;
  onNavItemClick: () => void;
  onBookCallClick: () => void;
}

export const SidebarContent = ({ 
  activeHash, 
  isOpen, 
  onNavItemClick,
  onBookCallClick
}: SidebarContentProps) => {
  return (
    <ScrollArea className="h-full py-6">
      <div className="px-3 py-2">
        <ProfileSection />
        <Navigation 
          activeHash={activeHash} 
          isOpen={isOpen} 
          onNavItemClick={onNavItemClick} 
        />
        <BookCallButton onClick={onBookCallClick} />
      </div>
    </ScrollArea>
  );
};
