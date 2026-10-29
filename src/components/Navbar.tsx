
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, CV_PATH } from "./constants";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-surface-border shadow-sm"
          : "bg-white/90 backdrop-blur-sm border-b border-transparent"
      )}
      role="banner"
    >
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex flex-col leading-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:rounded-sm"
            aria-label="Charles Mbillo — home"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <span className="text-sm font-bold tracking-tight text-ink group-hover:text-brand transition-colors">
              Charles Mbillo
            </span>
            <span className="text-xs text-ink-muted hidden sm:block">
              IT / DevOps · Financial Systems
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1"
            role="navigation"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="px-3 py-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors rounded-md hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {item.label}
              </a>
            ))}
            <a
              href={CV_PATH}
              target="_blank"
              rel="noreferrer"
              className="ml-2 px-3 py-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors rounded-md hover:bg-surface"
            >
              Resume
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            >
              <Button
                size="sm"
                className="bg-ink text-white hover:bg-ink/90 font-medium text-sm px-4"
              >
                Let's Talk
              </Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="text-ink hover:text-brand hover:bg-surface"
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-5 border-b border-surface-border">
                  <div>
                    <p className="text-sm font-bold text-ink">Charles Mbillo</p>
                    <p className="text-xs text-ink-muted">IT / DevOps · Financial Systems</p>
                  </div>
                </div>
                <nav className="flex flex-col p-5 gap-1 flex-1" aria-label="Mobile navigation">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                      className="px-4 py-3 text-sm font-medium text-ink-muted hover:text-ink hover:bg-surface rounded-md transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href={CV_PATH}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-ink-muted hover:text-ink hover:bg-surface rounded-md transition-colors"
                  >
                    Resume
                  </a>
                </nav>
                <div className="p-5 border-t border-surface-border">
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                  >
                    <Button className="w-full bg-ink text-white hover:bg-ink/90 font-medium">
                      Let's Talk
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
