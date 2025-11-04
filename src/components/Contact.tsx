import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Contact() {
  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      link: "tel:+79991234567",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "mishki@example.com",
      link: "mailto:mishki@example.com",
    },
    {
      icon: "Instagram",
      title: "Instagram",
      value: "@milyemishki",
      link: "https://instagram.com",
    },
    {
      icon: "MessageCircle",
      title: "Telegram",
      value: "@milyemishki_bot",
      link: "https://t.me/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-muted-foreground">
            Мы всегда рады ответить на ваши вопросы
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contacts.map((contact, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Icon name={contact.icon} size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">{contact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  variant="link"
                  className="text-muted-foreground hover:text-primary"
                  asChild
                >
                  <a href={contact.link} target="_blank" rel="noopener noreferrer">
                    {contact.value}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="pt-8 pb-6">
              <div className="space-y-4">
                <span className="text-5xl">🎁</span>
                <h3 className="text-2xl font-semibold">Индивидуальный заказ</h3>
                <p className="text-muted-foreground">
                  Хотите уникального мишку по вашему эскизу? Мы воплотим любую идею!
                </p>
                <Button size="lg" className="mt-4">
                  <Icon name="Palette" size={20} className="mr-2" />
                  Обсудить индивидуальный заказ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
