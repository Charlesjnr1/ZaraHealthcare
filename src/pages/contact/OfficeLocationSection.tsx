"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function OfficeLocationSection() {
  const address = "10 Shirehall Ct, Middle River, MD 21220";
  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=10+Shirehall+Ct+Middle+River+MD+21220";

  return (
    <section className="w-full bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="uppercase tracking-widest text-sm font-semibold text-pink-500 mb-4">
          Location
        </p>

        <h2 className="text-5xl md:text-6xl font-semibold text-[#0A1F44]">
          Our Office Location Details
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Google Map (Activated Real Location) */}
        <iframe
          src="https://www.google.com/maps?q=10+Shirehall+Ct+Middle+River+MD+21220&output=embed"
          className="w-full h-[500px] border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>

        {/* Info Card Overlay */}
        <div className="absolute bottom-10 left-10 bg-white rounded-3xl shadow-xl p-8 max-w-sm border border-gray-100">
          <h3 className="text-2xl font-semibold text-[#0A1F44] mb-6">
            Zara Healthcare Services
          </h3>

          <div className="space-y-4 text-[#0A1F44]">
            <div className="flex items-center gap-3">
              <MapPin className="text-pink-500" size={20} />
              <span>{address}</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-pink-500" size={20} />
              <a
                href="tel:+18563795070"
                className="hover:text-pink-500 transition"
              >
                +1 (856) 379-5070
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-pink-500" size={20} />
              <a
                href="mailto:Zarahealthcareservices@outlook.com"
                className="hover:text-pink-500 transition break-all"
              >
                Zarahealthcareservices@outlook.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-pink-500" size={20} />
              <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
            </div>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block text-center w-full bg-[#0A1F44] text-white py-3 rounded-full font-semibold hover:bg-pink-500 transition duration-300"
          >
            Get Directions
          </a>
        </div>
      </motion.div>
    </section>
  );
}