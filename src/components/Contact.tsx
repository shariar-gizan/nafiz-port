
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import AnimatedShape from "./AnimatedShape";

export default function Contact() {
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

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Contact links (replace with your actual info)
  const contactLinks = [
    {
      name: "Email",
      value: "shariar.nafiz@example.com",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:shariar.nafiz@example.com",
    },
    {
      name: "Phone",
      value: "+880 123 456 7890",
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+8801234567890",
    },
    {
      name: "GitHub",
      value: "github.com/shariar-nafiz",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/shariar-nafiz",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/shariar-nafiz",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/shariar-nafiz",
    },
  ];

  return (
    <section id="contact" className="relative section-padding">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatedShape
          type="circle"
          color="bg-theme-pink/20"
          size="w-72 h-72"
          animation="animate-float"
          className="absolute -bottom-20 -right-20 blur-xl"
        />
      </div>

      <div className="container mx-auto px-4">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold mb-8 text-center transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <p className={cn(
            "text-center text-muted-foreground mb-10 transition-all duration-500 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            I'm always interested in new opportunities, collaborations, or just a friendly chat about mobile development. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactLinks.map((contact, index) => (
              <a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "glass-card p-4 flex items-center gap-3 hover:bg-white/10 transition-colors group",
                  "transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  { "delay-200": index === 0 || index === 1, "delay-300": index === 2 || index === 3 }
                )}
              >
                <div className="bg-theme-purple/10 p-2 rounded-full group-hover:bg-theme-purple/20 transition-colors">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{contact.name}</p>
                  <p className="font-medium">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
