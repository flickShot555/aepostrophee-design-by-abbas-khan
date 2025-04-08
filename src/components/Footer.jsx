
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto container-padding py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold">
                Tech<span className="text-orange">Solve</span>
              </a>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming ideas into powerful digital experiences through innovative software solutions.
            </p>
            <div className="flex space-x-3">
              {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="bg-white/10 hover:bg-orange/80 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label={platform}
                >
                  <span className="text-sm">{platform.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Portfolio', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-orange transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Apps', 'Custom Software', 'UI/UX Design', 'Cloud Solutions', 'Support & Maintenance'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-orange transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <ul className="space-y-4 text-gray-300">
              <li>123 Tech Street, Innovation City, CA 94103</li>
              <li>info@techsolve.com</li>
              <li>+1 (123) 456-7890</li>
            </ul>
            <button 
              onClick={scrollToTop}
              className="mt-6 bg-orange hover:bg-orange/90 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} TechSolve. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap gap-6 text-sm text-gray-300">
              <li><a href="#" className="hover:text-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange transition-colors">Cookies Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
