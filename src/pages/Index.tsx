import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const meatTypes = [
    { id: 1, name: "Курятина", icon: "🐔" },
    { id: 2, name: "Говядина", icon: "🐄" },
    { id: 3, name: "Свинина", icon: "🐷" },
    { id: 4, name: "Баранина", icon: "🐑" },
    { id: 5, name: "Индейка", icon: "🦃" },
    { id: 6, name: "Утка", icon: "🦆" }
  ];

  const salads = [
    {
      id: 1,
      name: "Салат Селёдочка по-домашнему",
      ingredients: "Сельдь, картофель, лук, яйцо, майонез",
      price: 3000
    },
    {
      id: 2,
      name: "Салат Овощной светофор",
      ingredients: "Помидоры, огурцы, болгарский перец, лук, масло",
      price: 3000
    },
    {
      id: 3,
      name: "Салат Винегрет",
      ingredients: "Свекла, картофель, морковь, огурцы, горошек, масло",
      price: 3000
    },
    {
      id: 4,
      name: "Салат Греческий",
      ingredients: "Помидоры, огурцы, фета, маслины, лук, масло оливковое",
      price: 3000
    },
    {
      id: 5,
      name: "Салат Витаминный",
      ingredients: "Капуста, морковь, яблоко, зелень, масло",
      price: 3000
    },
    {
      id: 6,
      name: "Салат с курицей",
      ingredients: "Курица, помидоры, огурцы, сыр, майонез",
      price: 3000
    },
    {
      id: 7,
      name: "Салат Овощной",
      ingredients: "Помидоры, огурцы, лук, зелень, масло",
      price: 3000
    },
    {
      id: 8,
      name: "Салат из помидоров",
      ingredients: "Помидоры, лук, зелень, чеснок, масло",
      price: 3000
    },
    {
      id: 9,
      name: "Салат с курицей и ананасами",
      ingredients: "Курица, ананасы, кукуруза, яйцо, майонез",
      price: 3000
    },
    {
      id: 10,
      name: "Салат Сельдь под шубой",
      ingredients: "Сельдь, картофель, морковь, свекла, яйцо, майонез",
      price: 3000
    },
    {
      id: 11,
      name: "Салат Крабовый",
      ingredients: "Крабовые палочки, кукуруза, яйцо, рис, майонез",
      price: 3000
    },
    {
      id: 12,
      name: "Салат Цезарь",
      ingredients: "Курица, салат айсберг, помидоры черри, сухарики, пармезан, соус цезарь",
      price: 3000
    },
    {
      id: 13,
      name: "Салат Оливье с ветчиной",
      ingredients: "Ветчина, картофель, морковь, огурцы, горошек, яйцо, майонез",
      price: 3000
    },
    {
      id: 14,
      name: "Салат с сыром",
      ingredients: "Сыр, помидоры, огурцы, яйцо, чеснок, майонез",
      price: 3000
    },
    {
      id: 15,
      name: "Салат Свекла с сыром",
      ingredients: "Свекла, сыр, чеснок, грецкий орех, майонез",
      price: 3000
    },
    {
      id: 16,
      name: "Салат Конструктор",
      ingredients: "Курица, ветчина, сыр, яйцо, помидоры, огурцы, майонез",
      price: 3000
    },
    {
      id: 17,
      name: "Салат Оливье",
      ingredients: "Колбаса, картофель, морковь, огурцы, горошек, яйцо, майонез",
      price: 3000
    },
    {
      id: 18,
      name: "Салат Морковь по-корейски",
      ingredients: "Морковь, чеснок, уксус, специи корейские, масло",
      price: 3000
    },
    {
      id: 19,
      name: "Салат Баклажаны по-корейски",
      ingredients: "Баклажаны, перец болгарский, чеснок, специи корейские, масло",
      price: 3000
    },
    {
      id: 20,
      name: "Салат Кимчи",
      ingredients: "Пекинская капуста, перец чили, чеснок, имбирь, специи корейские",
      price: 3000
    },
    {
      id: 21,
      name: "Салат Фунчоза",
      ingredients: "Лапша фунчоза, морковь, огурцы, перец, соус соевый, специи",
      price: 3000
    },
    {
      id: 22,
      name: "Салат Спаржа по-корейски",
      ingredients: "Спаржа соевая, морковь, лук, чеснок, специи корейские, масло",
      price: 3000
    },
    {
      id: 23,
      name: "Салат Папоротник по-корейски",
      ingredients: "Папоротник, морковь, лук, чеснок, специи корейские, соус соевый",
      price: 3000
    },
    {
      id: 24,
      name: "Салат Дайкон по-корейски",
      ingredients: "Дайкон, морковь, чеснок, специи корейские, масло, уксус",
      price: 3000
    }
  ];

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
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">👑</span>
            <h1 className="text-2xl font-bold text-primary">Царская Шаурма</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#meat" className="text-sm font-medium hover:text-primary transition-colors">Мясо</a>
            <a href="#salads" className="text-sm font-medium hover:text-primary transition-colors">Салаты</a>
            <a href="#order" className="text-sm font-medium hover:text-primary transition-colors">Как заказать</a>
            <a href="#promos" className="text-sm font-medium hover:text-primary transition-colors">Акции</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Заказать
          </Button>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/4de4d6a6-0ff8-4bba-9bba-08566d7b728c.jpg')] bg-cover bg-center opacity-20" />
        <div className="container relative z-10 text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-accent drop-shadow-lg">
            Королевский вкус<br />в каждом укусе
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-2xl mx-auto">
            Только свежие ингредиенты и проверенные рецепты
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
              <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
              Заказать сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all">
              <Icon name="Menu" className="mr-2 h-5 w-5" />
              Смотреть меню
            </Button>
          </div>
        </div>
      </section>

      <section id="meat" className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-accent">
            Выберите мясо для шаурмы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Все виды шаурмы по 3000₽
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {meatTypes.map((meat) => (
              <Card key={meat.id} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary">
                <CardHeader>
                  <div className="text-6xl mb-4">{meat.icon}</div>
                  <CardTitle className="text-lg">{meat.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">3000₽</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="salads" className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-accent">
            Салаты к шаурме
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Все салаты по 3000₽
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salads.map((salad) => (
              <Card key={salad.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
                <CardHeader>
                  <CardTitle className="text-lg">{salad.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{salad.ingredients}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{salad.price}₽</span>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Icon name="Plus" className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-accent">
            Как заказать
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all border-2">
              <CardHeader>
                <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Phone" className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Шаг 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Позвоните по номеру<br /><span className="font-bold text-primary">+7 (999) 123-45-67</span></p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all border-2">
              <CardHeader>
                <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="ChefHat" className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Шаг 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Выберите вид мяса и салат из нашего меню</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all border-2">
              <CardHeader>
                <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Truck" className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Шаг 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Ждите доставку в течение 30-45 минут</p>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-12 border-4 border-secondary bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                <Icon name="Info" className="h-6 w-6 text-primary" />
                Важная информация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-lg">
              <div className="flex items-start gap-3">
                <Icon name="Check" className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p>При заказе обязательно укажите адрес доставки и контактный телефон</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p>Можно заказать любое сочетание мяса и салата по вашему вкусу</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p>Минимальная сумма заказа для бесплатной доставки — 800₽</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="promos" className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-accent">
            Акции и спецпредложения
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Экономьте вместе с царскими предложениями
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {promos.map((promo) => (
              <Card key={promo.id} className="relative overflow-hidden border-4 border-secondary hover:shadow-2xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary to-primary transform rotate-45 translate-x-12 -translate-y-12" />
                <div className="absolute top-4 right-4 text-white font-bold text-xl z-10 transform -rotate-12">
                  {promo.discount}
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Gift" className="h-6 w-6 text-secondary" />
                    {promo.title}
                  </CardTitle>
                  <CardDescription className="text-lg">{promo.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6">
                    Воспользоваться
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-accent">
            О нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Award" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Только свежие ингредиенты и проверенные поставщики</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Clock" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Скорость</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Приготовим вашу шаурму за 5 минут</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Heart" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Любовь</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Готовим с душой для наших гостей</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-accent">
            Доставка
          </h2>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Truck" className="h-6 w-6 text-primary" />
                Условия доставки
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <div className="flex items-start gap-3">
                <Icon name="Check" className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Бесплатная доставка</p>
                  <p className="text-muted-foreground">При заказе от 800₽</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Время доставки</p>
                  <p className="text-muted-foreground">30-45 минут по городу</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Зона доставки</p>
                  <p className="text-muted-foreground">В радиусе 5 км от ресторана</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-accent">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Icon name="MapPin" className="h-5 w-5 text-primary" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">г. Москва, ул. Примерная, д. 123</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Icon name="Phone" className="h-5 w-5 text-primary" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Icon name="Clock" className="h-5 w-5 text-primary" />
                  Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Ежедневно с 10:00 до 23:00</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Icon name="Mail" className="h-5 w-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">info@царская-шаурма.рф</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-accent text-accent-foreground">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl">👑</span>
            <h3 className="text-2xl font-bold">Царская Шаурма</h3>
          </div>
          <p className="text-accent-foreground/80 mb-6">
            Королевский вкус в каждом укусе
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <Button variant="ghost" size="icon" className="hover:bg-accent-foreground/10">
              <Icon name="Instagram" className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent-foreground/10">
              <Icon name="Facebook" className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent-foreground/10">
              <Icon name="Twitter" className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-accent-foreground/60">
            © 2025 Царская Шаурма. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}