import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-1">
            <h2 className="text-2xl font-heading font-semibold">KANYUY MARKETING</h2>
            <p className="mt-2 text-gray-300">Marketing that works.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-accent">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.filter(l => !l.subLinks).map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-accent">Services</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.find(l => l.name === 'Services')?.subLinks?.map((subLink) => (
                <li key={subLink.name}>
                  <Link to={subLink.path} className="text-gray-300 hover:text-white transition-colors duration-300">
                    {subLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
             <h3 className="text-lg font-semibold text-accent">Contact & Connect</h3>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li><a href="tel:+237674772569" className="hover:text-white">(+237) 674 77 25 69</a></li>
                <li><a href="mailto:contact@kanyuymarketing.com" className="hover:text-white">contact@kanyuymarketing.com</a></li>
                <li className="pt-2">
                    <div className="flex space-x-4">
                        {SOCIAL_LINKS.map((social, index) => (
                          <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors duration-300">
                            {social.icon}
                          </a>
                        ))}
                    </div>
                </li>
              </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-dark pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kanyuy Marketing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;