
import { useEffect, useRef } from 'react';
import { observeElements } from '@/utils/animations';
import { 
  Users, Share2, ShieldCheck, Scale, HandshakeIcon, 
  ArrowUpDown, DollarSign, HeartHandshake
} from 'lucide-react';

const ImpactCard = ({ 
  icon: Icon, 
  title, 
  description 
}) => (
  <div className="flex flex-col items-center text-center p-6 impact-item opacity-0">
    <div className="bg-primary/10 p-4 rounded-full mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-balance">{description}</p>
  </div>
);

const Impact = () => {
  const impactRef = useRef(null);

  useEffect(() => {
    if (impactRef.current) {
      observeElements('.impact-item', 'animate-fadeIn');
      observeElements('.impact-stat', 'animate-slideUp');
    }
  }, []);

  const impacts = [
    {
      icon: Share2,
      title: "Social Media & National Image",
      description: "Highlighting worker issues to mobilize support and enhance national reputation internationally."
    },
    {
      icon: ShieldCheck,
      title: "Elimination of Scams",
      description: "Combating fraud and alleviating hardships faced by vulnerable overseas workers."
    },
    {
      icon: Scale,
      title: "Labor Rights & Awareness",
      description: "Promoting fair treatment and empowering workers through knowledge and support."
    },
    {
      icon: HandshakeIcon,
      title: "Equality & Anti-Discrimination",
      description: "Fostering social harmony and equal treatment for all workers regardless of origin."
    },
    {
      icon: ArrowUpDown,
      title: "Harmonization",
      description: "Strengthening regional relationships and diplomatic ties through worker protection."
    },
    {
      icon: DollarSign,
      title: "Economic Impact",
      description: "Reducing illegal work and boosting prosperity through protected remittances."
    },
    {
      icon: HeartHandshake,
      title: "Sign of Care & Hope",
      description: "Reflecting commitment to societal welfare and providing hope to workers abroad."
    },
    {
      icon: Users,
      title: "Broad Coverage",
      description: "Comprehensive and real-time response to worker challenges across multiple regions."
    }
  ];

  const stats = [
    { value: "17+", label: "Successful test runs" },
    { value: "24/7", label: "Support availability" },
    { value: "100%", label: "Worker-focused approach" },
    { value: "Multiple", label: "Regions covered" }
  ];

  return (
    <div id="impact" ref={impactRef} className="relative py-20">
      {/* Background elements */}
      <div className="blurred-bg bg-blue-500/20 top-1/4 left-1/3"></div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-primary inline-block mb-4 impact-item opacity-0">
            Making A Difference
          </span>
          <h2 className="heading-lg mb-6 impact-item opacity-0">
            The EXO-Trace Impact
          </h2>
          <p className="text-lg text-gray-600 impact-item opacity-0">
            Beyond individual worker protection, EXO-Trace creates significant social, 
            economic, and political impacts that benefit workers, employers, and nations.
          </p>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl text-center impact-stat opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Impact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <ImpactCard
              key={index}
              icon={impact.icon}
              title={impact.title}
              description={impact.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impact;
