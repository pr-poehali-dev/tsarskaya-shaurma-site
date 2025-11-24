import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/80"></div>
      
      <div className="container relative z-10 text-center py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="inline-block border-2 border-white px-6 py-2">
              <span className="text-sm font-bold tracking-wider">PREMIUM COLLECTION 2024</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold leading-none tracking-tight">
              HUSKY<br />
              POWER
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Эксклюзивные футболки премиум качества.<br />
            Для тех, кто выбирает стиль и характер.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="text-lg px-12 h-16 bg-white text-black hover:bg-gray-200 font-bold tracking-wider"
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              СМОТРЕТЬ КОЛЛЕКЦИЮ
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="border-l-4 border-white pl-4 text-left">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Клиентов</div>
            </div>
            <div className="border-l-4 border-white pl-4 text-left">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Качество</div>
            </div>
            <div className="border-l-4 border-white pl-4 text-left">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Поддержка</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
