import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <div className="flex items-center gap-3">
            <Button size="lg" className="hidden sm:flex bg-secondary hover:bg-secondary/90">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Заказать
            </Button>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Icon name="Menu" className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a 
                    href="#meat" 
                    className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon name="Beef" className="h-5 w-5" />
                    Мясо
                  </a>
                  <a 
                    href="#salads" 
                    className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon name="Salad" className="h-5 w-5" />
                    Салаты
                  </a>
                  <a 
                    href="#order" 
                    className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon name="ClipboardList" className="h-5 w-5" />
                    Как заказать
                  </a>
                  <a 
                    href="#about" 
                    className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon name="BookOpen" className="h-5 w-5" />
                    Наша история
                  </a>
                  <a 
                    href="#reviews" 
                    className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon name="Star" className="h-5 w-5" />
                    Отзывы
                  </a>
                  <a 
                    href="#promos" 
                    className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon name="Gift" className="h-5 w-5" />
                    Акции
                  </a>
                  <a 
                    href="#contacts" 
                    className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon name="MapPin" className="h-5 w-5" />
                    Контакты
                  </a>
                  <Button size="lg" className="mt-6 bg-secondary hover:bg-secondary/90 w-full">
                    <Icon name="Phone" className="mr-2 h-4 w-4" />
                    Заказать
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
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
          
          <Card className="max-w-2xl mx-auto border-4 border-primary shadow-2xl overflow-hidden">
            <div className="relative h-64">
              <img
                src="https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/4de4d6a6-0ff8-4bba-9bba-08566d7b728c.jpg"
                alt="Царская шаурма"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Царская Шаурма</h3>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-5xl md:text-6xl font-bold text-primary">3000₽</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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

      <section id="meat" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/729e5d98-a5b5-4ae4-9c43-3ced24cba4ef.jpg')] bg-cover bg-center opacity-25" />
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-accent">
            Выберите мясо для шаурмы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Любой вид мяса на ваш выбор
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {meatTypes.map((meat) => (
              <Card key={meat.id} className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 cursor-pointer border-4 hover:border-primary bg-gradient-to-br from-white to-primary/5">
                <CardHeader className="p-8">
                  <div className="text-8xl mb-6 animate-scale-in">{meat.icon}</div>
                  <CardTitle className="text-2xl font-bold">{meat.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="salads" className="py-20 relative overflow-hidden bg-muted/30">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/11e8e724-0785-43db-84c7-662e70f6e9ce.jpg')] bg-cover bg-center opacity-25" />
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-accent">
            Салаты к шаурме
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свежие салаты на любой вкус
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {salads.map((salad) => (
              <Card key={salad.id} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 cursor-pointer border-4 hover:border-secondary bg-gradient-to-br from-white to-secondary/5">
                <CardHeader className="p-6">
                  <CardTitle className="text-2xl font-bold mb-3">{salad.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{salad.ingredients}</CardDescription>
                </CardHeader>
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

      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="container relative z-10 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-accent">
            Наша история
          </h2>
          <Card className="border-4 border-primary/20 bg-white/95">
            <CardContent className="p-8 space-y-6 text-lg leading-relaxed">
              <p>
                <span className="text-3xl float-left mr-4 text-primary font-bold">В</span>
                <strong>2020 году</strong> мы открыли первую точку «Царской Шаурмы» с простой идеей — готовить шаурму так, как будто это блюдо для королевской семьи. Только отборное мясо, свежайшие овощи и авторские соусы по семейным рецептам.
              </p>
              <p>
                За эти годы мы завоевали сердца тысяч гостей. Наш секрет прост: мы не экономим на качестве и готовим каждую шаурму с душой. Мясо маринуется по особой технологии 24 часа, овощи доставляются каждое утро с местных ферм, а лаваш выпекается прямо у нас.
              </p>
              <p>
                <strong>«Царская Шаурма»</strong> — это не просто фастфуд. Это место, куда возвращаются снова и снова, где помнят постоянных гостей и их любимые сочетания. Мы гордимся тем, что стали частью вашей жизни — будь то быстрый обед в офисе или семейный ужин дома.
              </p>
              <div className="flex items-center justify-center gap-8 pt-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">5000+</p>
                  <p className="text-muted-foreground">Довольных гостей</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">4 года</p>
                  <p className="text-muted-foreground">На рынке</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">100%</p>
                  <p className="text-muted-foreground">Качество</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-accent">
            Отзывы наших гостей
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Нам доверяют тысячи людей
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="border-2 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="h-5 w-5 text-primary fill-primary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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

      <a
        href="https://wa.me/79991234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Заказать через WhatsApp"
      >
        <svg
          className="w-10 h-10 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

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