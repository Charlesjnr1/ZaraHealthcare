"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, FileText } from "lucide-react";

export default function BookingPage() {
  return (
    <section className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-widest text-sm font-semibold text-pink-500 mb-4">
            Book Appointment
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold text-[#0A1F44]">
            Schedule Your Care Today
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Complete the form below and our team will contact you to confirm your
            appointment and discuss your care needs.
          </p>
        </motion.div>

        {/* Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-2xl rounded-3xl p-10 border border-gray-100"
        >
          <form
            action="https://formsubmit.co/Zarahealthcareservices@outlook.com"
            method="POST"
            className="grid md:grid-cols-2 gap-8"
          >

            {/* Hidden FormSubmit Settings */}
            <input type="hidden" name="_subject" value="New Appointment Booking - ZARA Healthcare" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-[#0A1F44] font-medium mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-pink-500" size={18} />
                <input
                  type="text"
                  name="fullName"
                  required
                  className="w-full pl-10 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[#0A1F44] font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-pink-500" size={18} />
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full pl-10 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-[#0A1F44] font-medium mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-pink-500" size={18} />
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full pl-10 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Service */}
            <div className="flex flex-col">
              <label className="text-[#0A1F44] font-medium mb-2">
                Select Service
              </label>
              <select
                name="service"
                required
                className="p-3 border rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option value="">Choose a service</option>
                <option value="Personal Care">Personal Care</option>
                <option value="Companionship">Companionship</option>
                <option value="24/7 Live-In Care">24/7 Live-In Care</option>
                <option value="Post-Surgery Care">Post-Surgery Care</option>
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col">
              <label className="text-[#0A1F44] font-medium mb-2">
                Preferred Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-pink-500" size={18} />
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full text-black pl-10 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
            </div>

            {/* Time */}
            <div className="flex flex-col">
              <label className="text-[#0A1F44] font-medium mb-2">
                Preferred Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 text-pink-500" size={18} />
                <input
                  type="time"
                  name="time"
                  required
                  className="w-full text-black pl-10 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="md:col-span-2 flex flex-col">
              <label className="text-[#0A1F44] font-medium mb-2">
                Additional Notes
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 text-pink-500" size={18} />
                <textarea
                  name="notes"
                  rows={4}
                  className="w-full text-black pl-10 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Tell us about your care needs..."
                />
              </div>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-[#0A1F44] text-white px-10 py-4 rounded-full font-semibold hover:bg-pink-500 transition duration-300 shadow-lg"
              >
                Confirm Booking
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
