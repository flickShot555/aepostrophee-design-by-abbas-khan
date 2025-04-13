
import React, { useEffect } from 'react';
import { Check, Users, Trophy, Calendar } from 'lucide-react';

const About = () => {
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

  const stats = [
    { icon: <Users className="h-6 w-6 text-orange" />, value: '3+', label: 'Clients Countrywide' },
    { icon: <Trophy className="h-6 w-6 text-orange" />, value: '50+', label: 'Projects Completed' },
    { icon: <Calendar className="h-6 w-6 text-orange" />, value: '2+', label: 'Years Experience' }
  ];

  const values = [
    { title: 'Innovation', description: 'We constantly explore new technologies and approaches to deliver the most effective solutions.' },
    { title: 'Quality', description: 'We maintain rigorous quality standards throughout our development process to ensure excellence.' },
    { title: 'Transparency', description: 'We believe in open communication and keeping our clients informed at every stage.' },
    { title: 'Partnership', description: 'We work as an extension of your team, committed to your long-term success.' }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-orange/10 text-orange text-sm font-medium reveal">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 reveal stagger-1">
              We're a Team of <span className="text-gradient">Tech Experts</span>
            </h2>
            <p className="text-gray mt-6 reveal stagger-2">
              Founded in 2025, Aepostrophee has grown into a much experienced software development company with a passion for 
              creating innovative solutions that drive business success.
            </p>
            <p className="text-gray mt-4 reveal stagger-2">
              Our team combines deep technical expertise with industry knowledge to deliver custom software that 
              meets your specific business requirements. We partner with organizations of all sizes, from startups 
              to enterprises, across various industries. We aim to provide services ranging from Web Development, 
              Mobile App Development, to Desktop Apps such as Point-of-Sales tailored to your needs!
            </p>
            
            <div className="mt-8 space-y-4 reveal stagger-3">
              {values.map((value, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-orange/10 p-1 rounded-full">
                      <Check className="h-5 w-5 text-orange" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-dark">{value.title}</h3>
                    <p className="text-gray">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:pl-10">
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg card-shadow text-center reveal"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div className="bg-orange/10 p-3 rounded-full inline-block mb-4">
                      {stat.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-dark">{stat.value}</h3>
                    <p className="text-gray text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 relative overflow-hidden rounded-lg reveal stagger-3">
                {/*<img 
                  src="https://via.placeholder.com/800x500/f8f9fa/333333?text=Our+Team" 
                  alt="Our Team" 
                  className="w-full h-auto rounded-lg"
                />*/}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent flex items-end">
                  <div className="p-8 w-full">
                    <h3 className="text-white text-2xl font-bold">Passionate Professionals</h3>
                    <p className="text-white/80 mt-2">Our diverse team brings expertise from various technology domains</p>
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

export default About;
