import React, { useEffect, useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Instagram} from "lucide-react";


const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // Package form data with FormData for a POST request
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);
  
    try {
      const response = await fetch("https://aepostrophee.com/api/sendMail.php", {
        method: "POST",
        body: formDataToSend,
      });
  
      const result = await response.json();
  
      if (result.status === "success") {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });
        // Clear the form fields
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        toast({
          title: "Error sending message!",
          description: result.message || "Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "There was an error sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-orange" />,
      title: 'Phone',
      details: '+92 324 1725257',
      action: 'tel:+923241725257',
      actionText: 'Call us'
    },
    {
      icon: <Mail className="h-5 w-5 text-orange" />,
      title: 'Email',
      details: 'info@aepostrophee.com',
      action: 'mailto:info@aepostrophee.com',
      actionText: 'Send email'
    },
    {
      icon: <MapPin className="h-5 w-5 text-orange" />,
      title: 'Office',
      details: 'Saddar, Rawalpindi',
      action: '#',
      actionText: 'Get directions'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-orange/10 text-orange text-sm font-medium reveal">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 reveal stagger-1">
            Let's Start Your <span className="text-gradient">Next Project</span>
          </h2>
          <p className="text-gray mt-4 reveal stagger-2">
            Have a project in mind or want to learn more about our services? Reach out to us.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white rounded-lg card-shadow p-8 h-full reveal">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 bg-orange/10 p-3 rounded-full">
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-dark">{info.title}</h4>
                      <p className="text-gray mt-1">{info.details}</p>
                      <a 
                        href={info.action} 
                        className="text-orange hover:text-orange/80 text-sm mt-1 inline-block transition-colors"
                      >
                        {info.actionText}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium text-dark mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map(({ name, icon, href }) => (
                    <a
                      key={name}
                      href={href}
                      className="bg-gray-100 hover:bg-orange/10 text-dark w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                      aria-label={name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="bg-white rounded-lg card-shadow p-8 reveal">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
                      placeholder="Your phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Discussion">Project Discussion</option>
                      <option value="Support">Support</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hover bg-orange text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
