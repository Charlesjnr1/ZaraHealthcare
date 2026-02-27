"use client";

import Image from "next/image";

export default function TeamSection() {
  const team = [
    {
      name: "Claire D. Seibel",
      role: "Nurse",
      image: "/images/as1.jpg",
    },
    {
      name: "Katheryn R. Petrie",
      role: "Nurse",
      image: "/images/as2.jpg",
    },
    {
      name: "Margarita O. Atkinson",
      role: "Nurse",
      image: "/images/as3.jpg",
    },
    {
      name: "Natasha J. Davey",
      role: "Nurse",
      image: "/images/as4.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#F4F8FB] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-widest text-sm font-semibold text-pink-500 mb-4">
            Our Team
          </p>

          <h2 className="text-5xl md:text-6xl font-serif font-semibold text-[#0A1F44] leading-tight">
            The Heart Behind Our Care
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Our compassionate professionals are dedicated to delivering
            personalized care with integrity, respect, and excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#DCEFF5] rounded-3xl p-10 text-center hover:shadow-xl transition duration-300"
            >
              {/* Circular Image */}
              <div className="relative w-44 h-44 mx-auto rounded-full overflow-hidden mb-8">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-semibold text-[#0A1F44]">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-pink-500 font-medium mt-2">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}