import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
                Premium Wireless Audio
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight">
              Bass Pro
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
              Профессиональные беспроводные наушники.<br />
              Студийное качество звука в каждой детали.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="text-base px-8 h-14 rounded-full"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Смотреть коллекцию
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-base px-8 h-14 rounded-full"
            >
              Узнать больше
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16">
            <div className="space-y-2">
              <div className="text-4xl font-bold">40 ч</div>
              <div className="text-sm text-muted-foreground">Автономность</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">ANC</div>
              <div className="text-sm text-muted-foreground">Шумоподавление</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">Hi-Res</div>
              <div className="text-sm text-muted-foreground">Качество звука</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
