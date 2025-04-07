
import { Button } from "@/components/ui/button";

interface BookCallButtonProps {
  onClick: () => void;
}

export const BookCallButton = ({ onClick }: BookCallButtonProps) => {
  return (
    <div className="mt-10">
      <Button 
        className="w-full bg-purple-700 hover:bg-purple-800 focus-visible:ring-purple-500" 
        onClick={onClick}
      >
        Book a Call
      </Button>
    </div>
  );
};
