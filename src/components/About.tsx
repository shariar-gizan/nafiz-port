
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedShape from "./AnimatedShape";

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
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className={cn(
            "w-full md:w-1/2 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
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

          <div className={cn(
            "w-full md:w-1/2 glass-card p-6 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-theme-blue pl-4 py-1">
                <p className="text-sm text-theme-blue">2024 - Present</p>
                <h4 className="font-medium">BSc in Computer Science and Engineering</h4>
                <p className="text-sm text-muted-foreground">Southeast University</p>
              </div>
              
              <div className="border-l-2 border-theme-purple pl-4 py-1">
                <p className="text-sm text-theme-purple">2019 - 2023</p>
                <h4 className="font-medium">Diploma in Computer Engineering</h4>
                <p className="text-sm text-muted-foreground">Cumilla Polytechnic Institute</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
