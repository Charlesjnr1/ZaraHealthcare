"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-widest text-sm font-semibold text-pink-500 mb-6">
            Get In Touch
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold text-[#0A1F44] leading-tight mb-8">
            We'd Love To Receive <br /> Your Message
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-md">
            Our healthcare team is ready to assist you with compassionate,
            personalized support tailored to your needs.
          </p>

          <div className="space-y-5 text-[#0A1F44] text-lg">
            <div className="flex items-center gap-4">
              <Phone className="text-pink-500" />
              <span>+1 (856) 379-5070</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-pink-500" />
              <span>Zarahealthcareservices@outlook.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-pink-500" />
              <span>10 Shirehall Ct Middle River, MD 21220</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white shadow-2xl rounded-3xl p-12 border border-gray-100"
        >
          <form
            action="https://formsubmit.co/Zarahealthcareservices@outlook.com"
            method="POST"
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Hidden Settings */}
            <input type="hidden" name="_subject" value="New Contact Message - ZARA Healthcare" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#0A1F44] mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                required
                className="rounded-full border border-gray-200 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#0A1F44] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="rounded-full border border-gray-200 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Preferred Date */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#0A1F44] mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                name="preferredDate"
                className="rounded-full text-black border border-gray-200 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Telephone */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#0A1F44] mb-2">
                Telephone
              </label>
              <input
                type="tel"
                name="telephone"
                className="rounded-full text-black border border-gray-200 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Service */}
            <div className="md:col-span-2 flex flex-col">
              <label className="text-sm font-semibold text-[#0A1F44] mb-2">
                Select Service
              </label>
              <select
                name="service"
                className="rounded-full border text-black border-gray-200 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option>Companion Care</option>
                <option>Skilled Nursing</option>
                <option>Home Healthcare</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2 flex flex-col">
              <label className="text-sm font-semibold text-[#0A1F44] mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="rounded-3xl text-black border border-gray-200 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#0A1F44] text-white py-4 rounded-full font-semibold text-lg hover:bg-pink-500 transition duration-300"
              >
                Send Message
              </motion.button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
