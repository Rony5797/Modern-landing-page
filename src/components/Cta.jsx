
import { useEffect, useRef } from 'react';
import { observeElements } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import TestimonialCard from './TestimonialCard';

const Cta = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    if (ctaRef.current) {
      observeElements('.cta-animate', 'animate-fadeIn');
    }
  }, []);

  return (
    <div id="contact" ref={ctaRef} className="relative py-20">
      {/* Background gradient */}
      <div className="blurred-bg bg-primary/20 bottom-1/3 right-1/4"></div>
      
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="cta-animate opacity-0">
              <span className="badge badge-primary inline-block mb-4">
                Join Our Platform
              </span>
              <h2 className="heading-lg mb-6">
                Start Protecting Your Workers Today
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-md">
                Provide comprehensive protection and support to your overseas workers with our proven, effective platform.
              </p>
            </div>

            <div className="space-y-4 cta-animate opacity-0">
              <div className="flex items-center">
                <div className="bg-green-500/10 p-1 rounded-full mr-3">
                  <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Monthly or annual protection plans</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500/10 p-1 rounded-full mr-3">
                  <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>24/7 support and assistance</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500/10 p-1 rounded-full mr-3">
                  <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Comprehensive legal and financial protection</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500/10 p-1 rounded-full mr-3">
                  <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Dedicated account manager</span>
              </div>
            </div>

            <div className="pt-4 cta-animate opacity-0">
              <Button size="lg" className="mr-4 shadow-soft">
                Contact Sales
              </Button>
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 cta-animate opacity-0">
            <TestimonialCard 
              quote="EXO-Trace provided critical support when our workers faced legal challenges abroad. Their rapid response and expertise made all the difference."
              author="Ahmed Al-Jabri"
              role="HR Director, Gulf Construction Corp."
            />
            
            <TestimonialCard 
              quote="The peace of mind that comes with knowing our international workforce has comprehensive protection is invaluable. EXO-Trace delivers on every promise."
              author="Sarah Mathews"
              role="Global Workforce Manager"
              className="ml-0 md:ml-12 mt-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
