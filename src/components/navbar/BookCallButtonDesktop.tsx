
import React from "react";
import { Button } from "@/components/ui/button";

interface BookCallButtonDesktopProps {
  onClick: () => void;
}

export const BookCallButtonDesktop = ({ onClick }: BookCallButtonDesktopProps) => {
  return (
    <Button className="bg-purple-700 hover:bg-purple-800" onClick={onClick}>
      Book a Call
    </Button>
  );
};
