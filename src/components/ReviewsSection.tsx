import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Александр М.",
      rating: 5,
      text: "Лучшая шаурма в городе! Огромные порции, свежие ингредиенты. Особенно нравится с говядиной и салатом по-корейски.",
      date: "15.10.2024"
    },
    {
      id: 2,
      name: "Мария К.",
      rating: 5,
      text: "Заказываю уже третий раз. Доставка всегда вовремя, шаурма горячая и вкусная. Салат Цезарь просто бомба!",
      date: "12.10.2024"
    },
    {
      id: 3,
      name: "Дмитрий П.",
      rating: 5,
      text: "Царское качество по царской цене! Попробовал с бараниной — восторг! Рекомендую всем друзьям.",
      date: "08.10.2024"
    },
    {
      id: 4,
      name: "Елена С.",
      rating: 5,
      text: "Очень вкусно и сытно! Салаты свежие, мясо сочное. Особенно понравился винегрет — как у бабушки!",
      date: "05.10.2024"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Отзывы наших гостей
          </h2>
          <p className="text-xl text-muted-foreground">
            Нам доверяют тысячи довольных клиентов
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="border-2 hover:border-primary transition-colors animate-fade-in">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
