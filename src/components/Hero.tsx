"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "Zara Home Healthcare",
      title: "Zara Healthcare",
      titleSpan: "Your comfort, our priority!",
      description:
        "Experience private, high-quality healthcare tailored to your lifestyle. Our certified professionals deliver personalized medical support with discretion, dignity, and excellence.",
      image: "/images/health.png",
    },
    {
      badge: "Expert Nursing Staff",
      title: "Round-The-Clock",
      titleSpan: "Professional Care",
      description:
        "Our team of experienced nurses and healthcare assistants provide compassionate care tailored to your unique needs.",
      image: "/images/as2.jpg",
    },
    {
      badge: "Personalized Wellness",
      title: "Tailored Health",
      titleSpan: "Solutions For You",
      description:
        "From post-operative care to chronic condition management, we create customized wellness plans that adapt to your evolving health requirements.",
      image: "/images/as1.jpg",
    },
    {
      badge: "ZZH",
      title: "Zara Home Healthcare",
      titleSpan: "At Your Fingertips",
      description:
        "Enjoy priority access to medical professionals and seamless coordination of appointments.",
      image: "/images/as4.jpg",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[750px] w-full overflow-hidden">

      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].badge}
            fill
            priority
            className="object-cover"
          />

          {/* Luxury Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content Over Image */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 h-full flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="text-white max-w-3xl"
          >
            {/* Badge */}
            <span className="inline-block bg-gradient-to-r from-[#1E3A8A] to-[#EC4899] text-white text-xs tracking-widest uppercase font-semibold px-6 py-2 rounded-full shadow-lg">
              {slides[currentSlide].badge}
            </span>

            {/* Title */}
            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05]">
              {slides[currentSlide].title}
              <br />
              <span className="bg-gradient-to-r from-[#EC4899] to-[#1E3A8A] bg-clip-text text-transparent">
                {slides[currentSlide].titleSpan}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg text-gray-200 leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <Link
                href="/book-care"
                className="bg-white text-[#1E3A8A] px-10 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition-all duration-300"
              >
                Book Private Care
              </Link>

              <Link
                href="/services"
                className="border border-white px-10 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#1E3A8A] transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 transition"
      >
        
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 transition"
      >
        
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-10 bg-white"
                : "w-5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
