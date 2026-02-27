import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import KnowledgeCenterHero from "@/components/KnowledgeCenterHero";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks/>
      <KnowledgeCenterHero />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}