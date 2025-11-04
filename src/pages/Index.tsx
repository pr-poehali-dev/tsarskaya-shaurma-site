import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Catalog />
      <Contact />
      <Footer />
    </div>
  );
}
