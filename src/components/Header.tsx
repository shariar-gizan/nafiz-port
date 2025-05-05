
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation links
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 nav-height flex items-center transition-all duration-300",
        isScrolled ? "bg-background/70 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <span className="text-2xl font-bold text-gradient">SN</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-3 py-2 text-sm font-medium transition-colors hover:text-theme-purple"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full w-9 h-9"
          >
            {mobileMenuOpen ? (
              <X className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Menu className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[var(--nav-height)] bg-background z-40 flex flex-col transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col py-8 px-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium py-4 border-b border-border hover:text-theme-purple transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
