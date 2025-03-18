
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-standard px-6 py-4",
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm dark:bg-black/80"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="/" 
          className="relative z-10 flex items-center space-x-2"
          aria-label="Homepage"
        >
          <div className="w-8 h-8 bg-primary rounded-lg animate-pulse flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="font-medium text-lg tracking-tight">Aero</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Features", "How It Works", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-standard focus-ring"
            >
              {item}
            </a>
          ))}
          <button className="px-4 py-2 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-standard focus-ring">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-10 focus-ring"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={cn(
                "w-5 h-0.5 bg-current transition-standard",
                mobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
              )}
            />
            <span
              className={cn(
                "w-5 h-0.5 bg-current transition-standard mt-1",
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "w-5 h-0.5 bg-current transition-standard mt-1",
                mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0"
              )}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white dark:bg-gray-950 z-0 transition-standard flex flex-col items-center justify-center space-y-8",
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {["Features", "How It Works", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-lg font-medium hover:text-primary transition-standard focus-ring"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button 
            className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-standard focus-ring mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
