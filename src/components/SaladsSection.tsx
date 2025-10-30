import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function SaladsSection() {
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

  return (
    <section id="salads" className="py-20 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/11e8e724-0785-43db-84c7-662e70f6e9ce.jpg')] bg-cover bg-center opacity-25" />
      <div className="container relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Салаты на любой вкус
          </h2>
          <p className="text-xl text-muted-foreground">
            24 вида свежих салатов для твоей идеальной шаурмы
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {salads.map((salad) => (
            <Card key={salad.id} className="hover:shadow-xl transition-shadow animate-fade-in">
              <CardHeader>
                <CardTitle className="text-lg">{salad.name}</CardTitle>
                <CardDescription>{salad.ingredients}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">{salad.price} сум</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  <Icon name="Plus" className="mr-2 h-4 w-4" />
                  Добавить
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
