import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import TestimonialCard from '../components/TestimonialCard';
import { SERVICES, TESTIMONIALS, PROJECTS } from '../constants';
import { Service, Project } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
    <img src={service.imageUrl} alt={service.title} className="w-full h-56 object-cover" loading="lazy" />
    <div className="p-8">
      <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6 h-20">{service.description}</p>
      <Link to={service.link} className="font-semibold text-accent hover:text-accent-dark transition-colors duration-300">Learn More &rarr;</Link>
    </div>
  </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="relative aspect-w-1 aspect-h-1 group rounded-xl overflow-hidden shadow-md">
    <img src={project.imageUrl} alt={project.brandName} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 transition-all duration-300 group-hover:from-black/90">
      <h3 className="text-white text-2xl font-bold transition-transform duration-300 transform group-hover:-translate-y-2">{project.brandName}</h3>
      <p className="text-gray-200 text-sm opacity-0 transition-all duration-300 delay-100 group-hover:opacity-100">{project.category}</p>
    </div>
  </div>
);


const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white text-center" style={{backgroundImage: "url('https://www.foodbusinessnews.net/ext/resources/2020/11/BlackOwnedBusinessMeeting_Lead.jpg?height=667&t=1606316879&width=1080')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary-dark/80"></div>
        <div className="relative z-10 px-4">
            <AnimatedSection>
                <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight drop-shadow-md">Grow Your Brand, Build Trust, and Attract More Clients</h1>
                <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-sm">We create professional branding, websites, visuals, and marketing systems that help businesses scale.</p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button to="/contact" variant="primary" isPulsing={true}>Get Free Consultation</Button>
                    <Button to="/services" variant="secondary">View Our Services</Button>
                </div>
            </AnimatedSection>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-primary">Our Core Services</h2>
                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">We provide a range of services to elevate your brand and accelerate growth.</p>
            </AnimatedSection>
            <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map((service, index) => (
                    <AnimatedSection key={service.title} delay={`delay-${index * 100}`}>
                        <ServiceCard service={service} />
                    </AnimatedSection>
                ))}
            </div>
        </div>
      </section>

      {/* Photo Showcase */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Brands We've Helped Build</h2>
            <p className="mt-6 text-lg text-gray-600">A glimpse into the successful partnerships we've forged.</p>
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-8">
            {PROJECTS.map((project, index) => (
              <AnimatedSection key={index} delay={`delay-${(index % 3) * 100}`}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">What Our Clients Say</h2>
            <p className="mt-6 text-lg text-gray-600">Their success is our greatest achievement.</p>
          </AnimatedSection>
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <AnimatedSection key={index} delay={`delay-${index * 100}`}>
                <TestimonialCard testimonial={testimonial} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;