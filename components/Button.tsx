import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  isPulsing?: boolean;
}

const Button: React.FC<ButtonProps> = ({ to, children, variant = 'primary', className = '', isPulsing = false }) => {
  const baseClasses = 'inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl focus:outline-none focus:ring-4';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-accent to-yellow-400 text-white focus:ring-accent/50',
    secondary: 'bg-gradient-to-r from-primary to-purple-600 text-white focus:ring-primary/50',
  };

  const animationClass = isPulsing ? 'animate-pulse-slow' : '';

  return (
    <Link to={to} className={`${baseClasses} ${variantClasses[variant]} ${className} ${animationClass}`}>
      {children}
    </Link>
  );
};

export default Button;