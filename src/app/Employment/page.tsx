import Navbar from "@/components/Navbar";
import CareersSection from "@/pages/Employment/CareersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CareersSection />
      <Footer />
    </div>
  );
}