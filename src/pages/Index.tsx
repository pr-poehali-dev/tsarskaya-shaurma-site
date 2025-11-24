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

        <section id="catalog" className="py-24 bg-white">
          <div className="container">
            <div className="mb-20 space-y-2">
              <div className="inline-block border-2 border-black px-4 py-1 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest">КОЛЛЕКЦИЯ 2024</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-bold">НОВАЯ КОЛЛЕКЦИЯ</h2>
              <p className="text-lg font-medium max-w-2xl pt-4">
                Эксклюзивные дизайны. Премиум качество.
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
          </div>
        </section>

        <section id="about" className="py-32 bg-black text-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-bold mb-20">ПОЧЕМУ МЫ?</h2>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-4 border-l-4 border-white pl-6">
                  <h3 className="text-3xl font-bold">ПРЕМИУМ</h3>
                  <p className="text-gray-400 font-medium">
                    100% хлопок. Лучшие ткани от европейских производителей.
                  </p>
                </div>
                <div className="space-y-4 border-l-4 border-white pl-6">
                  <h3 className="text-3xl font-bold">ДИЗАЙН</h3>
                  <p className="text-gray-400 font-medium">
                    Эксклюзивные принты. Созданы профессиональными дизайнерами.
                  </p>
                </div>
                <div className="space-y-4 border-l-4 border-white pl-6">
                  <h3 className="text-3xl font-bold">КАЧЕСТВО</h3>
                  <p className="text-gray-400 font-medium">
                    Современные технологии печати. Стойкость к стирке.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="delivery" className="py-24 bg-white">
          <div className="container max-w-6xl">
            <h2 className="text-6xl md:text-8xl font-bold mb-20">ДОСТАВКА</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-10 border-2 border-black hover:bg-black hover:text-white transition-all group">
                <h3 className="text-3xl font-bold mb-6">ДОСТАВКА</h3>
                <ul className="space-y-4 text-lg font-medium">
                  <li className="flex items-start gap-3">
                    <span className="font-bold">—</span>
                    <span>По России 3-7 дней</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold">—</span>
                    <span>Бесплатно от 5000₽</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold">—</span>
                    <span>Курьер Москва 300₽</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold">—</span>
                    <span>Почта России 400₽</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 border-2 border-black hover:bg-black hover:text-white transition-all group">
                <h3 className="text-3xl font-bold mb-6">ОПЛАТА</h3>
                <ul className="space-y-4 text-lg font-medium">
                  <li className="flex items-start gap-3">
                    <span className="font-bold">—</span>
                    <span>Картой онлайн</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold">—</span>
                    <span>При получении</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold">—</span>
                    <span>СБП</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold">—</span>
                    <span>100% безопасно</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-32 bg-gray-100">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-bold mb-8">КОНТАКТЫ</h2>
              <p className="text-xl font-medium mb-12">
                Есть вопросы? Мы на связи 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@huskypremium.ru"
                  className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  Написать
                </a>
                <a 
                  href="tel:+79999999999"
                  className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest border-2 border-black hover:bg-black hover:text-white transition-colors"
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