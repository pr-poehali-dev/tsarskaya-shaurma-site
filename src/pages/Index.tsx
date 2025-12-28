import Icon from '@/components/ui/icon';

export default function Index() {
  const toys = [
    {
      id: 1,
      name: "Медвежонок в платье",
      price: "3 500 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/b3ffddef-7196-4537-acc3-5443d1304fbe.jpg",
      description: "Деревянный мишка с текстильным нарядом, роспись вручную"
    },
    {
      id: 2,
      name: "Лошадка-качалка",
      price: "8 900 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/5cfae7c1-011f-4599-aff1-6d11a0d8ef98.jpg",
      description: "Классическая качалка из массива дерева"
    },
    {
      id: 3,
      name: "Кукла в народном костюме",
      price: "4 200 ₽",
      image: "https://cdn.poehali.dev/projects/e90906d7-b9fe-4eb5-9ad3-bc94366fa418/files/93b7a87d-a421-4ed9-9d6b-e5749afd28e1.jpg",
      description: "Текстильная кукла с вышивкой ручной работы"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-neutral-950 to-rose-950/10"></div>
      
      <header className="relative border-b border-amber-900/20 backdrop-blur-xl bg-neutral-950/90">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/50">
              <Icon name="Sparkles" size={24} className="text-neutral-950" />
            </div>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-light tracking-[0.2em] text-amber-50">
                СТУДИЯ
              </h1>
              <p className="text-2xl md:text-3xl font-serif italic text-amber-400 mt-1">
                Оксаны Михайловой
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-amber-500/10 to-rose-500/10 rounded-full border border-amber-500/20 mb-8 backdrop-blur-sm">
              <span className="text-sm tracking-[0.2em] text-amber-400 font-light">АВТОРСКАЯ КОЛЛЕКЦИЯ</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-light mb-6 text-amber-50 leading-tight">
              Эксклюзивные игрушки<br/>
              <span className="font-serif italic text-amber-400">ручной работы</span>
            </h2>
            
            <p className="text-xl text-neutral-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              Каждое изделие создаётся по старинным технологиям с использованием 
              натуральных материалов и отражает многолетний опыт мастера
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-500/30 flex items-center justify-center">
                  <Icon name="Award" size={18} className="text-amber-400" />
                </div>
                <span className="text-neutral-400 tracking-wide">Премиум качество</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-500/30 flex items-center justify-center">
                  <Icon name="Hand" size={18} className="text-amber-400" />
                </div>
                <span className="text-neutral-400 tracking-wide">Ручная работа</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-500/30 flex items-center justify-center">
                  <Icon name="Gem" size={18} className="text-amber-400" />
                </div>
                <span className="text-neutral-400 tracking-wide">Лимитированные серии</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-transparent to-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-amber-50 tracking-wide mb-4">
              Коллекция
            </h3>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {toys.map((toy) => (
              <div 
                key={toy.id}
                className="group relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-neutral-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-neutral-800 group-hover:border-amber-900/50 transition-all duration-500">
                  <div className="aspect-square overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10"></div>
                    <img 
                      src={toy.image} 
                      alt={toy.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-2xl font-light text-amber-50 mb-3 tracking-wide">
                      {toy.name}
                    </h4>
                    <p className="text-neutral-400 mb-6 leading-relaxed text-sm">
                      {toy.description}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-neutral-800">
                      <span className="text-2xl font-light text-amber-400 tracking-wider">
                        {toy.price}
                      </span>
                      <Icon name="ArrowRight" size={20} className="text-amber-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-neutral-900/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-light text-amber-50 tracking-wide mb-4">
                Философия мастерства
              </h3>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-neutral-900/30 backdrop-blur-sm rounded-xl border border-neutral-800 hover:border-amber-900/50 transition-all">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-500/30 flex items-center justify-center">
                  <Icon name="Trees" size={28} className="text-amber-400" />
                </div>
                <h4 className="text-xl font-light mb-3 text-amber-50 tracking-wide">Натуральность</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Массив дерева, натуральные ткани и экологичные красители
                </p>
              </div>
              
              <div className="text-center p-8 bg-neutral-900/30 backdrop-blur-sm rounded-xl border border-neutral-800 hover:border-amber-900/50 transition-all">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-500/30 flex items-center justify-center">
                  <Icon name="Paintbrush" size={28} className="text-amber-400" />
                </div>
                <h4 className="text-xl font-light mb-3 text-amber-50 tracking-wide">Мастерство</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Старинные техники и многолетний опыт в каждой детали
                </p>
              </div>
              
              <div className="text-center p-8 bg-neutral-900/30 backdrop-blur-sm rounded-xl border border-neutral-800 hover:border-amber-900/50 transition-all">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-500/30 flex items-center justify-center">
                  <Icon name="Crown" size={28} className="text-amber-400" />
                </div>
                <h4 className="text-xl font-light mb-3 text-amber-50 tracking-wide">Эксклюзивность</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Каждая игрушка уникальна и существует в единственном экземпляре
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-transparent to-neutral-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block p-1 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full mb-8">
              <div className="bg-neutral-950 rounded-full px-6 py-2">
                <span className="text-sm tracking-[0.2em] text-amber-400">ИНДИВИДУАЛЬНЫЙ ЗАКАЗ</span>
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-light mb-6 text-amber-50 tracking-wide">
              Создание на заказ
            </h3>
            
            <p className="text-xl text-neutral-300 mb-12 leading-relaxed">
              Принимаю индивидуальные заказы. Срок создания изделия — 
              от 2 до 4 недель в зависимости от сложности работы
            </p>
            
            <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl p-10 rounded-2xl border border-neutral-800 inline-block">
              <p className="text-neutral-400 mb-6 tracking-wide">
                Для обсуждения проекта:
              </p>
              <a 
                href="mailto:oksana@studio.ru"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-500 text-neutral-950 px-8 py-4 rounded-lg text-lg font-medium hover:from-amber-500 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
              >
                <Icon name="Mail" size={20} />
                oksana@studio.ru
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-neutral-800 bg-neutral-950/90 backdrop-blur-xl py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30">
              <Icon name="Sparkles" size={18} className="text-neutral-950" />
            </div>
            <div>
              <p className="text-sm tracking-[0.2em] text-neutral-400">СТУДИЯ</p>
              <p className="text-lg font-serif italic text-amber-400">Оксаны Михайловой</p>
            </div>
          </div>
          <p className="text-neutral-500 text-sm mt-6">
            Авторские игрушки премиум-класса
          </p>
        </div>
      </footer>
    </div>
  );
}
