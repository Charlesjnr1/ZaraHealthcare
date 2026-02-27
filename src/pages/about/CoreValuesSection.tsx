"use client";

import Image from "next/image";

export default function CoreValuesSection() {
  return (
    <section className="w-full">

      {/* ===== TOP SECTION ===== */}
      <div className="grid lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="relative h-[500px] lg:h-[600px]">
          <Image
            src="/images/as14.jpg" // place inside public folder
            alt="Caregiver assisting senior exercise"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-white flex items-center">
          <div className="max-w-xl px-8 lg:px-16 py-16">

            <p className="uppercase tracking-widest text-sm font-semibold text-pink-500 mb-4">
              Our Values
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#0A1F44] leading-tight">
              Our Core Values of <br /> Care and Compassion
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              We are committed to delivering compassionate, high-quality care
              built on integrity, professionalism, and respect. Our values
              guide every interaction and every service we provide.
            </p>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM VALUE CARDS ===== */}
      <div className="grid md:grid-cols-3">

        {/* Vision */}
        <div className="bg-white py-20 px-10 text-center border-t border-gray-100">
          <h3 className="text-4xl font-serif font-semibold text-[#0A1F44] mb-6">
            Vision
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
            To be a trusted leader in home healthcare services, delivering
            exceptional support that enhances the quality of life for every
            client we serve.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-[#0A1F44] py-20 px-10 text-center text-white">
          <h3 className="text-4xl font-serif font-semibold mb-6">
            Mission
          </h3>
          <p className="leading-relaxed max-w-sm mx-auto text-gray-200">
            To provide compassionate, reliable, and personalized care
            solutions that empower individuals to live safely and
            independently in their homes.
          </p>
        </div>

        {/* Goals */}
        <div className="bg-white py-20 px-10 text-center border-t border-gray-100">
          <h3 className="text-4xl font-serif font-semibold text-[#0A1F44] mb-6">
            Goals
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
            To continuously improve our services, invest in our caregivers,
            and build lasting relationships based on trust, dignity,
            and excellence.
          </p>
        </div>

      </div>
    </section>
  );
}
