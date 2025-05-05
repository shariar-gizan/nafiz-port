
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gradient text-xl font-bold">Shariar Nafiz</p>
            <p className="text-sm text-muted-foreground">Mobile App Engineer</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Shariar Nafiz. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
