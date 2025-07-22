import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto container-padding flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-orange">
            Aepostrophee<sup>{'\u00AE'}</sup>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-dark hover:text-orange font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          {/* Admin Login Button */}
          <a
            href="/admin/pages/login"
            className="text-dark hover:text-orange font-medium transition-colors duration-300"
          >
            Admin Login
          </a>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="btn-hover bg-orange text-white px-6 py-2.5 rounded-md font-medium transition-all duration-300 hover:shadow-lg"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-x-0 md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out',
          isScrolled ? 'top-[49px]' : 'top-[57px]',
          isMobileMenuOpen
            ? 'opacity-100 h-auto'
            : 'opacity-0 h-0 pointer-events-none'
        )}
      >
        <div className="container mx-auto container-padding py-5 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-dark hover:text-orange font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Admin Login (mobile) */}
          <a
            href="/admin/pages/login"
            className="block text-dark hover:text-orange font-medium py-2 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Admin Login
          </a>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="btn-hover bg-orange text-white px-6 py-2.5 rounded-md font-medium transition-all duration-300 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
