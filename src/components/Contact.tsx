
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import AnimatedShape from "./AnimatedShape";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/sonner";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

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

  // Form submission handler
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast.success("Message sent successfully! I'll get back to you soon.");
      
      // Reset form
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="max-w-5xl mx-auto">
          <p className={cn(
            "text-center text-muted-foreground mb-10 transition-all duration-500 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            I'm always interested in new opportunities, collaborations, or just a friendly chat about mobile development. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className={cn(
              "col-span-1 lg:col-span-2 glass-card p-6 transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      rules={{ required: "Name is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      rules={{ 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    rules={{ required: "Subject is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Subject of your message" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    rules={{ required: "Message is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message..." 
                            className="min-h-32 resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-theme-purple hover:bg-theme-purple/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Links */}
            <div className={cn(
              "col-span-1 space-y-4 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              {contactLinks.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 flex items-center gap-3 hover:bg-white/10 transition-colors group block"
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
      </div>
    </section>
  );
}
