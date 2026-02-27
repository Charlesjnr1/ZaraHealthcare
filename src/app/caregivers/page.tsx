import Navbar from "@/components/Navbar";
import TeamSection from "@/pages/caregivers/TeamSection";
import WhyChooseUsSection from "@/pages/caregivers/WhyChooseUsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <TeamSection />
      <WhyChooseUsSection />
      <Footer />
    </div>
  );
}