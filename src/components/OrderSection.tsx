import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function OrderSection() {
  return (
    <section id="order" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Как заказать
          </h2>
          <p className="text-xl text-muted-foreground">
            Три простых шага до царского наслаждения
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center border-2 hover:border-primary transition-colors animate-fade-in">
            <CardHeader>
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="ShoppingCart" className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Шаг 1</CardTitle>
              <CardDescription className="text-lg">Выбери мясо и салаты</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Составь идеальную комбинацию из 6 видов мяса и 24 салатов
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-primary transition-colors animate-fade-in">
            <CardHeader>
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Phone" className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Шаг 2</CardTitle>
              <CardDescription className="text-lg">Позвони или напиши</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Свяжись с нами удобным способом: звонок, WhatsApp или Telegram
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-primary transition-colors animate-fade-in">
            <CardHeader>
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Truck" className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Шаг 3</CardTitle>
              <CardDescription className="text-lg">Получи свежую шаурму</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Доставим горячую шаурму прямо к твоей двери за 30-40 минут
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
