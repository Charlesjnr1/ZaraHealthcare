"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    id: "1",
    question: "What services does your home care agency provide?",
    answer:
      "We provide personalized in-home care services including personal assistance, medication support, companionship, mobility assistance, post-hospital recovery care, and specialized senior care services tailored to individual needs.",
  },
  {
    id: "2",
    question: "How are caregivers selected and trained?",
    answer:
      "All caregivers undergo a rigorous screening process including background checks, credential verification, and professional training. Continuous education ensures they maintain the highest standards of care.",
  },
  {
    id: "3",
    question: "Can I choose the caregiver for my loved one?",
    answer:
      "Yes. We carefully match caregivers based on personality, experience, and care requirements. Families are involved in the selection process to ensure comfort and compatibility.",
  },
  {
    id: "4",
    question: "Do you offer 24-hour care or live-in care services?",
    answer:
      "Absolutely. We provide flexible scheduling options including hourly, overnight, 24-hour, and live-in care depending on your specific needs.",
  },
  {
    id: "5",
    question:
      "How do you handle emergency situations with your caregivers?",
    answer:
      "Our caregivers are trained in emergency response protocols. We maintain 24/7 support lines and have structured procedures to ensure rapid and appropriate action in urgent situations.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <p className="uppercase tracking-widest text-sm font-semibold text-pink-500 mb-4">
            FAQs
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0A1F44] leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Find answers to common questions about our services, caregiver
            standards, and care options. We're here to provide clarity and
            peace of mind.
          </p>

          <button className="mt-8 bg-[#0A1F44] text-white px-6 py-3 rounded-lg hover:bg-pink-500 transition-all duration-300">
            See More FAQ
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="border-b border-gray-200 pb-6"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-xl font-semibold text-[#0A1F44]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-pink-500" : "text-[#0A1F44]"
                    }`}
                    size={24}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}