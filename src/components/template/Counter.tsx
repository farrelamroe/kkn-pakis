import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  duration: number;
}

export function Counter({ end, duration }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    const node = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && node && !hasRun) {
            setHasRun(true); // Mark the animation as having run
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
  }, [end, duration, hasRun]);

  return <div ref={ref}>0</div>;
}
