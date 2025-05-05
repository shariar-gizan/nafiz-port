
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check if theme was previously saved in localStorage or use system preference
    const savedTheme = localStorage.getItem("theme") || 
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    
    // Set initial theme state and apply it to document
    setTheme(savedTheme);
    
    // Apply theme to document
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    // Store theme preference in localStorage
    localStorage.setItem("theme", newTheme);
    
    // Apply theme to document
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme} 
      className="rounded-full w-9 h-9 transition-all hover:bg-theme-purple/10"
    >
      {theme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] text-theme-blue" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] text-theme-orange" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
