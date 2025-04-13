import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiesPolicy = () => {
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
          <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Whats good?</h2>
            <p className="text-gray mb-4">
              We dont use cookies!
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray mb-4">
              If you still have any questions about our Cookies Policy or how we dont use cookies, please reach out to us at info@aepostrophee.com.
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

export default CookiesPolicy;
