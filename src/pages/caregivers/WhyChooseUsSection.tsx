"use client";

import { Check } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-[#CFE8EC] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-sm font-semibold text-pink-500 mb-4">
            Why Choose Us
          </p>

          <h2 className="text-5xl md:text-6xl font-serif font-semibold text-[#0A1F44] leading-tight">
            Why Choose Us for <br /> Homecare
          </h2>

          <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-lg">
            We are committed to delivering compassionate, dependable,
            and personalized care that enhances quality of life and
            brings peace of mind to families.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-12 shadow-sm hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#0A1F44] text-white p-3 rounded-full">
                <Check size={28} />
              </div>

              <h3 className="text-3xl font-semibold text-[#0A1F44]">
                Personalized Care
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              We treat every client like family. Our approach is tailored
              to each individual’s needs, preferences, and comfort —
              ensuring care that truly feels personal and supportive.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-12 shadow-sm hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#0A1F44] text-white p-3 rounded-full">
                <Check size={28} />
              </div>

              <h3 className="text-3xl font-semibold text-[#0A1F44]">
                Trusted Professionals
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our caregivers are carefully selected, fully trained,
              and background-checked to provide not only reliable care
              but also comfort, safety, and peace of mind.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}