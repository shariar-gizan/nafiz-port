
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedShape from "./AnimatedShape";

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("education");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="education" className="relative section-padding bg-background/30">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatedShape
          type="square"
          color="bg-theme-blue/10"
          size="w-64 h-64"
          animation="animate-float"
          className="absolute top-20 -right-20 blur-xl rotate-12"
        />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          <span className="text-gradient">Education</span>
        </h2>
        
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="glass-card p-6 transition-all hover:shadow-lg hover:shadow-theme-purple/10">
            <div className="border-l-2 border-theme-blue pl-6 py-1">
              <p className="text-sm text-theme-blue mb-2">2024 - Present</p>
              <h4 className="text-xl font-semibold">BSc in Computer Science and Engineering</h4>
              <p className="text-muted-foreground mt-1">Southeast University</p>
              <p className="mt-3 text-sm text-muted-foreground">Focusing on advanced computer science concepts and software development methodologies.</p>
            </div>
          </div>
          
          <div className="glass-card p-6 transition-all hover:shadow-lg hover:shadow-theme-purple/10">
            <div className="border-l-2 border-theme-purple pl-6 py-1">
              <p className="text-sm text-theme-purple mb-2">2019 - 2023</p>
              <h4 className="text-xl font-semibold">Diploma in Computer Engineering</h4>
              <p className="text-muted-foreground mt-1">Cumilla Polytechnic Institute</p>
              <p className="mt-3 text-sm text-muted-foreground">Studied computer engineering fundamentals, programming, and systems design.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
