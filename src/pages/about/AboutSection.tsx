"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          {/* Label */}
          <p className="uppercase tracking-widest text-sm font-semibold text-pink-500 mb-4">
            About Us
          </p>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-serif font-semibold text-[#0A1F44] leading-tight">
            Our Story of Care <br /> and Commitment
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            We are dedicated to delivering compassionate, professional, and
            personalized home healthcare services. Our mission is to enhance
            quality of life while providing peace of mind to families.
          </p>

          {/* Bottom Large Image */}
          <div className="mt-12 relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/as3.jpg"
              alt="Caregiver assisting with medication"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-8">

          {/* Top Two Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/as2.jpg"
                alt="Caregiver smiling with patient"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/as1.jpg"
                alt="Caregiver helping senior walk"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md relative">
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-[#0A1F44] rounded-full" />

            <p className="text-gray-600 italic text-lg leading-relaxed pl-6">
              “At the heart of everything we do is a passion for care,
              compassion, and making a difference—one home, one family,
              one life at a time.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}