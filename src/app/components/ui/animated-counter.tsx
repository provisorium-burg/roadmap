"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
}

export function AnimatedCounter({ value, duration = 1500 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);

  // Observer: Erkennt, wenn die Zahl im Bild erscheint
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Optional: Animation zurücksetzen, wenn man wegscrollt
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.1 } // Startet, wenn 10% der Zahl sichtbar sind
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  // Die eigentliche Zähl-Logik
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const incrementTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return <span ref={countRef}>{count}</span>;
}
