"use client";

import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#F4F8FB] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-sm font-semibold text-pink-500 mb-4">
            Our Services
          </p>

          <h2 className="text-5xl md:text-6xl font-serif font-semibold text-[#0A1F44] leading-tight">
            Comprehensive Care That <br /> Feels Like Family
          </h2>
        </div>

        {/* Service Card 1 */}
        <div className="bg-[#DCEFF5] rounded-3xl p-10 mb-14 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <h3 className="text-4xl font-semibold text-[#0A1F44] mb-6">
              Skilled Nursing (RN, LPN)
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our licensed Registered Nurses (RN) and Licensed Practical Nurses (LPN)
              provide professional medical care including wound care, health monitoring,
              medication administration, and chronic disease management.
            </p>

            <button className="bg-[#0A1F44] text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-500 transition">
              Read More
            </button>
          </div>

          {/* Image */}
          <div className="relative h-[350px] rounded-2xl overflow-hidden">
            <Image
              src="/images/as1.jpg"
              alt="Skilled nursing care"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="bg-[#DCEFF5] rounded-3xl p-10 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <h3 className="text-4xl font-semibold text-[#0A1F44] mb-6">
              Personal Care & Support Services
            </h3>

            <ul className="space-y-4 text-gray-700 text-lg mb-6">
              <li>• Personal Care Assistance</li>
              <li>• Medication Reminders</li>
              <li>• Companionship</li>
              <li>• Meal Preparation & Light Housekeeping</li>
              <li>• Respite Care</li>
            </ul>

            <button className="bg-[#0A1F44] text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-500 transition">
              Read More
            </button>
          </div>

          {/* Image */}
          <div className="relative h-[350px] rounded-2xl overflow-hidden">
            <Image
              src="/images/as2.jpg"
              alt="Personal care support"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}