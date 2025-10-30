import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Контакты
          </h2>
          <p className="text-xl text-muted-foreground">
            Мы всегда на связи
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center border-2 hover:border-primary transition-colors animate-fade-in">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Phone" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Телефон</h3>
              <p className="text-muted-foreground mb-4">+998 90 123 45 67</p>
              <Button className="w-full bg-secondary hover:bg-secondary/90">
                <Icon name="Phone" className="mr-2 h-4 w-4" />
                Позвонить
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-primary transition-colors animate-fade-in">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="MessageCircle" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Быстрый заказ онлайн</p>
              <Button className="w-full bg-secondary hover:bg-secondary/90">
                <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                Написать
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-primary transition-colors animate-fade-in">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="MapPin" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Адрес</h3>
              <p className="text-muted-foreground mb-4">г. Ташкент, ул. Примерная, 123</p>
              <Button className="w-full bg-secondary hover:bg-secondary/90">
                <Icon name="Navigation" className="mr-2 h-4 w-4" />
                Маршрут
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 max-w-3xl mx-auto border-2 animate-fade-in">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Время работы</h3>
              <div className="flex items-center justify-center gap-3 text-lg">
                <Icon name="Clock" className="w-6 h-6 text-primary" />
                <span className="font-semibold">Ежедневно: 10:00 - 22:00</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="mt-20 border-t pt-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">👑</span>
              <span className="text-xl font-bold text-primary">Царская Шаурма</span>
            </div>
            <p className="text-muted-foreground">© 2024 Все права защищены</p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Icon name="Instagram" className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Facebook" className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="MessageCircle" className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
