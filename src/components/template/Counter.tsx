import { useEffect, useRef } from "react";
import { H5 } from "@/components";

interface CounterProps {
  end: number;
  duration: number;
}

export function Counter({ end, duration }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current; // Capture the current ref value
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && node) {
            let start = 0;
            const endVal = parseInt(end.toString(), 10);
            const increment = endVal / ((duration / 1000) * 60);
            let current = start;
            const interval = setInterval(() => {
              current += increment;
              if (current >= endVal) {
                current = endVal;
                clearInterval(interval);
              }
              if (node) {
                node.innerText = Math.floor(current).toString();
              }
            }, 16); // roughly 60fps
          } else if (node) {
            node.innerText = "0";
          }
        });
      },
      { threshold: 1.0 },
    );

    if (node) {
      observer.observe(node);
    }

    // Cleanup function
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [end, duration]);

  return <div ref={ref}>0</div>;
}
