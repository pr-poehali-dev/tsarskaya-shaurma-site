import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Catalog() {
  const bears = [
    {
      id: 1,
      name: "Классический мишка",
      description: "Мягкий плюшевый медвежонок коричневого цвета, 35 см",
      price: "2 500 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/6b7a6396-3e60-4188-8afa-7ba442bd732e.jpg",
    },
    {
      id: 2,
      name: "Винтажный мишка",
      description: "Медвежонок в стиле ретро с галстуком-бабочкой, 30 см",
      price: "3 200 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/b6665fa1-073d-4edc-acef-8ad0d7d578d1.jpg",
    },
    {
      id: 3,
      name: "Радужный мишка",
      description: "Яркий медвежонок в пастельных тонах, 28 см",
      price: "2 800 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/f711739c-10d8-4c45-a069-abdaf9685b23.jpg",
    },
    {
      id: 4,
      name: "Большой обнимашка",
      description: "Огромный плюшевый мишка для крепких объятий, 60 см",
      price: "4 500 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/6b7a6396-3e60-4188-8afa-7ba442bd732e.jpg",
    },
    {
      id: 5,
      name: "Мини-мишка",
      description: "Компактный медвежонок-брелок, 12 см",
      price: "900 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/b6665fa1-073d-4edc-acef-8ad0d7d578d1.jpg",
    },
    {
      id: 6,
      name: "Семейка мишек",
      description: "Набор из 3 медвежат разных размеров",
      price: "5 800 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/f711739c-10d8-4c45-a069-abdaf9685b23.jpg",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="catalog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">Наши мишки</h2>
          <p className="text-lg text-muted-foreground">
            Выберите своего идеального друга
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bears.map((bear) => (
            <Card
              key={bear.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={bear.image}
                  alt={bear.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{bear.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{bear.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{bear.price}</span>
                  <Button onClick={scrollToContact}>
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
