"use client";
import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 400,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      const currentElement = elementRef.current;
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]);

  const getTransformClasses = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "transition-all ease-out opacity-0 transform translate-y-8";
        case "down":
          return "transition-all ease-out opacity-0 transform -translate-y-8";
        case "left":
          return "transition-all ease-out opacity-0 transform translate-x-8";
        case "right":
          return "transition-all ease-out opacity-0 transform -translate-x-8";
        case "fade":
          return "transition-all ease-out opacity-0";
        default:
          return "transition-all ease-out opacity-0 transform translate-y-8";
      }
    }
    
    return "transition-all ease-out opacity-100 transform translate-y-0 translate-x-0";
  };

  return (
    <div
      ref={elementRef}
      className={`${getTransformClasses()} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}
