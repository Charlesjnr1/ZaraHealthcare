import React from "react";

type Step = {
  number: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: 1,
    title: "Initial Consultation",
    description:
      "We begin with a comprehensive assessment to understand your needs, preferences, and long-term health goals.",
  },
  {
    number: 2,
    title: "Personalized Care Plan",
    description:
      "Based on your consultation, we design a customized care plan tailored specifically to your individual requirements.",
  },
  {
    number: 3,
    title: "Professional Care Delivery",
    description:
      "Our experienced professionals deliver high-quality care with compassion, consistency, and attention to every detail.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 border border-gray-300 bg-white/60 backdrop-blur-sm">

          {/* Left Intro Section */}
          <div className="px-10 py-16">
            <p className="text-sm tracking-widest text-blue-800 font-semibold uppercase mb-6">
              How It Works
            </p>

            <h2 className="text-5xl font-serif font-semibold text-gray-900 leading-tight">
              Quality Care in <br /> Three Simple Steps
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-relaxed">
              We provide a seamless and supportive care experience designed
              around your individual needs. Our structured approach ensures
              clarity, comfort, and professional excellence at every stage.
            </p>
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center px-10 py-16"
            >
              {/* Divider */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-0 h-full w-px bg-gray-300" />
              )}

              {/* Step Number */}
              <div className="mb-8 w-20 h-20 rounded-full bg-blue-900 flex items-center justify-center text-white text-3xl font-serif">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-serif font-semibold text-gray-900 leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;