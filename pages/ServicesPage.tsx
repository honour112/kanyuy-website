import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { SERVICES } from '../constants';
import { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <Link to={service.link} className="block bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
    <div className="relative">
      <img src={service.imageUrl} alt={service.title} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-primary mb-3 transition-colors duration-300 group-hover:text-accent">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <span className="font-semibold text-accent group-hover:text-accent-dark transition-colors duration-300">Explore Service &rarr;</span>
    </div>
  </Link>
);


const ServicesPage = () => {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive solutions designed to build, grow, and scale your brand."
        imageUrl="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1920&auto=format&fit=crop"
      />
      <section className="py-24 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <AnimatedSection key={service.title} delay={`delay-${index * 150}`}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;