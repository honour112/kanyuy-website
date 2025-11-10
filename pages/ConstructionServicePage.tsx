import React from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { PlayIcon, CheckmarkIcon } from '../components/IconComponents';

const ConstructionServicePage = () => {
  const offerings = [
    'Property Website Development',
    'Contractor & Realtor Branding',
    'Social Media Campaigns',
    'Drone Project & Property Footage',
    'Google Business & MLS Integration',
    'Portfolio & Listing Design'
  ];

  const websiteShowcase = [
    {
      name: 'Skyline Builders',
      img: 'https://www.photoshopvideotutorial.com/freepsdmock/wp-content/uploads/2020/01/Free-3d-Website-Mockup-Presentation-scaled.jpg'
    },
    {
      name: 'Urban Construct Co.',
      img: 'https://graphberry-imgs.imgix.net/3d-web-presentation-mock-up-psd-65.jpg?auto=compress%2Cformat&q=80&w=800'
    },
    {
      name: 'Foundation Masters',
      img: 'https://graphicgoogle.com/wp-content/uploads/2022/11/Free-3D-Device-Website-Mockup-600.jpg'
    },
    {
      name: 'Pinnacle Projects',
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/1513ad11853383.562536c9ea809.png'
    },
    {
      name: 'NextGen Constructors',
      img: 'https://zippypixels.com/wp-content/uploads/2015/09/01-Free-perspective-website-mockup-824x542.jpg'
    }
  ];

  const videoThumbnails = [
    'https://images.unsplash.com/photo-1504470695532-351198e32349?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
  ];

  return (
    <div>
      <PageHero
        title="Construction & Real Estate Marketing"
        subtitle="Building Brands and Showcasing Properties with Impact."
        imageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-primary">Specialized Industry Services</h2>
              <p className="mt-6 text-lg text-gray-600">We provide end-to-end marketing solutions tailored for the construction and real estate industries, from digital foundations to high-impact project showcases.</p>
              <ul className="mt-8 space-y-4">
                {offerings.map(item => (
                  <li key={item} className="flex items-start text-lg">
                    <CheckmarkIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay="delay-300">
              <img src="https://theleanbuilder.com/wp-content/uploads/2022/08/construction-teambuilding-tips-2.jpg" className="rounded-xl shadow-lg" loading="lazy" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Website Showcase */}
      <section className="py-24 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold text-primary">Website Design Showcase</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">High-impact 3D website mockups for construction companies.</p>
          </AnimatedSection>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {websiteShowcase.map((site, index) => (
              <AnimatedSection key={index} delay={`delay-${index * 150}`}>
                <div className="rounded-xl shadow-lg overflow-hidden">
                  <img src={site.img} alt={`${site.name} website`} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
                  <div className="p-4 bg-white text-center">
                    <h3 className="text-xl font-semibold text-primary">{site.name}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background text-center">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-primary">Video Showcase</h2>
          <p className="mt-6 text-lg text-gray-600">Capturing the scale and detail of your work.</p>
        </AnimatedSection>
        <div className="mt-16 grid md:grid-cols-3 gap-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {videoThumbnails.map((src, index) => (
            <AnimatedSection key={index} delay={`delay-${index * 150}`}>
              <div className="relative group aspect-w-16 aspect-h-9 rounded-xl shadow-lg overflow-hidden cursor-pointer">
                <img src={src} alt={`Video thumbnail ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    <PlayIcon />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary to-purple-600 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold">Ready to Build Your Brand?</h2>
            <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">Let's lay the foundation for your marketing success. Schedule a call with our experts today.</p>
            <div className="mt-10">
              <Button to="/contact" variant="primary" isPulsing={true}>Book Your Strategy Call</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default ConstructionServicePage;