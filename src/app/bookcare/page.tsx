import Navbar from "@/components/Navbar";
import BookingPage from "@/pages/bookcare/BookingPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BookingPage />
      <Footer />
    </div>
  );
}