import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🧸</span>
            <h1 className="text-2xl text-primary">Милые Мишки</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Button variant="ghost" onClick={() => scrollToSection("about")}>
              О нас
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("catalog")}>
              Каталог
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")}>
              Контакты
            </Button>
          </nav>
          <Button onClick={() => scrollToSection("contact")}>
            <Icon name="MessageCircle" size={18} className="mr-2" />
            Написать
          </Button>
        </div>
      </div>
    </header>
  );
}
