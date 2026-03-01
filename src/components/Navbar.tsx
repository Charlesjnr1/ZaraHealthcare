"use client";

import Image from "next/image";
import Link from "next/link";
import { HeartPulse, Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP CONTACT BAR */}
      <div className="hidden md:block bg-[#1E3A8A] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-pink-300" />
              +1 (856) 379-5070
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-pink-300" />
             zarahomehealthcareservices@outlook.com
            </span>
          </div>
          <span className="text-pink-200 font-medium">
            24/7 Home Healthcare Support
          </span>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="bg-white/100 backdrop-blur-md border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
       <Link href="/" className="flex items-center">
  <Image
    src="/images/log.jpeg"
    alt="Zara Home Healthcare Services Logo"
    width={200}
    height={80}
    className="h-12 w-auto object-contain"
    priority
  />
</Link>
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-10 font-medium text-[#1E3A8A]">
            <Link
              href="/about"
              className="hover:text-[#EC4899] transition-colors duration-200"
            >
              About
            </Link>

            <Link
              href="/services"
              className="hover:text-[#EC4899] transition-colors duration-200"
            >
              Services
            </Link>

            <Link
              href="/caregivers"
              className="hover:text-[#EC4899] transition-colors duration-200"
            >
              Caregivers
            </Link>

            <Link
              href="/Employment"
              className="hover:text-[#EC4899] transition-colors duration-200"
            >
              Employment
            </Link>

            <Link
              href="/contact"
              className="hover:text-[#EC4899] transition-colors duration-200"
            >
              Contact
            </Link>

            <Link
              href="/bookcare"
              className="bg-[#1E3A8A] text-white px-6 py-2.5 rounded-xl shadow-md hover:bg-[#162D6A] hover:shadow-lg transition-all duration-300"
            >
              Book Care
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1E3A8A]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-pink-100 px-6 py-6 space-y-5 font-medium text-[#1E3A8A] shadow-xl">
            <Link
              href="/about"
              className="block hover:text-[#EC4899] transition"
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            <Link
              href="/services"
              className="block hover:text-[#EC4899] transition"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>

            <Link
              href="/caregivers"
              className="block hover:text-[#EC4899] transition"
              onClick={() => setOpen(false)}
            >
              Caregivers
            </Link>

            <Link
              href="/Employment"
              className="block hover:text-[#EC4899] transition"
              onClick={() => setOpen(false)}
            >
              Employment
            </Link>

            

            <Link
              href="/contact"
              className="block hover:text-[#EC4899] transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/bookcare"
              className="block text-center bg-[#EC4899] text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition shadow-md"
              onClick={() => setOpen(false)}
            >
              Book Care
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
