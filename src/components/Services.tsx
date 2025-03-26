
import React, { useEffect } from 'react';
import { Code, Database, Cloud, Globe, MobilePhone, Shield } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-7 w-7" />,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to address your specific business challenges and objectives.',
    color: 'bg-orange/10 text-orange'
  },
  {
    icon: <MobilePhone className="h-7 w-7" />,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications that deliver seamless experiences across all devices.',
    color: 'bg-dark/10 text-dark'
  },
  {
    icon: <Globe className="h-7 w-7" />,
    title: 'Web Development',
    description: 'Responsive, high-performance web applications built with modern technologies and frameworks.',
    color: 'bg-orange/10 text-orange'
  },
  {
    icon: <Cloud className="h-7 w-7" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to optimize your operations.',
    color: 'bg-dark/10 text-dark'
  },
  {
    icon: <Database className="h-7 w-7" />,
    title: 'Data Management',
    description: 'Comprehensive data solutions including analytics, warehousing, and business intelligence.',
    color: 'bg-orange/10 text-orange'
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: 'Security Services',
    description: 'Advanced cybersecurity measures to protect your applications and sensitive data.',
    color: 'bg-dark/10 text-dark'
  }
];

const Services = () => {
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
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-orange/10 text-orange text-sm font-medium reveal">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 reveal stagger-1">
            Comprehensive <span className="text-gradient">Software Solutions</span>
          </h2>
          <p className="text-gray mt-4 reveal stagger-2">
            We offer a wide range of services to help businesses leverage technology for growth and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg card-shadow p-8 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg reveal"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={`${service.color} p-3 rounded-lg inline-block mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-dark text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
