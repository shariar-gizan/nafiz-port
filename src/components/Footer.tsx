
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-gradient text-xl font-bold">Shariar Nafiz</p>
            <p className="text-sm text-muted-foreground">Mobile App Engineer</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/shariar-nafiz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-theme-purple transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/shariar-nafiz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-theme-blue transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:shariar.nafiz@example.com" 
              className="hover:text-theme-green transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© {currentYear} Shariar Nafiz. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
