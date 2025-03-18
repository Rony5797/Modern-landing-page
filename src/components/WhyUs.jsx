import { useEffect, useRef } from "react";
import { observeElements } from "@/utils/animations";
import { CheckCircle, XCircle } from "lucide-react";

const ComparisonRow = ({ feature, exoTrace, embassy, ministry, social }) => (
  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-4 border-b border-gray-100 comparison-row opacity-0">
    <div className="font-medium">{feature}</div>
    <div className="text-center">
      {exoTrace ? (
        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
      )}
    </div>
    <div className="text-center">
      {embassy ? (
        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
      )}
    </div>
    <div className="text-center">
      {ministry ? (
        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
      )}
    </div>
    <div className="text-center">
      {social ? (
        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
      )}
    </div>
  </div>
);

const Advantage = ({ title, description }) => (
  <div className="glass-card p-4 md:p-6 rounded-xl advantage-card opacity-0">
    <h3 className="text-md md:text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm md:text-base text-gray-600">{description}</p>
  </div>
);

const WhyUs = () => {
  const whyUsRef = useRef(null);

  useEffect(() => {
    if (whyUsRef.current) {
      observeElements(".comparison-row", "animate-fadeIn");
      observeElements(".advantage-card", "animate-slideUp");
      observeElements(".why-title", "animate-fadeIn");
    }
  }, []);

  const comparisonData = [
    {
      feature: "Legal Support",
      exoTrace: true,
      embassy: false,
      ministry: false,
      social: false
    },
    {
      feature: "24/7 Assistance",
      exoTrace: true,
      embassy: false,
      ministry: false,
      social: false
    },
    {
      feature: "Financial Aid",
      exoTrace: true,
      embassy: false,
      ministry: false,
      social: true
    },
    {
      feature: "Medical Support",
      exoTrace: true,
      embassy: false,
      ministry: false,
      social: false
    },
    {
      feature: "Exit Assistance",
      exoTrace: true,
      embassy: true,
      ministry: false,
      social: false
    },
    {
      feature: "Training",
      exoTrace: true,
      embassy: false,
      ministry: true,
      social: false
    }
  ];

  const advantages = [
    {
      title: "Operational Readiness",
      description:
        "Fully prepared with in-depth research and actionable solutions for immediate implementation."
    },
    {
      title: "Proven Expertise",
      description:
        "Extensive diagnostics with 17+ successful test runs addressing real-world worker scenarios."
    },
    {
      title: "Effective Solutions",
      description:
        "Practical, tested, and results-driven solutions for labor rights, financial support, and representation."
    },
    {
      title: "Unique Capabilities",
      description:
        "Specialized expertise in designing holistic, sustainable worker protection solutions with proven track record."
    }
  ];

  return (
    <div
      id="why-us"
      ref={whyUsRef}
      className="relative py-12 md:py-20 bg-gradient-subtle"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <span className="badge badge-primary inline-block mb-2 md:mb-4 why-title opacity-0">
            Unmatched Services
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 why-title opacity-0">
            Why Choose EXO-Trace?
          </h2>
          <p className="text-sm md:text-lg text-gray-600 why-title opacity-0">
            EXO-Trace offers comprehensive solutions that other institutions
            simply cannot match, filling critical gaps in worker protection.
          </p>
        </div>

        <div className="mb-8 md:mb-16">
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-gray-50 p-4 font-semibold">
              <div>Feature</div>
              <div className="text-center">EXO-Trace</div>
              <div className="text-center">Embassy</div>
              <div className="text-center">Ministry</div>
              <div className="text-center">Social Clubs</div>
            </div>
            <div className="p-4">
              {comparisonData.map((row, index) => (
                <ComparisonRow
                  key={index}
                  feature={row.feature}
                  exoTrace={row.exoTrace}
                  embassy={row.embassy}
                  ministry={row.ministry}
                  social={row.social}
                />
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 why-title opacity-0">
          Our Unique Advantages
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {advantages.map((advantage, index) => (
            <Advantage
              key={index}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
