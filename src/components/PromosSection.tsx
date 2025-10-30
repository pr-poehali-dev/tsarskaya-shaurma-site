import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function PromosSection() {
  const promos = [
    {
      id: 1,
      title: "2 по цене 1",
      description: "Каждая вторая шаурма в подарок с 14:00 до 16:00",
      discount: "-50%"
    },
    {
      id: 2,
      title: "Царский обед",
      description: "Шаурма + напиток + картофель фри всего за 499₽",
      discount: "499₽"
    }
  ];

  return (
    <section id="promos" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-accent/10 to-primary/20" />
      <div className="container relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Выгодные акции
          </h2>
          <p className="text-xl text-muted-foreground">
            Специальные предложения для наших гостей
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {promos.map((promo) => (
            <Card key={promo.id} className="border-2 border-accent hover:shadow-2xl transition-all animate-fade-in relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                  {promo.discount}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-3xl mb-2">{promo.title}</CardTitle>
                <CardDescription className="text-lg">{promo.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                  <Icon name="Gift" className="mr-2 h-5 w-5" />
                  Воспользоваться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
