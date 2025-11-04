import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function About() {
  const features = [
    {
      icon: "Heart",
      title: "Ручная работа",
      description: "Каждый мишка создается вручную с вниманием к деталям",
    },
    {
      icon: "Sparkles",
      title: "Качественные материалы",
      description: "Используем только гипоаллергенные и безопасные ткани",
    },
    {
      icon: "Smile",
      title: "Уникальный дизайн",
      description: "Эксклюзивные модели с индивидуальным характером",
    },
    {
      icon: "Gift",
      title: "Идеальный подарок",
      description: "Порадуйте близких особенным и памятным презентом",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">Почему выбирают нас</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы создаем не просто игрушки, а верных друзей на долгие годы
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-8 pb-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={feature.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
