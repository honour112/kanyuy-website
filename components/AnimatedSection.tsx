
import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', delay = 'delay-200' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${delay} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
