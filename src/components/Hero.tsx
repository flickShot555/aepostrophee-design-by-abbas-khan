
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, BarChart2, Layers } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 section-padding bg-gradient-to-b from-white to-gray-50"
    >
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,69,0,0.05),transparent_60%)]"></div>

      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block reveal">
              <span className="inline-block px-3 py-1 rounded-full bg-orange/10 text-orange text-sm font-medium">
                Innovative Software Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight reveal stagger-1">
              We Build <span className="text-gradient">Software</span> That Drives Business Forward
            </h1>
            <p className="text-gray text-lg mt-6 max-w-lg reveal stagger-2">
              Delivering cutting-edge software solutions that transform ideas into powerful digital experiences. Partner with us to unlock your business potential.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 reveal stagger-3">
              <a 
                href="#contact" 
                className="btn-hover bg-orange text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#services" 
                className="btn-hover border border-dark text-dark px-8 py-3 rounded-md font-medium transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange/5 rounded-full animate-float"></div>
              <div className="absolute bottom-20 left-10 w-40 h-40 bg-dark/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              
              <div className="absolute top-10 left-0 md:left-10 w-72 h-auto glass-effect card-shadow rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start">
                  <div className="bg-orange/20 p-3 rounded-lg mr-4">
                    <Code className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">Custom Development</h3>
                    <p className="text-gray text-sm mt-1">Tailored software solutions for your unique business needs</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-48 right-0 w-72 h-auto glass-effect card-shadow rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-start">
                  <div className="bg-dark/10 p-3 rounded-lg mr-4">
                    <Layers className="h-6 w-6 text-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">UI/UX Design</h3>
                    <p className="text-gray text-sm mt-1">Intuitive interfaces that enhance user experience</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-10 w-72 h-auto glass-effect card-shadow rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <div className="flex items-start">
                  <div className="bg-orange/20 p-3 rounded-lg mr-4">
                    <BarChart2 className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">Analytics</h3>
                    <p className="text-gray text-sm mt-1">Data-driven insights to power your business decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
