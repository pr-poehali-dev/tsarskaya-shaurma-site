import Icon from '@/components/ui/icon';

export default function Index() {
  const toys = [
    {
      id: 1,
      name: "Мишка в платьице",
      price: "3 500 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/b3ffddef-7196-4537-acc3-5443d1304fbe.jpg",
      description: "Деревянный медвежонок в текстильном платье, расписанный вручную",
      color: "bg-pink-400"
    },
    {
      id: 2,
      name: "Лошадка-качалка",
      price: "8 900 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/5cfae7c1-011f-4599-aff1-6d11a0d8ef98.jpg",
      description: "Классическая качалка из массива, окрашенная природными красками",
      color: "bg-yellow-400"
    },
    {
      id: 3,
      name: "Кукла в народном костюме",
      price: "4 200 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/93b7a87d-a421-4ed9-9d6b-e5749afd28e1.jpg",
      description: "Тряпичная кукла с вышивкой в традициях русского промысла",
      color: "bg-purple-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-yellow-300 rounded-full blur-3xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-44 h-44 bg-purple-300 rounded-full blur-3xl opacity-40 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <header className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white py-8 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 animate-bounce" style={{animationDuration: '2s'}}>
            <div className="text-5xl">🎨</div>
            <h1 className="text-4xl md:text-5xl font-black tracking-wide drop-shadow-lg">
              Волшебные Игрушки
            </h1>
            <div className="text-5xl">✨</div>
          </div>
          <p className="text-center mt-3 text-pink-100 font-bold text-lg">
            Создаём сказку своими руками!
          </p>
        </div>
      </header>

      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-4 border-pink-300">
            <div className="text-6xl mb-6">🌈</div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Каждая игрушка — это чудо!
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed mb-8 font-bold">
              Мы создаём игрушки с любовью и волшебством ✨ 
              Каждая деталь сделана вручную специально для вашего малыша!
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="bg-pink-200 px-6 py-3 rounded-full font-bold text-pink-800 shadow-lg">
                🌟 Ручная работа
              </div>
              <div className="bg-blue-200 px-6 py-3 rounded-full font-bold text-blue-800 shadow-lg">
                🎨 Яркие цвета
              </div>
              <div className="bg-yellow-200 px-6 py-3 rounded-full font-bold text-yellow-800 shadow-lg">
                💖 С любовью
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🎪</div>
            <h3 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Наши друзья
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {toys.map((toy, index) => (
              <div 
                key={toy.id}
                className="group relative"
              >
                <div className={`absolute -inset-1 ${toy.color} rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500`}></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-pink-100 to-blue-100">
                    <img 
                      src={toy.image} 
                      alt={toy.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-2xl font-black text-gray-800">
                        {toy.name}
                      </h4>
                      <div className="text-3xl animate-bounce" style={{animationDuration: '1.5s', animationDelay: `${index * 0.2}s`}}>
                        {index === 0 ? '🧸' : index === 1 ? '🎠' : '👧'}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 font-semibold leading-relaxed">
                      {toy.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        {toy.price}
                      </span>
                      <div className="text-3xl transform group-hover:scale-125 transition-transform">
                        ❤️
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-5xl font-black text-white drop-shadow-lg">
                Почему дети нас обожают?
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-3xl shadow-2xl transform hover:scale-105 transition-all">
                <div className="text-6xl mb-4">🌲</div>
                <h4 className="text-2xl font-black mb-3 text-gray-800">Натурально</h4>
                <p className="text-gray-600 font-bold text-lg">
                  Только дерево, ткань и безопасные краски!
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-3xl shadow-2xl transform hover:scale-105 transition-all">
                <div className="text-6xl mb-4">🎨</div>
                <h4 className="text-2xl font-black mb-3 text-gray-800">Красочно</h4>
                <p className="text-gray-600 font-bold text-lg">
                  Яркие цвета радуют глаз и поднимают настроение!
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-3xl shadow-2xl transform hover:scale-105 transition-all">
                <div className="text-6xl mb-4">✨</div>
                <h4 className="text-2xl font-black mb-3 text-gray-800">Уникально</h4>
                <p className="text-gray-600 font-bold text-lg">
                  Каждая игрушка — особенная и неповторимая!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-blue-100 to-pink-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-7xl mb-6 animate-bounce">📧</div>
            <h3 className="text-5xl font-black mb-6 bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
              Хочешь заказать?
            </h3>
            <p className="text-2xl text-gray-700 mb-10 font-bold leading-relaxed">
              Мы создадим игрушку специально для твоего малыша! 
              Это займёт 2-4 недели волшебства ✨
            </p>
            <div className="bg-white p-10 rounded-3xl shadow-2xl inline-block border-4 border-pink-300">
              <p className="text-xl text-gray-700 mb-6 font-bold">
                Напиши нам прямо сейчас:
              </p>
              <a 
                href="mailto:toys@example.ru"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-10 py-5 rounded-2xl text-2xl font-black hover:scale-110 transition-all shadow-xl"
              >
                <Icon name="Mail" size={32} />
                toys@example.ru
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-4xl">✨</div>
            <span className="text-3xl font-black drop-shadow-lg">
              Волшебные Игрушки
            </span>
            <div className="text-4xl">🎨</div>
          </div>
          <p className="text-xl font-bold mb-2">
            Создаём радость для детей с 2020 года
          </p>
          <p className="text-lg text-pink-100">
            Каждая игрушка сделана с любовью и волшебством 💖
          </p>
        </div>
      </footer>
    </div>
  );
}
