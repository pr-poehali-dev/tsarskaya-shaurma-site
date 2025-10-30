import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export default function MeatSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems((prev) => [...prev, id]);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('[data-animate="meat"]');
    cards.forEach((card) => {
      observerRef.current?.observe(card);
    });
  }, []);

  const meatTypes = [
    { id: 1, name: "Курятина", icon: "🐔" },
    { id: 2, name: "Говядина", icon: "🐄" },
    { id: 3, name: "Свинина", icon: "🐷" },
    { id: 4, name: "Баранина", icon: "🐑" },
    { id: 5, name: "Индейка", icon: "🦃" },
    { id: 6, name: "Утка", icon: "🦆" }
  ];

  return (
    <section id="meat" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/729e5d98-a5b5-4ae4-9c43-3ced24cba4ef.jpg')] bg-cover bg-center opacity-25" />
      <div className="container relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Выбери своё мясо
          </h2>
          <p className="text-xl text-muted-foreground">
            Шесть видов премиального мяса на выбор
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {meatTypes.map((meat, index) => (
            <Card 
              key={meat.id}
              data-id={meat.id}
              data-animate="meat"
              className={`hover:scale-105 transition-all duration-500 cursor-pointer border-2 hover:border-primary ${
                visibleItems.includes(meat.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-2">{meat.icon}</div>
                <CardTitle className="text-lg">{meat.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
