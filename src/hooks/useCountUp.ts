import { useState, useEffect, useRef } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  delay?: number;
}

export const useCountUp = ({ end, duration = 2000, delay = 0 }: UseCountUpProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = countRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const animateCount = () => {
      const now = Date.now();
      
      if (now < startTime) {
        requestAnimationFrame(animateCount);
        return;
      }

      if (now >= endTime) {
        setCount(end);
        return;
      }

      const progress = (now - startTime) / duration;
      const currentCount = Math.floor(end * progress);
      setCount(currentCount);
      requestAnimationFrame(animateCount);
    };

    requestAnimationFrame(animateCount);
  }, [end, duration, delay, isVisible]);

  return { count, ref: countRef };
};