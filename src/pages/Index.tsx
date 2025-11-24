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

        <section id="catalog" className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наша коллекция</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Эксклюзивные дизайны, премиум качество ткани и печати. 
              Каждая футболка создана с любовью к породе Хаски.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

        <section id="about" className="bg-muted/50 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">О нас</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Мы создаем премиум футболки для тех, кто любит Хаски так же сильно, как и мы. 
                Используем только качественные материалы и современные технологии печати.
              </p>
              <p className="text-lg text-muted-foreground">
                Каждый дизайн разработан с вниманием к деталям, чтобы передать характер и красоту этой удивительной породы.
              </p>
            </div>
          </div>
        </section>

        <section id="delivery" className="container py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Доставка и оплата</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Доставка</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ По России: 3-7 дней</li>
                  <li>✓ Бесплатная доставка от 5000 ₽</li>
                  <li>✓ Курьером по Москве: 300 ₽</li>
                  <li>✓ Почта России: 400 ₽</li>
                </ul>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Оплата</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Картой онлайн</li>
                  <li>✓ При получении</li>
                  <li>✓ СБП</li>
                  <li>✓ Безопасная сделка</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-muted/50 py-16">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Напишите нам, и мы с радостью ответим на все ваши вопросы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@huskypremium.ru"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Написать на почту
              </a>
              <a 
                href="tel:+79999999999"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
              >
                Позвонить
              </a>
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
