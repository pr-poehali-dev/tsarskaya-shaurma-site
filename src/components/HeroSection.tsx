import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/4de4d6a6-0ff8-4bba-9bba-08566d7b728c.jpg')] bg-cover bg-center opacity-20" />
      <div className="container relative z-10 text-center animate-fade-in">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-accent drop-shadow-lg">
          Королевский вкус<br />в каждом укусе
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Настоящая шаурма с широким выбором мяса и салатов. Готовим с любовью, подаём с почтением.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90">
            <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
            Заказать сейчас
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6">
            <Icon name="Clock" className="mr-2 h-5 w-5" />
            Часы работы: 10:00 - 22:00
          </Button>
        </div>
      </div>
    </section>
  );
}
