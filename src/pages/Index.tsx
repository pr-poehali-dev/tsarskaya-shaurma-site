import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MeatSection from "@/components/MeatSection";
import SaladsSection from "@/components/SaladsSection";
import OrderSection from "@/components/OrderSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactsSection from "@/components/ContactsSection";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <MeatSection />
      <SaladsSection />
      <OrderSection />
      <AboutSection />
      <ReviewsSection />
      <ContactsSection />
    </div>
  );
}