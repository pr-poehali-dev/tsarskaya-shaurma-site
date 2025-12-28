import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">🐺</div>
              <span className="text-lg font-bold">Husky Premium</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Премиум футболки с дизайнами Хаски для истинных ценителей породы
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <nav className="flex flex-col gap-2">
              <a href="#catalog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Каталог
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                О нас
              </a>
              <a href="#delivery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Доставка
              </a>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@huskypremium.ru" className="hover:text-primary transition-colors">
                  info@huskypremium.ru
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+79999999999" className="hover:text-primary transition-colors">
                  +7 (999) 999-99-99
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Husky Premium. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
