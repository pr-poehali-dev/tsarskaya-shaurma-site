import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-2 border-black">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tighter">
            HUSKY<span className="text-gray-400">®</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#catalog" className="text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">
            Каталог
          </a>
          <a href="#about" className="text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">
            О нас
          </a>
          <a href="#delivery" className="text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">
            Доставка
          </a>
          <a href="#contact" className="text-xs font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">
            Контакты
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative hover:bg-black hover:text-white transition-colors"
            onClick={onCartClick}
          >
            <Icon name="ShoppingBag" size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-black hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-black bg-white">
          <nav className="container flex flex-col py-4">
            <a href="#catalog" className="text-xs font-bold uppercase tracking-widest py-4 border-b border-gray-200 hover:bg-black hover:text-white transition-colors px-4">
              Каталог
            </a>
            <a href="#about" className="text-xs font-bold uppercase tracking-widest py-4 border-b border-gray-200 hover:bg-black hover:text-white transition-colors px-4">
              О нас
            </a>
            <a href="#delivery" className="text-xs font-bold uppercase tracking-widest py-4 border-b border-gray-200 hover:bg-black hover:text-white transition-colors px-4">
              Доставка
            </a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-widest py-4 hover:bg-black hover:text-white transition-colors px-4">
              Контакты
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
