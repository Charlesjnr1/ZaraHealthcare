import Navbar from "@/components/Navbar";
import AboutSection from "@/pages/about/AboutSection";
import CoreValuesSection from "@/pages/about/CoreValuesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AboutSection />
      <CoreValuesSection />
      <Footer />
    </div>
  );
}