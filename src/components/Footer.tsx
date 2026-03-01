"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* COMPANY INFO */}
        <div>
          <h3 className="text-2xl font-serif font-semibold mb-4">
            ZARA Home Healthcare Services, Inc.
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Providing compassionate and professional home care services
            tailored to your loved ones. Your comfort and peace of mind
            are our priority.
          </p>

          <div className="flex gap-4 mt-6">
            <SocialIcon
              href="#"
              label="Facebook"
              icon={<Facebook size={18} />}
            />
            <SocialIcon
              href="#"
              label="Twitter"
              icon={<Twitter size={18} />}
            />
            <SocialIcon
              href="#"
              label="Instagram"
              icon={<Instagram size={18} />}
            />
            <SocialIcon
              href="#"
              label="LinkedIn"
              icon={<Linkedin size={18} />}
            />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-pink-400">
            Quick Links
          </h4>
          <ul className="space-y-3 text-gray-300">
            <FooterLink label="Home" />
            <FooterLink label="About Us" />
            <FooterLink label="Services" />
            <FooterLink label="Caregivers" />
            <FooterLink label="Employment" />
            <FooterLink label="Contact" />
          </ul>
        </div>

        {/* AREAS OF SERVICE */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-pink-400">
            Areas of Service
          </h4>
          <ul className="space-y-3 text-gray-300">
            <FooterLink label="Baltimore City" />
            <FooterLink label="Baltimore County" />
            <FooterLink label="Harford County" />
            <FooterLink label="Howard County" />
            <FooterLink label="Montgomery County" />
            <FooterLink label="Prince George's County" />
            <FooterLink label="Anne Arundel County" />
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-pink-400">
            Contact Us
          </h4>
          <ul className="space-y-3 text-gray-300">
            <li>10 Shirehall Ct</li>
            <li>Middle River, MD 21220</li>

            <li>
              Phone:{" "}
              <a
                href="tel:+18563795070"
                className="hover:text-pink-400 transition"
              >
                (856) 379-5070
              </a>
            </li>

            <li>
              Phone:{" "}
              <a
                href="tel:+12164154531"
                className="hover:text-pink-400 transition"
              >
                (216) 415-4531
              </a>
            </li>

            <li>
              Email:{" "}
              <a
                href="mailto:zarahomehealthcareservices@outlook.com"
                className="hover:text-pink-400 transition"
              >
                zarahomehealthcareservices@outlook.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} ZARA Home Healthcare Services, Inc. 
            All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-pink-400 transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-pink-400 transition duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Reusable Link Component */
function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <a
        href="#"
        className="hover:text-pink-400 transition duration-300"
      >
        {label}
      </a>
    </li>
  );
}

/* Reusable Social Icon Component */
function SocialIcon({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="bg-white/10 p-2 rounded-full hover:bg-pink-500 transition duration-300"
    >
      {icon}
    </a>
  );
}
