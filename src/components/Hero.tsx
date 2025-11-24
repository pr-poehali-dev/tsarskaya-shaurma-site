import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#d4c5a9]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4c5a9] via-[#c8b89a] to-[#b8a888]"></div>
        
        <div className="absolute bottom-0 right-0 w-full h-[60%]">
          <div 
            className="absolute bottom-0 right-0 w-full h-full"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, transparent 30%, #ff6b3d 30%, #ff6b3d 35%, #ffa03d 35%, #ffa03d 40%, #ffd43d 40%, #ffd43d 45%, #4ecf4e 45%, #4ecf4e 50%, #3da5cf 50%, #3da5cf 55%, transparent 55%)',
            }}
          />
        </div>
      </div>

      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(1.2)',
          mixBlendMode: 'multiply',
        }}
      />
      
      <div className="container relative z-10 text-center py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="inline-block border-2 border-black px-6 py-2 bg-white/80">
              <span className="text-sm font-bold tracking-wider text-black">VINTAGE COLLECTION 2024</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold leading-none tracking-tight text-black drop-shadow-lg">
              HUSKY<br />
              POWER
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto text-black">
            Эксклюзивные футболки премиум качества.<br />
            Для тех, кто выбирает стиль и характер.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="text-lg px-12 h-16 bg-black text-white hover:bg-gray-800 font-bold tracking-wider shadow-2xl"
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              СМОТРЕТЬ КОЛЛЕКЦИЮ
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="border-l-4 border-black pl-4 text-left">
              <div className="text-4xl font-bold text-black">500+</div>
              <div className="text-sm text-black/70 uppercase tracking-wide font-bold">Клиентов</div>
            </div>
            <div className="border-l-4 border-black pl-4 text-left">
              <div className="text-4xl font-bold text-black">100%</div>
              <div className="text-sm text-black/70 uppercase tracking-wide font-bold">Качество</div>
            </div>
            <div className="border-l-4 border-black pl-4 text-left">
              <div className="text-4xl font-bold text-black">24/7</div>
              <div className="text-sm text-black/70 uppercase tracking-wide font-bold">Поддержка</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-black rounded-full flex items-start justify-center p-2 bg-white/50">
          <div className="w-1 h-3 bg-black rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
