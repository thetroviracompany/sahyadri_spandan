// Updated Navbar component with larger logo size
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { APP_NAME } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Packages', href: '/packages' },
    { name: 'Team', href: '/team' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const showSolidNav = isScrolled || !isHome || isOpen;
  const textColorClass = showSolidNav ? 'text-gray-900' : 'text-white';
  const navBgClass = showSolidNav ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5';

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${navBgClass}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-[101]">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <div className="bg-primary-600 text-white p-3 rounded-xl group-hover:bg-primary-700 transition shadow-sm">
            <img src="/assets/logo.jpg" alt="Logo" className="w-10 h-10 object-contain" />
          </div>
          <span className={`text-2xl font-serif font-bold ${textColorClass} transition-colors`}>
            {APP_NAME}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium hover:text-primary-500 transition-colors ${showSolidNav ? 'text-gray-600' : 'text-gray-100 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-700 transition shadow-lg shadow-primary-600/20"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition ${textColorClass} hover:bg-black/5`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-[100] transition-all duration-300 ease-in-out flex flex-col pt-24 pb-8 px-6 overflow-y-auto ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-full invisible'
        }`}
        style={{ height: '100dvh' }}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-xl font-serif font-medium text-gray-800 hover:text-primary-600 transition-colors py-4 border-b border-gray-100"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-4 mt-6">
            <button
              onClick={() => {
                navigate('/contact');
                setIsOpen(false);
              }}
              className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-primary-700 transition shadow-xl w-full flex items-center justify-center gap-2"
            >
              Book Your Trip
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};