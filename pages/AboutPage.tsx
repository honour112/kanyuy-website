import React from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage = () => {
  const photoGridImages = [
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1579226905180-636b76d0e38a?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600880292210-f78a72a41897?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581092446347-a84a4fa4a4e3?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497032628192-86f99d791b7e?q=80&w=600&auto=format&fit=crop'
  ];

  return (
    <div>
      <PageHero 
        title="About Us"
        subtitle="The Story, Mission, and Vision Behind Our Agency"
        imageUrl="https://img.freepik.com/premium-photo/team-young-african-people-office-working-laptop_484651-18740.jpg?w=2000"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img src="https://img.freepik.com/premium-photo/business-team-collaborating-marketing-strategy-round-table-meeting-with-analytics-charts_1143370-6246.jpg" alt="Our Team in a meeting" className="rounded-lg shadow-xl" loading="lazy" />
            </AnimatedSection>
            <AnimatedSection delay="delay-300">
              <h2 className="text-3xl font-bold text-primary">Our Story & Mission</h2>
              <p className="mt-4 text-lg text-gray-600">
                Founded with a passion for helping businesses thrive, our agency was born from the belief that great branding and smart marketing are the cornerstones of success. We saw a need for a partner who could deliver not just services, but real, measurable growth.
              </p>
              <p className="mt-4 text-gray-600">
                Our mission is to empower brands to connect authentically with their audiences, build lasting trust, and achieve their most ambitious goals. We combine creativity with data-driven strategies to craft solutions that are both beautiful and effective.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-primary">Behind The Scenes</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">A look at our team culture, creative process, and the fun we have building amazing brands.</p>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {photoGridImages.map((src, index) => (
              <AnimatedSection key={index} delay={`delay-${(index % 4) * 100}`}>
                 <div className="aspect-w-4 aspect-h-3">
                  <img src={src} alt={`Behind the scenes ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105" loading="lazy" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;