
import { useEffect, useRef } from 'react';
import { observeElements } from '@/utils/animations';
import { 
  Shield, MessageSquare, Hospital, FileText, 
  ArrowUpRight, Ticket, Database, GraduationCap, 
  DollarSign, Phone 
} from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}) => (
  <div className="glass-card p-6 rounded-xl hover-scale feature-card opacity-0">
    <div className="bg-primary/10 p-3 inline-flex rounded-lg mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="heading-md mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <div className="mt-6 flex justify-end">
      <ArrowUpRight className="h-5 w-5 text-primary/70" />
    </div>
  </div>
);

const Features = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    if (featuresRef.current) {
      observeElements('.feature-card', 'animate-slideUp');
    }
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Legal Support",
      description: "Proactive legal representation, bail assistance, and structured communication with authorities."
    },
    {
      icon: MessageSquare,
      title: "Communication Channels",
      description: "Reliable lines of communication for workers and families, even during detention."
    },
    {
      icon: Hospital,
      title: "Medical Support",
      description: "Healthcare assistance for chronic conditions and dietary needs during difficult situations."
    },
    {
      icon: FileText,
      title: "Visa Validity",
      description: "Ensuring proper issuance and management of visas to prevent legal complications."
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Organized records for all registered workers, ensuring accurate information at all times."
    },
    {
      icon: DollarSign,
      title: "Financial Support",
      description: "Assistance with unpaid wages, family support, and resolution of financial disputes."
    },
    {
      icon: GraduationCap,
      title: "Training & Education",
      description: "Comprehensive education on rights, laws, and responsibilities for overseas workers."
    },
    {
      icon: Ticket,
      title: "Exit & Repatriation",
      description: "Assistance with tickets and documentation for workers returning to their home countries."
    },
    {
      icon: Phone,
      title: "24/7 Assistance",
      description: "Round-the-clock support from skilled professionals, including psychologists and call center staff."
    }
  ];

  return (
    <div id="features" ref={featuresRef} className="relative py-20 bg-gradient-subtle">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-primary inline-block mb-4 opacity-0 feature-card">
            Comprehensive Protection
          </span>
          <h2 className="heading-lg mb-6 opacity-0 feature-card">
            Complete Worker Protection Suite
          </h2>
          <p className="text-lg text-gray-600 opacity-0 feature-card">
            EXO-Trace offers a holistic platform designed specifically for overseas workers, 
            with features that address every aspect of worker welfare and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
