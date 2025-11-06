import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, service, message } = formData;
    const subject = `New Inquiry: ${service} - from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`;
    window.location.href = `mailto:contact@kanyuymarketing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Let's start a conversation about your brand's future."
        imageUrl="https://images.unsplash.com/photo-1556740738-b6a63e2775df?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="bg-white p-8 md:p-12 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
                <p className="mt-4 text-gray-600">Have a project in mind? We'd love to hear from you. Fill out the form or use the contact details below.</p>
                
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary/50 focus:border-primary focus:ring-2" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary/50 focus:border-primary focus:ring-2" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service of Interest</label>
                    <select name="service" id="service" value={formData.service} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary/50 focus:border-primary focus:ring-2 bg-white">
                      <option value="">Select a service</option>
                      <option value="Construction & Real Estate">Construction & Real Estate</option>
                      <option value="Beauty & Wellness">Beauty & Wellness</option>
                      <option value="Custom Industry Solutions">Custom Industry Solutions</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary/50 focus:border-primary focus:ring-2"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-4 px-6 border border-transparent rounded-lg shadow-md text-base font-medium hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all duration-300">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay="delay-300" className="flex flex-col justify-center">
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-semibold text-primary">Contact Information</h3>
                  <p className="mt-3 text-lg text-gray-600">Phone: <a href="tel:+237674772569" className="hover:text-accent transition-colors duration-300">(+237) 674 77 25 69</a></p>
                  <p className="text-lg text-gray-600">Email: <a href="mailto:contact@kanyuymarketing.com" className="hover:text-accent transition-colors duration-300">contact@kanyuymarketing.com</a></p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary">Office Address</h3>
                  <p className="mt-3 text-lg text-gray-600">Buea, South West Region<br/>Cameroon</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary">Our Location</h3>
                  <div className="mt-4 rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63659.81189914757!2d9.20101463111032!3d4.16298533827014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1060fe7a75a7a30d%3A0x673c3f9728504543!2sBuea%2C%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1716309054308!5m2!1sen!2sus"
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      title="Google Maps Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;