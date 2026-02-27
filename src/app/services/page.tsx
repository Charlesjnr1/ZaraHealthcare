import Navbar from "@/components/Navbar";
import ServicesSection from "@/pages/services/ServicesSection";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServicesSection />
      <Footer />
    </div>
  );
}