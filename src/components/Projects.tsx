
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedShape from "./AnimatedShape";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  
  const projects = [
    {
      title: "E-Commerce App",
      description: "A feature-rich mobile shopping app built with Kotlin and Jetpack Compose.",
      tags: ["Kotlin", "Jetpack Compose", "MVVM"],
      image: "/placeholder.svg",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Travel Companion",
      description: "Flutter travel app with location tracking, recommendations, and offline support.",
      tags: ["Flutter", "Dart", "Firebase"],
      image: "/placeholder.svg",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Manager",
      description: "Productivity app with task categorization, reminders, and synchronization.",
      tags: ["Java", "Room Database", "WorkManager"],
      image: "/placeholder.svg",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="projects" className="relative section-padding">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatedShape
          type="circle"
          color="bg-theme-pink/10"
          size="w-80 h-80"
          animation="animate-spin-slow"
          className="absolute -top-20 -right-20 blur-xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          My <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={cn(
                "overflow-hidden transition-all border-border/40 hover:border-theme-purple/50 hover:-translate-y-1 hover:shadow-lg",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10",
                { "transition-delay-100": index === 1 },
                { "transition-delay-200": index === 2 }
              )}
            >
              <div className="overflow-hidden">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </AspectRatio>
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-xs rounded-full bg-theme-purple/10 text-theme-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" className="gap-1 text-theme-blue" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> 
                    <span>Code</span>
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="gap-1 text-theme-green" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" /> 
                    <span>Demo</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
