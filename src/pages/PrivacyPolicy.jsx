import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto container-padding py-24">
        <Button 
          onClick={() => navigate(-1)} 
          variant="outline" 
          className="mb-8 flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Data Collection</h2>
            <p className="text-gray mb-4">
              We collect personal information such as your name, email address, and IP address when you use our services. We also use cookies and similar tracking technologies to enhance your browsing experience.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Data Usage</h2>
            <p className="text-gray mb-4">
              The data we collect is used to provide and improve our services, personalize your experience, communicate with you, and analyze how our services are used.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Data Sharing</h2>
            <p className="text-gray mb-4">
              We may share your personal data with third-party service providers who perform services on our behalf, business partners, and when required by law or to protect our rights.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Data Storage & Security</h2>
            <p className="text-gray mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Data is stored securely with encryption protocols in place.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">User Rights</h2>
            <p className="text-gray mb-4">
              You have the right to access, correct, update, or request deletion of your personal information. You can also object to processing of your data and request data portability.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Legal Basis & Compliance</h2>
            <p className="text-gray mb-4">
              We process your data in accordance with applicable data protection laws including GDPR and CCPA. Our legal basis for processing includes consent, contract fulfillment, legitimate interests, and compliance with legal obligations.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray mb-4">
              If you have any questions about our Privacy Policy or how we handle your data, please contact our Data Protection Officer at privacy@aepostrophee.com.
            </p>
          </section>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
