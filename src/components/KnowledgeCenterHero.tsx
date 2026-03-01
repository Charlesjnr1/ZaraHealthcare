"use client";

import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

type Topic = {
  id: string;
  title: string;
  content: string;
};

export default function KnowledgeCenterHero() {
  const [active, setActive] = useState<Topic | null>(null);

  // 🔒 Lock background scroll when modal is open
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  const topics: Topic[] = [
    {
      id: "caregiver",
      title: "Understanding the Role of a Caregiver?",
      content: `A caregiver is a trained and compassionate professional who provides essential support to individuals who need assistance with daily living activities. Caregivers help clients maintain independence, safety, and dignity while receiving care in the comfort of their own homes.

At ZARA Home Healthcare Services, Inc., our caregivers assist with personal care, medication reminders, mobility support, meal preparation, companionship, and light housekeeping.

Beyond physical assistance, they offer emotional support and meaningful companionship — helping clients feel valued, respected, and secure.

Our caregivers are carefully selected, trained, and committed to delivering high-quality care that reflects our promise:

"Your comfort, our priority!"`,
    },
    {
      id: "industry",
      title: "Supporting Seniors with Dignity",
      content: `At ZARA Home Healthcare Services, Inc., we believe every senior deserves to be treated with respect, compassion, and honor. Aging should never diminish a person’s dignity — it should be supported with care that uplifts and empowers.

Our dedicated caregivers provide personalized assistance while preserving independence and promoting comfort at home.

Whether helping with daily activities, offering companionship, or ensuring safety, we approach every client with patience, kindness, and professionalism.

We are committed to creating a safe, nurturing environment where seniors feel valued, heard, and cared for — because dignity is at the heart of quality care.

ZARA Home Healthcare Services, Inc.
"Your comfort, our priority!"`,
    },
    {
      id: "start-care",
      title: "Start Your Care Journey",
      content: `Beginning care for yourself or a loved one should feel simple, supportive, and stress-free.

At ZARA Home Healthcare Services, Inc., we guide you every step of the way to ensure you receive the right level of care tailored to your unique needs.

Our process is straightforward:

1. Initial Consultation  
We take time to understand your needs, preferences, and goals.

2. Personalized Care Plan  
We develop a customized care plan designed to promote comfort, safety, and independence.

3. Caregiver Matching  
We carefully match you with a trained caregiver who aligns with your care requirements.

Starting your care journey with ZARA means choosing compassion, professionalism, and reliability.`,
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 120,
      },
    }),
    hover: {
      y: -8,
      scale: 1.04,
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    },
  };

  return (
    <section className="relative w-full h-[560px] md:h-[680px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/Homeee.jpg"
        alt="Caregiver assisting elderly woman at home"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/70 via-[#1E3A8A]/50 to-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-6xl font-light tracking-wide drop-shadow-lg text-center"
        >
          Knowledge Center
        </motion.h1>
      </div>

      {/* Cards */}
      <div className="absolute bottom-0 left-0 w-full px-6 pb-10 z-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onClick={() => setActive(topic)}
              role="button"
              tabIndex={0}
              className={`cursor-pointer p-8 text-lg md:text-xl font-medium shadow-xl rounded-xl transition-all duration-500 ${
                index === 0
                  ? "bg-white text-[#1E3A8A] hover:bg-[#f0f4ff]"
                  : "bg-[#EC4899] text-white hover:bg-[#f472b6]"
              }`}
            >
              {topic.title}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />

            {/* Modal Wrapper */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-[110] px-6"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.35, type: "spring", stiffness: 120 }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white max-w-2xl w-full rounded-3xl shadow-2xl p-8 relative border-t-8 border-[#EC4899] max-h-[80vh] overflow-y-auto"
              >
                {/* Close Icon */}
                <motion.button
                  onClick={() => setActive(null)}
                  whileHover={{ rotate: 90, scale: 1.2 }}
                  className="absolute top-5 right-5 text-[#1E3A8A] hover:text-[#EC4899] transition"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </motion.button>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl md:text-3xl font-semibold text-[#1E3A8A] mb-6"
                >
                  {active.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 leading-relaxed text-lg whitespace-pre-line"
                >
                  {active.content}
                </motion.p>

                <div className="mt-8 flex justify-end">
                  <motion.button
                    onClick={() => setActive(null)}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#1E3A8A] text-white px-6 py-3 rounded-lg transition"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
