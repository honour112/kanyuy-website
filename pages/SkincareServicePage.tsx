import React from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { PlayIcon, CheckmarkIcon } from '../components/IconComponents';

const SkincareServicePage = () => {
    const services = [
      'Product & Lifestyle Photography',
      'Aesthetic Social Media Design',
      'Brand Identity & Packaging',
      'Online Booking & E-commerce',
      'Salon & Spa Marketing'
    ];

    const photoGridImages = [
      'https://images.unsplash.com/photo-1590439471364-192aa70c2b51?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620916566398-39f168a7673b?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512496015851-a90138ba0ea5?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615393529367-97d8419b21f3?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=500&auto=format&fit=crop'
    ];
    const videoTestimonials = [
      'https://images.unsplash.com/photo-1515224526905-56c835567718?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558368009-28156e18a8f1?q=80&w=800&auto=format&fit=crop',
    ];

    return (
        <div>
            <PageHero
                title="Beauty & Wellness Marketing"
                subtitle="From Skincare to Spas, We Cultivate Brands That Glow."
                imageUrl="https://images.unsplash.com/photo-1616394584738-65a515376788?q=80&w=1920&auto=format&fit=crop"
            />

            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                             <img src="https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?q=80&w=800&auto=format&fit=crop" alt="Luxury skincare products" className="rounded-xl shadow-lg" loading="lazy" />
                        </AnimatedSection>
                        <AnimatedSection delay="delay-300">
                            <h2 className="text-4xl font-bold text-primary">Elevating Your Brand Experience</h2>
                            <p className="mt-6 text-lg text-gray-600">We blend artistry with strategy to create a luxurious and compelling brand experience for your customers, from packaging to pixel.</p>
                            <ul className="mt-8 space-y-4">
                                {services.map(item => (
                                    <li key={item} className="flex items-start text-lg">
                                        <CheckmarkIcon />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
            
            <section className="py-24 bg-light-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl font-bold text-primary">Beauty & Wellness Showcase</h2>
                        <p className="mt-6 text-lg text-gray-600">Capturing the essence of luxury and care.</p>
                    </AnimatedSection>
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
                        {photoGridImages.map((src, index) => (
                            <AnimatedSection key={index} delay={`delay-${(index % 4) * 100}`}>
                                <div className="aspect-w-1 aspect-h-1 group">
                                    <img src={src} alt={`Skincare product ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl font-bold text-primary">Video Testimonials</h2>
                        <p className="mt-6 text-lg text-gray-600">Hear from brands we've helped to flourish.</p>
                    </AnimatedSection>
                    <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        {videoTestimonials.map((src, index) => (
                            <AnimatedSection key={index} delay={`delay-${index * 150}`}>
                                <div className="relative group aspect-w-16 aspect-h-9 rounded-xl shadow-lg overflow-hidden cursor-pointer">
                                    <img src={src} alt={`Video testimonial ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                                     <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                                            <PlayIcon />
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-r from-primary to-purple-600 text-white text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-4xl font-bold">Ready to Elevate Your Brand?</h2>
                        <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">Let's create a brand identity that's as flawless as your products. Get in touch for a branding session.</p>
                        <div className="mt-10">
                            <Button to="/contact" variant="primary" isPulsing={true}>Request Branding Session</Button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default SkincareServicePage;