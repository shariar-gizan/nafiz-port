
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";
import AnimatedShape from "./AnimatedShape";

export default function Experience() {
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

    const section = document.getElementById("experience");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="experience" className="relative section-padding">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatedShape
          type="square"
          color="bg-theme-orange/10"
          size="w-96 h-96"
          animation="animate-float"
          className="absolute -top-40 -right-40 rotate-12 blur-xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className={cn(
          "max-w-3xl mx-auto glass-card p-6 md:p-8 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <div className="flex items-start gap-4">
            <div className="bg-theme-purple/10 p-3 rounded-full">
              <Briefcase className="h-6 w-6 text-theme-purple" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Mobile App Engineer</h3>
              <p className="text-theme-purple font-medium">Gizantech</p>
              <p className="text-sm text-muted-foreground mb-4">Current Position</p>

              <div className="space-y-3 text-muted-foreground">
                <p>
                  At Gizantech, I specialize in developing high-quality mobile applications using 
                  modern technologies and best practices.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Develop mobile applications using Kotlin, Flutter, and Jetpack Compose</li>
                  <li>Collaborate with design and backend teams to implement new features</li>
                  <li>Optimize applications for maximum speed and scalability</li>
                  <li>Troubleshoot and debug to ensure smooth app performance</li>
                  <li>Stay up-to-date with emerging mobile technologies and industry trends</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
