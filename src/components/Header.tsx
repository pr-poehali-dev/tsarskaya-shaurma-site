import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
  );
}