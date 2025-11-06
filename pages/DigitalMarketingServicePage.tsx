import React from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { CheckmarkIcon } from '../components/IconComponents';

const DigitalMarketingServicePage = () => {
    const services = [
        'Targeted Website Design',
        'Industry-Specific SEO',
        'Paid Ads for Niche Markets',
        'Automated Email Campaigns',
        'Multi-Platform Social Content'
    ];

    const mockups = [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    ];

    return (
        <div>
            <PageHero
                title="Custom Industry Solutions"
                subtitle="Tailored Digital Marketing for Your Unique Business Needs."
                imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop"
            />
            
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                         <AnimatedSection>
                            <h2 className="text-4xl font-bold text-primary">Versatile Marketing for Any Sector</h2>
                            <p className="mt-6 text-lg text-gray-600">We serve a wide array of industries, including Insurance, Laundry, and Cleaning services. Our team utilizes a full suite of digital marketing tools to increase your visibility, generate leads, and boost your bottom line.</p>
                            <ul className="mt-8 space-y-4">
                                {services.map(item => (
                                    <li key={item} className="flex items-start text-lg">
                                        <CheckmarkIcon />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                         </AnimatedSection>
                         <AnimatedSection delay="delay-300">
                             <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800&auto=format&fit=crop" alt="Business growth charts on a laptop" className="rounded-xl shadow-lg" loading="lazy" />
                         </AnimatedSection>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-light-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl font-bold text-primary">Campaigns That Convert</h2>
                        <p className="mt-6 text-lg text-gray-600">From analytics dashboards to ad mockups, we focus on transparency and results.</p>
                    </AnimatedSection>
                    <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                        {mockups.map((src, index) => (
                            <AnimatedSection key={index} delay={`delay-${index * 150}`}>
                                <div className="bg-white p-4 rounded-xl shadow-lg">
                                    <img src={src} alt={`Campaign mockup ${index + 1}`} className="w-full h-full object-cover rounded-md" loading="lazy" />
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-r from-primary to-purple-600 text-white text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-4xl font-bold">Ready to Dominate Online?</h2>
                        <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">Your competition is online. You should be too. Let's create a winning marketing plan together.</p>
                        <div className="mt-10">
                            <Button to="/contact" variant="primary" isPulsing={true}>Start Your Marketing Plan</Button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketingServicePage;