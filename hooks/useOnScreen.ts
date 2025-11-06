
import { useState, useEffect, RefObject } from 'react';

const useOnScreen = (ref: RefObject<HTMLElement>, rootMargin = '0px'): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(element);
        }
      },
      {
        rootMargin,
      }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};

export default useOnScreen;
