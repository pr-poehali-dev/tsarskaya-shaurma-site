import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?q=80&w=2000")',
        }}
      />
      
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Премиум футболки с Хаски
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
          Стильные дизайны для настоящих ценителей этой удивительной породы
        </p>
        <Button 
          size="lg" 
          className="text-lg px-8 py-6"
          onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Смотреть коллекцию
        </Button>
      </div>
    </section>
  );
}
