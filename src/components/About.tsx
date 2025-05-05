
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedShape from "./AnimatedShape";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
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

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="relative section-padding">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatedShape
          type="circle"
          color="bg-theme-green/10"
          size="w-72 h-72"
          animation="animate-pulse-slow"
          className="absolute -bottom-20 -left-20 blur-xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Profile Photo - Made larger and square */}
          <div className={cn(
            "w-full md:w-1/3 flex justify-center transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <div className="relative group">
              {/* Main photo */}
              <Avatar className="w-64 h-64 border-4 border-theme-purple/30">
                <AvatarImage src="/profile-photo.jpg" alt="Shariar Nafiz" />
                <AvatarFallback className="text-4xl bg-theme-purple/20">SN</AvatarFallback>
              </Avatar>
              
              {/* White version on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Avatar className="w-64 h-64 border-4 border-theme-blue/30">
                  <AvatarImage 
                    src="/profile-photo.jpg" 
                    alt="Shariar Nafiz" 
                    className="filter brightness-200 contrast-50 saturate-0" 
                  />
                  <AvatarFallback className="text-4xl bg-white/20 text-white">SN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className={cn(
            "w-full md:w-2/3 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate Software Engineer specializing in mobile app development, with expertise in Kotlin, Flutter, Jetpack Compose, and Java.
              </p>
              <p>
                I completed my Diploma in Computer Engineering from Cumilla Polytechnic Institute (2019-2023), and I'm currently pursuing a BSc in Computer Science and Engineering from Southeast University (2024-present).
              </p>
              <p>
                Currently, I'm working at Gizantech where I develop innovative mobile applications that solve real-world problems and provide seamless user experiences.
              </p>
              <p>
                My goal is to continue growing as a developer while creating applications that make a positive impact on users' lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
