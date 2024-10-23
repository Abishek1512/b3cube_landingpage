"use client";
import { useState, useEffect } from "react";

type ScrollHeaderProps = {
  children: React.ReactNode;
};

export const ScrollHeader = ({ children }: ScrollHeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`left-0 right-0 bg-transparent fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-md" : "bg-transparent"
      } ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </header>
  );
};
