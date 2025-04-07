import {
    Home,
    User,
    Briefcase,
    Layers,
    Code,
    BookOpen,
    Mail,
  } from "lucide-react";
  
  export const NAV_ITEMS = [
    { icon: Home, label: "Home", href: "#" },
    { icon: User, label: "About", href: "#about" },
    { icon: Code, label: "Expertise", href: "#expertise" },
    { icon: Layers, label: "Focus Areas", href: "#focus-areas" },
    { icon: Briefcase, label: "Services", href: "#services" },
    { icon: BookOpen, label: "Projects", href: "#projects" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ]; as const;