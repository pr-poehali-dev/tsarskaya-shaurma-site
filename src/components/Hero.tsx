import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center py-12">
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">🐺 Премиум качество</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Футболки с<br />
            <span className="text-primary">Хаски</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg">
            Эксклюзивные дизайны для ценителей породы. Премиум ткани и современная печать.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 h-14 shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Смотреть коллекцию
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 h-14"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              О нас
            </Button>
          </div>
          <div className="flex gap-8 pt-4">
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9</div>
              <div className="text-sm text-muted-foreground">Средний рейтинг</div>
            </div>
            <div>
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm text-muted-foreground">Уникальных дизайнов</div>
            </div>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?q=80&w=1000"
              alt="Husky"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}