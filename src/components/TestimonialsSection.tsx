"use client";

import React from "react";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Estelle Darcy",
    role: "Client",
    content:
      "We've had an excellent experience with Home Care Solutions. Their team is reliable and supportive in every situation.",
  },
  {
    id: "2",
    name: "Benjamin Shah",
    role: "Client",
    content:
      "The level of care provided has been exceptional. Their professionalism and compassion truly stand out.",
  },
  {
    id: "3",
    name: "Juliana Silva",
    role: "Client",
    content:
      "They brought peace of mind to our family. It's comforting to know our loved one is in capable hands.",
  },
  {
    id: "4",
    name: "Michael Brown",
    role: "Client",
    content:
      "From day one, the communication and attention to detail have been remarkable. Highly recommended.",
  },
  {
    id: "5",
    name: "Sophia Martinez",
    role: "Client",
    content:
      "Their caregivers treat patients with dignity and warmth. The service quality exceeded expectations.",
  },
  {
    id: "6",
    name: "Daniel Kim",
    role: "Client",
    content:
      "Professional, compassionate, and dependable. We feel confident and supported every step of the way.",
  },
];

export default function TestimonialsSection() {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="uppercase tracking-widest text-sm font-semibold text-pink-500 mb-4">
          Testimonial
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0A1F44]">
          Voices of Care: Our Clients' Stories
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
          Discover why families trust our services. Their experiences reflect
          our dedication to compassion, professionalism, and excellence.
        </p>
      </div>

      <div className="relative mt-16">
        <div className="flex w-max animate-testimonial-scroll hover:[animation-play-state:paused]">
          {duplicated.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[380px] mx-4 flex-shrink-0 bg-[#0A1F44] rounded-2xl p-10 text-left shadow-xl"
            >
              <p className="text-white leading-relaxed text-lg">
                “{item.content}”
              </p>

              <div className="w-12 h-1 bg-pink-500 mt-8 mb-6 rounded-full" />

              <h4 className="text-white text-xl font-semibold">
                {item.name}
              </h4>
              <p className="text-white/70 text-sm mt-1">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}