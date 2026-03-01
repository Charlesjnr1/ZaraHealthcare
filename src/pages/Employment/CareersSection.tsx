"use client";

import Image from "next/image";
import { FileText } from "lucide-react";
import Link from "next/link";

export default function CareersSection() {
  const jobs = [
    {
      title: "Certified Nursing Assistant (CNA) / GNA",
      description:
        "Join our compassionate team and make a meaningful difference in patients’ lives every day.",
    },
    {
      title: "Companion Caregiver",
      description:
        "Provide emotional support and assistance to clients while promoting independence and dignity.",
    },
    {
      title: "Registered Nurse (RN)",
      description:
        "Deliver skilled clinical care with professionalism, integrity, and excellence.",
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/as5.avif"
            alt="Healthcare professional smiling"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay Badge */}
          <div className="absolute top-6 left-6 bg-[#0A1F44] text-white px-5 py-3 rounded-xl shadow-lg">
            <p className="text-sm uppercase tracking-widest text-pink-400">
              We’re Hiring
            </p>
            <p className="font-semibold text-lg">
              Join Our Growing Team
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="uppercase tracking-widest text-sm font-semibold text-pink-500 mb-4">
            Careers
          </p>

          <h2 className="text-5xl md:text-6xl font-serif font-semibold text-[#0A1F44] leading-tight mb-6">
            Career Opportunities <br /> in Home Healthcare
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            We are committed to building a team of dedicated professionals who
            are passionate about delivering high-quality, compassionate care.
            Explore rewarding career paths with competitive pay and growth opportunities.
          </p>

          {/* Job Listings */}
          <div className="space-y-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition"
              >
                <div className="bg-[#0A1F44] text-white p-4 rounded-full h-fit">
                  <FileText size={24} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#0A1F44]">
                    {job.title}
                  </h3>

                  <p className="text-gray-600 mt-2">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <Link href="/apply">
              <button className="bg-[#0A1F44] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-500 transition duration-300">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
