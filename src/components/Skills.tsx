
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedShape from "./AnimatedShape";

export default function Skills() {
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

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Skill categories
  const skillCategories = [
    {
      name: "Mobile Development",
      skills: [
        { name: "Kotlin", level: 90 },
        { name: "Flutter", level: 85 },
        { name: "Jetpack Compose", level: 80 },
        { name: "Java", level: 75 },
        { name: "Android SDK", level: 85 },
      ],
    },
    {
      name: "Languages & Frameworks",
      skills: [
        { name: "Dart", level: 80 },
        { name: "JavaScript", level: 70 },
        { name: "Python", level: 65 },
        { name: "React Native", level: 60 },
      ],
    },
    {
      name: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85 },
        { name: "REST APIs", level: 80 },
        { name: "Firebase", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "UI/UX Design", level: 65 },
      ],
    },
  ];

  // Explored skills - technologies I've worked with
  const exploredSkills = [
    { name: "SwiftUI", category: "iOS" },
    { name: "GraphQL", category: "API" },
    { name: "MongoDB", category: "Database" },
    { name: "SQLite", category: "Database" },
    { name: "Room", category: "Android" },
    { name: "Retrofit", category: "Android" },
    { name: "Redux", category: "State Management" },
    { name: "Provider", category: "Flutter" },
    { name: "Bloc", category: "Flutter" },
    { name: "GetX", category: "Flutter" },
    { name: "Material Design", category: "UI" },
    { name: "Docker", category: "DevOps" },
  ];

  return (
    <section id="skills" className="relative section-padding">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatedShape
          type="circle"
          color="bg-theme-blue/15"
          size="w-80 h-80"
          animation="animate-pulse-slow"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 blur-xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          My <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name}
              className={cn(
                "glass-card p-6 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "delay-100": index === 0, "delay-200": index === 1, "delay-300": index === 2 }
              )}
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={cn("h-full rounded-full", {
                          "bg-theme-purple": index === 0,
                          "bg-theme-blue": index === 1,
                          "bg-theme-green": index === 2,
                        })}
                        style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Explored Skills Section */}
        <div className={cn(
          "mt-16 glass-card p-8 transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Explored <span className="text-gradient">Technologies</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {exploredSkills.map((skill) => (
              <div 
                key={skill.name}
                className="px-4 py-2 bg-background/30 rounded-full text-sm flex items-center gap-2"
              >
                <span className="font-medium">{skill.name}</span>
                <span className="text-xs px-2 py-0.5 bg-theme-purple/20 rounded-full text-theme-purple">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
