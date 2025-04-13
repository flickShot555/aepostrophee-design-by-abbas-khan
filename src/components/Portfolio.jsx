
import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  //web
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A full-featured e-commerce solution with advanced inventory management and analytics.',
    image: './assets/screenshots/web/e-commerce.PNG',
    address: './assets/projects/e-commerce/index.html',
    github: 'https://github.com/flickShot555/CODOTECH/tree/main/Fertilizer-Shop-Website',
    tags: ['React']
  },
  {
    title: 'Inventory Management System',
    category: 'Web Development',
    description: 'A complete Inventory management system for an autombile dealership',
    image: './assets/screenshots/web/car-showroom-system.PNG',
    address: '',
    github: 'https://github.com/flickShot555/car-showroom-management-system',
    tags: ['React']
  },
  {
    title: 'Social Media Website',
    category: 'Web Development',
    description: 'a website that provide a theme for developing a social media website, that allows users to connect and share content with each other.',
    image: './assets/screenshots/web/CampusConnect.png',
    address: './assets/projects/CampusConnect/index.html',
    github:'https://github.com/flickShot555/CODOTECH/tree/main/College-Social-Media-Website',
    tags: ['React']
  },
  {
    title: 'IT Solutions Company Website',
    category: 'Web Development',
    description: 'A complete modern and responsive website for an IT solutions company, showcasing services and projects.',
    image: './assets/screenshots/web/IT-Services.PNG',
    address: './assets/projects/IT-services/index.html',
    github:'https://github.com/flickShot555/CODOTECH/tree/main/IT-Services-Company-Website',
    tags: ['Vue.js', 'Python', 'TensorFlow']
  },
  {
    title: 'Online Compilor',
    category: 'Web Development',
    description: 'A web-based compiler that supports multiple programming languages, allowing users to write and execute code online.',
    image: './assets/screenshots/web/online-compiler.PNG',
    address: './assets/projects/online-compiler/index.html',
    github:'https://github.com/flickShot555/CODOTECH/tree/main/Online-Compiler-Website',
    tags: ['Javascript']
  }
];

const categories = ['All', 'Web Development', 'Mobile Development', 'Custom Software'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

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
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-orange/10 text-orange text-sm font-medium reveal">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 reveal stagger-1">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray mt-4 reveal stagger-2">
            Explore our portfolio of successful projects delivered to clients across various industries.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal stagger-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-orange text-white'
                  : 'bg-white text-dark hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden card-shadow group transition-all duration-300 hover:shadow-lg reveal"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8 space-x-[0.625rem]">
                  <button className="bg-white text-dark rounded-full p-3 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" /></a>
                  </button>
                  <button className="bg-white text-dark rounded-full p-3 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <a href={project.address} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight className="h-5 w-5" /></a>
                  </button>
                  
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-sm text-orange font-medium">{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-dark text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
