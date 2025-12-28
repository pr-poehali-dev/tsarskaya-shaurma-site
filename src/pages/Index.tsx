import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard, { Product } from "@/components/ProductCard";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export default function Index() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const products: Product[] = [
    {
      id: 1,
      name: "Classic Husky",
      price: 2490,
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/91ca023f-bf91-4363-91ff-850aae90f4f1.jpg",
      description: "Классический портрет Хаски с пронзительными голубыми глазами",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 2,
      name: "Wild Spirit",
      price: 2690,
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/5380c52b-9db0-424e-9591-a51ba303df96.jpg",
      description: "Динамичный дизайн с Хаски в движении",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 3,
      name: "Geometric Wolf",
      price: 2890,
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/2dcddb21-d191-430e-ba5a-fa239bfc6e22.jpg",
      description: "Минималистичный геометрический дизайн",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 4,
      name: "Northern Legend",
      price: 2590,
      image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?q=80&w=800",
      description: "Легенда севера на премиум футболке",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 5,
      name: "Blue Eyes",
      price: 2490,
      image: "https://images.unsplash.com/photo-1486365227551-f3f90034a57c?q=80&w=800",
      description: "Фокус на знаменитых голубых глазах Хаски",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 6,
      name: "Arctic Soul",
      price: 2790,
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800",
      description: "Душа Арктики в каждой детали",
      sizes: ["S", "M", "L", "XL", "XXL"]
    }
  ];

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1, selectedSize: "M" }]);
    }

    toast({
      title: "Добавлено в корзину",
      description: `${product.name} добавлен в корзину`,
    });
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setCartOpen(true)}
      />
      
      <main className="flex-1">
        <Hero />

        <section id="catalog" className="container py-24">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-bold text-primary">КОЛЛЕКЦИЯ 2024</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">Наши дизайны</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Эксклюзивные дизайны, премиум качество ткани и печати. 
              Каждая футболка создана с любовью к породе Хаски.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

        <section id="about" className="bg-gradient-to-b from-background to-secondary py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">О нас</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-background rounded-2xl shadow-lg">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-bold mb-3">Уникальный дизайн</h3>
                  <p className="text-muted-foreground">
                    Каждый принт разработан профессиональными дизайнерами
                  </p>
                </div>
                <div className="text-center p-8 bg-background rounded-2xl shadow-lg">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-xl font-bold mb-3">Премиум качество</h3>
                  <p className="text-muted-foreground">
                    100% хлопок и современные технологии печати
                  </p>
                </div>
                <div className="text-center p-8 bg-background rounded-2xl shadow-lg">
                  <div className="text-4xl mb-4">❤️</div>
                  <h3 className="text-xl font-bold mb-3">С любовью к породе</h3>
                  <p className="text-muted-foreground">
                    Создано энтузиастами для владельцев Хаски
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="delivery" className="container py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">Доставка и оплата</h2>
              <p className="text-lg text-muted-foreground">Удобные способы доставки и оплаты</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border-2 rounded-2xl hover:border-primary transition-colors bg-secondary/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl">📦</div>
                  <h3 className="text-2xl font-bold">Доставка</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>По России: 3-7 дней</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Бесплатная доставка от 5000 ₽</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Курьером по Москве: 300 ₽</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Почта России: 400 ₽</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 border-2 rounded-2xl hover:border-primary transition-colors bg-secondary/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl">💳</div>
                  <h3 className="text-2xl font-bold">Оплата</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Картой онлайн</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>При получении</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>СБП</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Безопасная сделка</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>
          <div className="container relative text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Остались вопросы?</h2>
              <p className="text-xl text-muted-foreground mb-10">
                Напишите нам, и мы с радостью ответим на все ваши вопросы
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@huskypremium.ru"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                >
                  Написать на почту
                </a>
                <a 
                  href="tel:+79999999999"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Позвонить
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
}