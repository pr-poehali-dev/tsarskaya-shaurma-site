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
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🐺</div>
          <div>
            <div className="text-xl font-bold leading-none">Husky Premium</div>
            <div className="text-xs text-muted-foreground">Премиум футболки</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#catalog" className="text-sm font-semibold hover:text-primary transition-colors relative group">
            Каталог
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-sm font-semibold hover:text-primary transition-colors relative group">
            О нас
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#delivery" className="text-sm font-semibold hover:text-primary transition-colors relative group">
            Доставка
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-sm font-semibold hover:text-primary transition-colors relative group">
            Контакты
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button 
            variant="default" 
            size="icon" 
            className="relative h-11 w-11 shadow-md"
            onClick={onCartClick}
          >
            <Icon name="ShoppingBag" size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-scale-in">
                {cartCount}
              </span>
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-11 w-11"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-xl">
          <nav className="container flex flex-col gap-1 py-4">
            <a href="#catalog" className="text-sm font-semibold hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-secondary">
              Каталог
            </a>
            <a href="#about" className="text-sm font-semibold hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-secondary">
              О нас
            </a>
            <a href="#delivery" className="text-sm font-semibold hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-secondary">
              Доставка
            </a>
            <a href="#contact" className="text-sm font-semibold hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-secondary">
              Контакты
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}