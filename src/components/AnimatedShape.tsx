
import { cn } from "@/lib/utils";

interface AnimatedShapeProps {
  className?: string;
  type: "circle" | "square" | "triangle";
  color: string;
  size: string;
  animation: string;
  delay?: string;
}

export default function AnimatedShape({
  className,
  type,
  color,
  size,
  animation,
  delay = "0s",
}: AnimatedShapeProps) {
  const renderShape = () => {
    switch (type) {
      case "circle":
        return (
          <div 
            className={cn(
              "rounded-full opacity-70",
              color,
              size,
              animation,
              className
            )}
            style={{ animationDelay: delay }}
          />
        );
      case "square":
        return (
          <div 
            className={cn(
              "rounded-md opacity-70",
              color,
              size,
              animation,
              className
            )}
            style={{ animationDelay: delay }}
          />
        );
      case "triangle":
        return (
          <div
            className={cn(
              "opacity-70",
              animation,
              className
            )}
            style={{
              width: "0",
              height: "0",
              borderLeft: "25px solid transparent",
              borderRight: "25px solid transparent",
              borderBottom: `50px solid ${color.includes("bg-") ? color.replace("bg-", "") : color}`,
              animationDelay: delay,
            }}
          />
        );
      default:
        return null;
    }
  };

  return renderShape();
}
