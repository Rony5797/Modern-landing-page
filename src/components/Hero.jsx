
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Users, Globe, AlertCircle } from 'lucide-react';
import { animateElements } from '@/utils/animations';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      animateElements('.hero-animate', 'animate-fadeIn', 200);
    }
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="blurred-bg bg-blue-500/30 top-20 right-0"></div>
      <div className="blurred-bg bg-cyan-500/20 bottom-20 left-0"></div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <div>
              <span className="badge badge-primary inline-block mb-4 hero-animate opacity-0">
                Global Worker Protection Platform
              </span>
              <h1 className="heading-xl mb-6 hero-animate opacity-0 text-balance">
                Protecting Workers <span className="text-primary">Worldwide</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 hero-animate opacity-0 text-balance max-w-md">
                EXO-Trace provides comprehensive support and protection for overseas workers, ensuring their welfare, legal rights, and peace of mind.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 hero-animate opacity-0">
              <Button size="lg" className="rounded-full shadow-soft">
                Start Protection Plan
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Learn More
              </Button>
            </div>

            <div className="pt-8 border-t border-gray-100 hero-animate opacity-0">
              <p className="text-sm text-gray-500 mb-4">Trusted by workers and organizations in:</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 items-center">
                <span className="text-gray-700 font-medium">GCC Countries</span>
                <span className="text-gray-700 font-medium">Middle East</span>
                <span className="text-gray-700 font-medium">South Asia</span>
                <span className="text-gray-700 font-medium">Southeast Asia</span>
              </div>
            </div>
          </div>

          <div className="relative glass-card p-8 rounded-2xl shadow-lg hero-animate opacity-0">
            <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">
              Premium Protection
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Legal Protection</h3>
                  <p className="text-gray-600 mt-1">Comprehensive legal support including representation and bail assistance.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Communication Support</h3>
                  <p className="text-gray-600 mt-1">Reliable communication channels for workers and families.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Emergency Assistance</h3>
                  <p className="text-gray-600 mt-1">24/7 support during crises with immediate response protocols.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Global Advocacy</h3>
                  <p className="text-gray-600 mt-1">Lobbying for improved worker rights and government interventions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
