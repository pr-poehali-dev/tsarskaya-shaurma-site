import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10" />
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Наша история
            </h2>
            <p className="text-xl text-muted-foreground">
              От сердца к сердцу, от рук к рукам
            </p>
          </div>
          
          <Card className="mb-8 border-2 animate-fade-in">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👑</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-primary">Царская Шаурма</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Мы начали свой путь с простой идеи — готовить шаурму так, как будто мы готовим для самых близких людей. 
                    Каждый ингредиент выбирается с особой тщательностью, каждое блюдо готовится с душой.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Сегодня "Царская Шаурма" — это место, где традиционный рецепт встречается с современным подходом к качеству. 
                    Мы гордимся тем, что используем только свежие продукты и предлагаем широкий выбор для каждого гостя.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 border-2 hover:border-primary transition-colors animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="CheckCircle" className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-2">Только свежие продукты</h4>
              <p className="text-muted-foreground">Ежедневные поставки от проверенных поставщиков</p>
            </Card>

            <Card className="text-center p-6 border-2 hover:border-primary transition-colors animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Heart" className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-2">Готовим с любовью</h4>
              <p className="text-muted-foreground">Каждое блюдо — это результат заботы и внимания</p>
            </Card>

            <Card className="text-center p-6 border-2 hover:border-primary transition-colors animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Users" className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-2">Для каждого гостя</h4>
              <p className="text-muted-foreground">Широкий выбор мяса и салатов на любой вкус</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
