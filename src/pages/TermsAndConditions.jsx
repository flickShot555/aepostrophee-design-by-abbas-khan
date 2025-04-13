import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsAndConditions = () => {
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
          <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-gray mb-4">
              By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">User Responsibilities</h2>
            <p className="text-gray mb-4">
              You agree to use our services in a manner consistent with all applicable laws and regulations. Prohibited behaviors include unauthorized access to our systems, distributing malware, and engaging in any activity that disrupts our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-gray mb-4">
              All content on this website, including text, graphics, logos, and software, is the property of Aepostrophee and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our explicit permission.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Disclaimers & Limitation of Liability</h2>
            <p className="text-gray mb-4">
              Our services are provided "as is" without warranties of any kind. We are not liable for damages arising from your use of our services, including but not limited to direct, indirect, incidental, or consequential damages.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Governing Law & Dispute Resolution</h2>
            <p className="text-gray mb-4">
              These terms are governed by the laws of the jurisdiction in which our company is registered. Any disputes arising from the use of our services will be resolved through arbitration in accordance with the rules of the arbitration association in our jurisdiction.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Account Termination</h2>
            <p className="text-gray mb-4">
              We reserve the right to terminate or suspend access to our services, without prior notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Modification of Terms</h2>
            <p className="text-gray mb-4">
              We may modify these terms at any time by posting the revised terms on our website. Your continued use of our services after such changes constitutes your acceptance of the new terms.
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

export default TermsAndConditions;