
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
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
