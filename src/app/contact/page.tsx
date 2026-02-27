import Navbar from "@/components/Navbar";
import ContactForm from "@/pages/contact/ContactForm";
import OfficeLocationSection from "@/pages/contact/OfficeLocationSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ContactForm />
      <OfficeLocationSection />
      <FAQSection />
      <Footer />
    </div>
  );
}