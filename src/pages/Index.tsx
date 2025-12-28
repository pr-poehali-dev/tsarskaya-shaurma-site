import Icon from '@/components/ui/icon';

export default function Index() {
  const toys = [
    {
      id: 1,
      name: "Мишка в платьице",
      price: "3 500 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/b3ffddef-7196-4537-acc3-5443d1304fbe.jpg",
      description: "Деревянный медвежонок в текстильном платье, расписанный вручную"
    },
    {
      id: 2,
      name: "Лошадка-качалка",
      price: "8 900 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/5cfae7c1-011f-4599-aff1-6d11a0d8ef98.jpg",
      description: "Классическая качалка из массива, окрашенная природными красками"
    },
    {
      id: 3,
      name: "Кукла в народном костюме",
      price: "4 200 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/93b7a87d-a421-4ed9-9d6b-e5749afd28e1.jpg",
      description: "Тряпичная кукла с вышивкой в традициях русского промысла"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <header className="bg-[#8b7355] text-[#f5f1e8] py-6 shadow-lg border-b-4 border-[#5d4a3a]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3">
            <Icon name="Sparkles" size={36} className="text-[#d4af37]" />
            <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide">
              Авторские Игрушки
            </h1>
          </div>
          <p className="text-center mt-2 text-[#d4c5b0] italic text-sm">
            По дореволюционным традициям
          </p>
        </div>
      </header>

      <section className="relative py-20 bg-gradient-to-b from-[#d4c5b0] to-[#f5f1e8] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{backgroundImage: 'repeating-linear-gradient(45deg, #8b7355 0px, #8b7355 2px, transparent 2px, transparent 10px)'}}>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#3d2f1f]">
              Живое наследие ремесленников
            </h2>
            <p className="text-xl text-[#5d4a3a] leading-relaxed mb-8 font-serif">
              Каждая игрушка создаётся вручную по технологиям XIX века: 
              резьба по дереву, роспись натуральными красками, шитьё из льна и хлопка
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-[#5d4a3a]">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} className="text-[#8b7355]" />
                <span className="font-serif">Натуральные материалы</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} className="text-[#8b7355]" />
                <span className="font-serif">Ручная работа</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} className="text-[#8b7355]" />
                <span className="font-serif">Старинные техники</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f1e8]">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-serif font-bold text-center mb-16 text-[#3d2f1f]">
            Коллекция игрушек
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {toys.map((toy) => (
              <div 
                key={toy.id}
                className="bg-white rounded-lg overflow-hidden shadow-xl border-4 border-[#d4c5b0] hover:border-[#8b7355] transition-all hover:scale-105"
              >
                <div className="aspect-square overflow-hidden bg-[#f5f1e8]">
                  <img 
                    src={toy.image} 
                    alt={toy.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-[#f5f1e8]">
                  <h4 className="text-2xl font-serif font-bold mb-3 text-[#3d2f1f]">
                    {toy.name}
                  </h4>
                  <p className="text-[#5d4a3a] mb-4 leading-relaxed">
                    {toy.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#8b7355] font-serif">
                      {toy.price}
                    </span>
                    <Icon name="Heart" size={24} className="text-[#d4af37]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#8b7355] to-[#5d4a3a] text-[#f5f1e8]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-serif font-bold text-center mb-12">
              Традиции мастерства
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-[#f5f1e8] rounded-lg text-[#3d2f1f]">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#8b7355] rounded-full flex items-center justify-center">
                  <Icon name="Trees" size={32} className="text-[#f5f1e8]" />
                </div>
                <h4 className="text-xl font-serif font-bold mb-3">Массив дерева</h4>
                <p className="text-[#5d4a3a]">
                  Липа, берёза, сосна — только натуральные породы
                </p>
              </div>
              <div className="text-center p-8 bg-[#f5f1e8] rounded-lg text-[#3d2f1f]">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#8b7355] rounded-full flex items-center justify-center">
                  <Icon name="Paintbrush" size={32} className="text-[#f5f1e8]" />
                </div>
                <h4 className="text-xl font-serif font-bold mb-3">Природные краски</h4>
                <p className="text-[#5d4a3a]">
                  Минеральные пигменты и растительные красители
                </p>
              </div>
              <div className="text-center p-8 bg-[#f5f1e8] rounded-lg text-[#3d2f1f]">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#8b7355] rounded-full flex items-center justify-center">
                  <Icon name="Hand" size={32} className="text-[#f5f1e8]" />
                </div>
                <h4 className="text-xl font-serif font-bold mb-3">Ручная работа</h4>
                <p className="text-[#5d4a3a]">
                  Каждая игрушка уникальна, как в старину
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#d4c5b0]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Icon name="Mail" size={48} className="mx-auto mb-6 text-[#8b7355]" />
            <h3 className="text-4xl font-serif font-bold mb-6 text-[#3d2f1f]">
              Заказ игрушек
            </h3>
            <p className="text-xl text-[#5d4a3a] mb-8 leading-relaxed">
              Каждая игрушка создаётся индивидуально под заказ. 
              Срок изготовления — от 2 до 4 недель в зависимости от сложности
            </p>
            <div className="bg-white p-8 rounded-lg shadow-xl border-4 border-[#8b7355] inline-block">
              <p className="text-lg text-[#5d4a3a] mb-4 font-serif">
                Для заказа свяжитесь с мастером:
              </p>
              <a 
                href="mailto:toys@example.ru"
                className="inline-flex items-center gap-3 bg-[#8b7355] text-[#f5f1e8] px-8 py-4 rounded-lg text-xl font-serif font-bold hover:bg-[#5d4a3a] transition-colors"
              >
                <Icon name="Mail" size={24} />
                toys@example.ru
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#3d2f1f] text-[#d4c5b0] py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" size={28} className="text-[#d4af37]" />
            <span className="text-2xl font-serif font-bold text-[#f5f1e8]">
              Авторские Игрушки
            </span>
          </div>
          <p className="mb-2 font-serif italic">
            Живые традиции дореволюционного мастерства
          </p>
          <p className="text-[#8b7355]">
            Каждая игрушка хранит тепло рук мастера
          </p>
        </div>
      </footer>
    </div>
  );
}
