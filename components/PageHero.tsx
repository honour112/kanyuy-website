import React from 'react';
import AnimatedSection from './AnimatedSection';

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-500/50"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight drop-shadow-md">
            {title}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-100 max-w-3xl drop-shadow-sm">
            {subtitle}
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PageHero;