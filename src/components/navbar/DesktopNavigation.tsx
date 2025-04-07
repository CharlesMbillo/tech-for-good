
import React from "react";
import { BookCallButtonDesktop } from "./BookCallButtonDesktop";

interface DesktopNavigationProps {
  onBookCallClick: () => void;
}

export const DesktopNavigation = ({ onBookCallClick }: DesktopNavigationProps) => {
  return (
    <div className="hidden md:flex items-center gap-4">
      <BookCallButtonDesktop onClick={onBookCallClick} />
    </div>
  );
};
