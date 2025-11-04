import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/f711739c-10d8-4c45-a069-abdaf9685b23.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white" />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <span className="text-8xl inline-block animate-bounce-slow">🧸</span>
          <h1 className="text-5xl md:text-7xl text-primary drop-shadow-lg">
            Милые Мишки
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 font-medium">
            Ручная работа • Натуральные материалы • С любовью
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Уникальные плюшевые мишки, которые дарят тепло и радость.
            Идеальный подарок для детей и взрослых.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-8" onClick={scrollToContact}>
              <Icon name="Heart" size={20} className="mr-2" />
              Заказать мишку
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8"
              onClick={() =>
                document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Icon name="Sparkles" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
