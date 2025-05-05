
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedShape from "./AnimatedShape";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  
  const blogPosts = [
    {
      title: "The Evolution of Kotlin for Android Development",
      excerpt: "Exploring how Kotlin has transformed Android app development over the years.",
      date: "May 2, 2025",
      readTime: "6 min read",
      tags: ["Kotlin", "Android"],
      image: "/placeholder.svg"
    },
    {
      title: "Flutter vs Jetpack Compose: Choosing the Right Framework",
      excerpt: "A detailed comparison of Flutter and Jetpack Compose for modern mobile app development.",
      date: "April 15, 2025",
      readTime: "8 min read",
      tags: ["Flutter", "Jetpack Compose"],
      image: "/placeholder.svg"
    },
    {
      title: "Implementing Effective State Management in Mobile Apps",
      excerpt: "Best practices for managing state in complex mobile applications.",
      date: "March 28, 2025",
      readTime: "5 min read",
      tags: ["State Management", "Architecture"],
      image: "/placeholder.svg"
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

    const section = document.getElementById("blog");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="blog" className="relative section-padding bg-background/30">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatedShape
          type="square"
          color="bg-theme-orange/10"
          size="w-64 h-64"
          animation="animate-pulse-slow"
          className="absolute bottom-20 -left-20 blur-xl rotate-45"
        />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          My <span className="text-gradient">Blog</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className={cn(
                "overflow-hidden transition-all border-border/40 hover:border-theme-blue/50 hover:-translate-y-1",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10",
                { "transition-delay-100": index === 1 },
                { "transition-delay-200": index === 2 }
              )}
            >
              <div className="overflow-hidden h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <div className="flex gap-4 text-xs text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-xs rounded-full bg-theme-blue/10 text-theme-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <a 
                  href="#" 
                  className="text-sm font-medium text-theme-purple hover:underline"
                >
                  Read More
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
