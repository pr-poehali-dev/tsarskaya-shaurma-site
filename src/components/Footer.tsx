import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-3xl font-bold mb-4">
              HUSKY<span className="text-gray-400">®</span>
            </div>
            <p className="text-sm text-gray-400 font-medium">
              Премиум футболки для ценителей породы
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Навигация</h3>
            <nav className="flex flex-col gap-3">
              <a href="#catalog" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                Каталог
              </a>
              <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                О нас
              </a>
              <a href="#delivery" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                Доставка
              </a>
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Контакты</h3>
            <div className="flex flex-col gap-3 text-sm font-medium text-gray-400">
              <a href="mailto:info@huskypremium.ru" className="hover:text-white transition-colors">
                info@huskypremium.ru
              </a>
              <a href="tel:+79999999999" className="hover:text-white transition-colors">
                +7 (999) 999-99-99
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Соцсети</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 border-2 border-white hover:bg-white hover:text-black flex items-center justify-center transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 border-2 border-white hover:bg-white hover:text-black flex items-center justify-center transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 border-2 border-white hover:bg-white hover:text-black flex items-center justify-center transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            &copy; 2024 Husky Premium. Все права защищены.
          </p>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Политика</a>
            <a href="#" className="hover:text-white transition-colors">Условия</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
