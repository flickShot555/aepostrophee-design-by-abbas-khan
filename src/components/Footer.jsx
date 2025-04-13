
import React from 'react';
import { ArrowUp, Linkedin, Instagram, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const socialLinks = [
    {
      name: "Github",
      icon: <Github size={20} />,
      href: "https://github.com/flickShot555/",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/company/aepostrophee",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      href: "https://instagram.com/aepostrophee",
    },
  ];
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    //{ name: 'Plans', href: '#plans' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto container-padding py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold">
                <span className="text-orange">Aepostrophee</span>
              </a>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming ideas into powerful digital experiences through innovative software solutions.
            </p>
            <div className="flex space-x-3">
            {socialLinks.map(({ name, icon, href }) => (
              <a
                key={name}
                href={href}
                className="bg-gray-100 hover:text-orange text-light w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {/*{['About Us', 'Services', 'Portfolio', 'Plans', 'Contact'].map((item) => (*/}
              {links.map((link, index) => (
                <li key={link}>
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-light hover:text-orange font-medium transition-colors duration-300"
                >
                  {link.name}
                </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Apps', 'Custom Software', 'UI/UX Design', 'Support & Maintenance'].map((item) => (
                <li key={item} className="text-gray-300 hover:text-orange transition-colors">
                {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <ul className="space-y-4 text-gray-300">
              <li>Saddar, Rawalpindi, Pakistan</li>
              <li>info@aepostrophee.com</li>
              <li>+92 324 1725257</li>
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
            © {new Date().getFullYear()} Aepostrophee<sup>{'\u00AE'}</sup>. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap gap-6 text-sm text-gray-300">
              <li>
                <Link to="/privacy-policy" className="hover:text-orange transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-orange transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies-policy" className="hover:text-orange transition-colors">
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
