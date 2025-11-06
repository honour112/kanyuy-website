import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { MenuIcon, XIcon } from './IconComponents';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link to="/" className="flex flex-col leading-none" onClick={closeMenus}>
              <span className="text-2xl font-heading font-semibold text-primary tracking-wide">KANYUY MARKETING</span>
              <span className="text-[10px] text-gray-500 tracking-[0.2em] mt-1">MARKETING THAT WORKS</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-10">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative" onMouseEnter={() => link.subLinks && setServicesOpen(true)} onMouseLeave={() => link.subLinks && setServicesOpen(false)}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => 
                    `relative text-lg font-medium transition-colors duration-300 nav-link-underline ${isActive ? 'text-primary nav-link-active' : 'text-gray-700 hover:text-primary'}`
                  }
                >
                  {link.name}
                </NavLink>
                {link.subLinks && servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white rounded-lg shadow-xl py-2 ring-1 ring-black ring-opacity-5">
                    {link.subLinks.map((subLink) => (
                      <Link key={subLink.name} to={subLink.path} className="block px-5 py-3 text-gray-700 hover:bg-light-gray hover:text-primary transition-colors duration-200" onClick={() => setServicesOpen(false)}>
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary focus:outline-none">
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              link.subLinks ? (
                 <div key={link.name}>
                  <NavLink to={link.path} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-light-gray text-primary' : 'text-gray-600 hover:bg-light-gray hover:text-primary'}`} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </NavLink>
                  <div className="pl-4">
                    {link.subLinks.map(subLink => (
                        <NavLink key={subLink.name} to={subLink.path} className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-500 hover:text-primary'}`} onClick={() => setIsOpen(false)}>
                          {subLink.name}
                        </NavLink>
                    ))}
                  </div>
                 </div>
              ) : (
                <NavLink key={link.name} to={link.path} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-light-gray text-primary' : 'text-gray-600 hover:bg-light-gray hover:text-primary'}`} onClick={() => setIsOpen(false)}>
                  {link.name}
                </NavLink>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;