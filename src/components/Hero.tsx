
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedShape from "./AnimatedShape";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16 section-padding">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatedShape
          type="circle"
          color="bg-theme-purple/30"
          size="w-64 h-64"
          animation="animate-spin-slow"
          className="absolute -top-20 -right-20 blur-xl"
        />
        <AnimatedShape
          type="circle"
          color="bg-theme-blue/20"
          size="w-80 h-80"
          animation="animate-spin-slow"
          className="absolute -bottom-40 -left-40 blur-xl"
        />
        <AnimatedShape
          type="square"
          color="bg-theme-pink/20"
          size="w-40 h-40"
          animation="animate-float"
          className="absolute top-40 right-20 rotate-12 blur-sm"
          delay="1s"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <div className={`transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-theme-purple mb-4 font-mono">Hello, my name is</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Shariar Nafiz
              <span className="block mt-2 text-gradient">Mobile App Engineer</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              I specialize in crafting exceptional mobile experiences with Kotlin, 
              Flutter, and Jetpack Compose. Building beautiful, functional apps that users love.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-theme-purple hover:bg-theme-purple/90">
                <a href="#contact">
                  Contact me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#skills">View my skills</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
