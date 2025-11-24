import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Bass Pro</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Профессиональные беспроводные наушники премиум-класса
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Продукция</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Наушники</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Аксессуары</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Кейсы</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Поддержка</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Гарантия</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Доставка</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Возврат</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>support@basspro.ru</li>
              <li>+7 (495) 123-45-67</li>
            </ul>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Icon name="Instagram" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Icon name="Youtube" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
                <Icon name="Twitter" size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Bass Pro. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
