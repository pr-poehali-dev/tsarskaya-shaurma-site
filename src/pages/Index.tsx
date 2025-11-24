import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard, { Product } from "@/components/ProductCard";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

interface CartItem extends Product {
  quantity: number;
}

export default function Index() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const products: Product[] = [
    {
      id: 1,
      name: "Bass Pro Elite",
      price: 8000,
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/eab48e5a-5997-47f6-9088-9b2323c3198b.jpg",
      description: "Флагманская модель с активным шумоподавлением и Hi-Res звуком",
      features: ["ANC Pro", "Hi-Res Audio", "Быстрая зарядка"],
      images: [
        "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/eab48e5a-5997-47f6-9088-9b2323c3198b.jpg"
      ]
    },
    {
      id: 2,
      name: "Urban Sound X",
      price: 5500,
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/ba458daf-8396-48f9-8684-1b2b6ad4bddb.jpg",
      description: "Стильные городские наушники с отличной звукоизоляцией",
      features: ["Басс усиление", "30 часов работы", "Складная конструкция"]
    },
    {
      id: 3,
      name: "Sport Wave",
      price: 4200,
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/31dd7501-2f9f-487f-921b-cee4f505716e.jpg",
      description: "Водонепроницаемые наушники для спорта и активного отдыха",
      features: ["IPX7", "Крепление на ухо", "Управление жестами"]
    },
    {
      id: 4,
      name: "Studio Pro Max",
      price: 12000,
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/f854138f-f0dd-45c9-8125-ebbd35713804.jpg",
      description: "Профессиональные студийные наушники для записи",
      features: ["Студийное качество", "Съёмный кабель", "Мягкие амбушюры"]
    },
    {
      id: 5,
      name: "Travel Comfort",
      price: 6800,
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/e4511dc7-ef14-4032-83e7-d2920238be09.jpg",
      description: "Идеальны для путешествий с функцией шумоподавления",
      features: ["ANC", "Компактный чехол", "35 часов автономности"]
    },
    {
      id: 6,
      name: "Gaming Force",
      price: 7500,
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/438d448d-fac4-447b-8d56-4406c6d4ad9b.jpg",
      description: "Игровые наушники с объёмным 7.1 звуком",
      features: ["7.1 Surround", "RGB подсветка", "Микрофон с шумоподавлением"]
    },
    {
      id: 7,
      name: "Classic Vibe",
      price: 3500,
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/b3c760c7-9dcb-4067-8968-e2f71a1642dd.jpg",
      description: "Классический дизайн с современным звучанием",
      features: ["Ретро стиль", "Качественный звук", "Лёгкий вес"]
    },
    {
      id: 8,
      name: "Office Zoom",
      price: 4800,
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/835e5627-2500-4018-88f6-f021267a9b8f.jpg",
      description: "Для удаленной работы и видеоконференций",
      features: ["Чистый микрофон", "Шумоподавление голоса", "Multipoint"]
    },
    {
      id: 9,
      name: "Kids Safe",
      price: 2900,
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/99cc934f-eb7b-4352-8ace-6dfafb627266.jpg",
      description: "Безопасные детские наушники с ограничением громкости",
      features: ["Ограничение 85 дБ", "Яркий дизайн", "Прочная конструкция"]
    },
    {
      id: 10,
      name: "Budget Beat",
      price: 1990,
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/d2efbc6c-f644-42e8-ab6f-57f5dc01f26a.jpg",
      description: "Доступная модель с хорошим качеством звука",
      features: ["Отличная цена", "20 часов работы", "Bluetooth 5.0"]
    },
    {
      id: 11,
      name: "Wireless Freedom",
      price: 9200,
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/e47bd946-8ea5-4bf2-8ba0-26e5f21034bb.jpg",
      description: "Полная свобода движений с premium звуком",
      features: ["ANC Hybrid", "50 часов работы", "Сенсорное управление"]
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
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
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

        <section id="products" className="py-24 bg-white">
          <div className="container">
            <div className="mb-16 space-y-4 text-center">
              <h2 className="text-5xl md:text-6xl font-bold">Наша коллекция</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Профессиональные беспроводные наушники для любых задач
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
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

        <section id="features" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">Технологии</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-white rounded-2xl space-y-4 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-2xl text-primary-foreground font-bold">A</span>
                  </div>
                  <h3 className="text-2xl font-bold">Active ANC</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Адаптивное активное шумоподавление блокирует до 99% внешних шумов
                  </p>
                </div>
                <div className="p-8 bg-white rounded-2xl space-y-4 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-2xl text-primary-foreground font-bold">H</span>
                  </div>
                  <h3 className="text-2xl font-bold">Hi-Res Audio</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Сертифицированное студийное качество звука с поддержкой LDAC и aptX HD
                  </p>
                </div>
                <div className="p-8 bg-white rounded-2xl space-y-4 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-2xl text-primary-foreground font-bold">B</span>
                  </div>
                  <h3 className="text-2xl font-bold">40h Battery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    До 40 часов непрерывной работы. Быстрая зарядка: 10 мин = 5 часов
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-white">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-bold">О бренде</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Bass Pro — российский бренд профессиональных аудиоустройств, основанный в 2024 году.
                  </p>
                  <p>
                    Мы создаём беспроводные наушники премиум-класса с фокусом на качество звука, 
                    технологичность и комфорт использования.
                  </p>
                  <p>
                    Каждая модель проходит тестирование профессиональными звукорежиссёрами 
                    и аудиофилами перед выходом на рынок.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl space-y-2">
                  <div className="text-4xl font-bold">2024</div>
                  <div className="text-sm text-muted-foreground">Год основания</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl space-y-2">
                  <div className="text-4xl font-bold">11</div>
                  <div className="text-sm text-muted-foreground">Моделей</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl space-y-2">
                  <div className="text-4xl font-bold">99%</div>
                  <div className="text-sm text-muted-foreground">ANC эффективность</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl space-y-2">
                  <div className="text-4xl font-bold">40h</div>
                  <div className="text-sm text-muted-foreground">Автономность</div>
                </div>
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