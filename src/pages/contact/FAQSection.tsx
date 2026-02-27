"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "What is home care and who can benefit from it?",
    answer:
      "Home care provides professional support services that allow individuals to live safely in their homes. It benefits seniors, individuals recovering from surgery, and those with chronic conditions.",
  },
  {
    question: "Are your caregivers licensed and insured?",
    answer:
      "Yes. All our caregivers are fully licensed, background-checked, trained, and insured to ensure the highest level of safety and professionalism.",
  },
  {
    question: "How quickly can services begin?",
    answer:
      "Services can typically begin within 24–48 hours after your initial consultation and care assessment.",
  },
  {
    question: "What are your service hours and availability?",
    answer:
      "We provide flexible scheduling including part-time, full-time, overnight, and 24/7 live-in care options.",
  },
  {
    question: "How do you ensure the caregiver are trusted?",
    answer:
      "We conduct thorough background checks, reference verification, skills assessments, and continuous training to maintain trusted, high-quality care.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden border-4 border-pink-400 shadow-2xl">
            <Image
              src="/faq-image.jpg" 
              alt="Happy senior woman"
              width={600}
              height={700}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-widest text-sm font-semibold text-pink-500 mb-4">
            FAQs
          </p>

          <h2 className="text-5xl font-semibold text-[#0A1F44] mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left bg-white hover:bg-pink-50 transition duration-300"
                >
                  <span className="text-lg font-medium text-[#0A1F44]">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-pink-500" size={22} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}