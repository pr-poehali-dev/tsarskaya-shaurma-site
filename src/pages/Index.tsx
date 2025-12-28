import Icon from '@/components/ui/icon';

export default function Index() {
  const toys = [
    {
      id: 1,
      name: "Медвежонок в платье",
      price: "3 500 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/b3ffddef-7196-4537-acc3-5443d1304fbe.jpg",
      description: "Деревянный мишка с текстильным нарядом, роспись вручную",
      badge: "🧸"
    },
    {
      id: 2,
      name: "Лошадка-качалка",
      price: "8 900 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/5cfae7c1-011f-4599-aff1-6d11a0d8ef98.jpg",
      description: "Классическая качалка из массива дерева",
      badge: "🎠"
    },
    {
      id: 3,
      name: "Кукла в народном костюме",
      price: "4 200 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/93b7a87d-a421-4ed9-9d6b-e5749afd28e1.jpg",
      description: "Текстильная кукла с вышивкой ручной работы",
      badge: "🎀"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-yellow-300/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-purple-300/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <header className="relative bg-white/80 backdrop-blur-md shadow-lg border-b-4 border-pink-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <div className="text-4xl animate-bounce" style={{animationDuration: '1.5s'}}>🎈</div>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-black text-pink-600">
                Волшебные Игрушки
              </h1>
              <p className="text-sm text-purple-600 font-semibold mt-1">
                Ручная работа с любовью
              </p>
            </div>
            <div className="text-4xl animate-bounce" style={{animationDuration: '1.5s', animationDelay: '0.3s'}}>🎨</div>
          </div>
        </div>
      </header>

      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border-2 border-pink-200">
              <div className="flex justify-center gap-2 mb-6">
                <span className="text-4xl animate-bounce" style={{animationDelay: '0s'}}>✨</span>
                <span className="text-4xl animate-bounce" style={{animationDelay: '0.2s'}}>🌈</span>
                <span className="text-4xl animate-bounce" style={{animationDelay: '0.4s'}}>⭐</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Игрушки, которые дарят радость!
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Каждая игрушка сделана вручную из натуральных материалов. 
                Мы создаём не просто игрушки — мы создаём друзей для ваших детей! 💖
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-gradient-to-r from-pink-100 to-pink-200 px-6 py-3 rounded-full shadow-md">
                  <span className="text-pink-800 font-bold">🌟 Ручная работа</span>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-3 rounded-full shadow-md">
                  <span className="text-blue-800 font-bold">🎨 Яркие цвета</span>
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-purple-200 px-6 py-3 rounded-full shadow-md">
                  <span className="text-purple-800 font-bold">💚 Безопасно</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-2 mb-4">
              <span className="text-5xl">🎪</span>
            </div>
            <h3 className="text-4xl font-black text-purple-700 mb-2">
              Наши друзья
            </h3>
            <p className="text-gray-600 text-lg">Выбирай своего любимца!</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {toys.map((toy) => (
              <div 
                key={toy.id}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1 border-2 border-pink-100">
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
                    <div className="absolute top-4 right-4 z-10 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-3xl animate-bounce" style={{animationDuration: '2s'}}>
                      {toy.badge}
                    </div>
                    <img 
                      src={toy.image} 
                      alt={toy.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-2xl font-black text-gray-800 mb-2">
                      {toy.name}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {toy.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t-2 border-pink-100">
                      <span className="text-3xl font-black text-pink-600">
                        {toy.price}
                      </span>
                      <div className="flex gap-1">
                        <span className="text-2xl">❤️</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-4xl font-black text-purple-800">
                Почему выбирают нас?
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
                <div className="text-5xl mb-4">🌲</div>
                <h4 className="text-2xl font-bold mb-3 text-gray-800">Натурально</h4>
                <p className="text-gray-600">
                  Дерево, ткань и безопасные краски. Никакого пластика!
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
                <div className="text-5xl mb-4">✋</div>
                <h4 className="text-2xl font-bold mb-3 text-gray-800">Вручную</h4>
                <p className="text-gray-600">
                  Каждая игрушка создаётся с душой и заботой о детях
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all">
                <div className="text-5xl mb-4">🎨</div>
                <h4 className="text-2xl font-bold mb-3 text-gray-800">Уникально</h4>
                <p className="text-gray-600">
                  Нет двух одинаковых игрушек — каждая особенная!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl mb-6 animate-bounce" style={{animationDuration: '2s'}}>
              📬
            </div>
            
            <h3 className="text-4xl font-black mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Хочешь заказать?
            </h3>
            
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Напиши нам! Мы создадим игрушку специально для твоего малыша 
              за 2-4 недели 💌
            </p>
            
            <div className="bg-white rounded-3xl p-10 shadow-2xl inline-block border-4 border-pink-200">
              <p className="text-gray-700 mb-6 font-semibold text-lg">
                Свяжись с нами:
              </p>
              <a 
                href="mailto:toys@example.ru"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-2xl text-xl font-bold hover:from-pink-600 hover:to-purple-600 hover:scale-105 transition-all shadow-lg"
              >
                <Icon name="Mail" size={24} />
                toys@example.ru
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-white/80 backdrop-blur-md border-t-4 border-pink-200 py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl">🎈</span>
            <div>
              <p className="text-2xl font-black text-pink-600">Волшебные Игрушки</p>
              <p className="text-sm text-purple-600 font-semibold">Создаём радость с 2020 года</p>
            </div>
            <span className="text-3xl">🎨</span>
          </div>
          <p className="text-gray-600 mt-4">
            Каждая игрушка — это маленькое чудо 💖
          </p>
        </div>
      </footer>
    </div>
  );
}
