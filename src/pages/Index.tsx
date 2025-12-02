import { Phone, Clock, Shield, Wrench, Flame, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const phoneNumber = '89895091825';
  const displayPhone = '8 (989) 509-18-25';

  const services = [
    {
      icon: 'Wrench',
      title: 'Установка газового оборудования',
      description: 'Профессиональный монтаж газовых плит, котлов и колонок'
    },
    {
      icon: 'Shield',
      title: 'Техническое обслуживание',
      description: 'Регулярное ТО и диагностика газового оборудования'
    },
    {
      icon: 'Flame',
      title: 'Ремонт и настройка',
      description: 'Устранение неисправностей и настройка горелок'
    }
  ];

  const advantages = [
    'Лицензированные специалисты',
    'Выезд в течение часа',
    'Гарантия на все работы',
    'Работаем без выходных'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-blue-600 text-white py-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Flame" size={32} className="text-orange-300" />
            <h1 className="text-2xl font-bold">Газовая Служба</h1>
          </div>
          <a href={`tel:${phoneNumber}`} className="hover:opacity-80 transition">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Icon name="Phone" size={24} />
              <span className="hidden sm:inline">{displayPhone}</span>
            </div>
          </a>
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Профессиональные услуги газовой службы
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Установка, обслуживание и ремонт газового оборудования
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6"
                onClick={() => window.location.href = `tel:${phoneNumber}`}
              >
                <Icon name="Phone" size={24} className="mr-2" />
                Позвонить сейчас
              </Button>
              <div className="flex items-center gap-2 text-lg">
                <Icon name="Clock" size={20} />
                <span>Круглосуточно</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Наши услуги</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-blue-100 hover:scale-105"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Почему выбирают нас</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <div className="flex-shrink-0">
                    <Icon name="CheckCircle" size={28} className="text-green-500" />
                  </div>
                  <span className="text-lg text-gray-800">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Нужна помощь с газовым оборудованием?
          </h3>
          <p className="text-xl mb-8 text-orange-100">
            Звоните прямо сейчас! Мы работаем круглосуточно
          </p>
          <a href={`tel:${phoneNumber}`}>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 text-2xl px-10 py-7 font-bold shadow-lg hover:shadow-xl transition"
            >
              <Icon name="Phone" size={28} className="mr-3" />
              {displayPhone}
            </Button>
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Flame" size={24} className="text-orange-400" />
            <span className="text-xl font-bold text-white">Газовая Служба</span>
          </div>
          <p className="mb-2">Профессиональные услуги по работе с газовым оборудованием</p>
          <p className="text-lg font-semibold text-white">{displayPhone}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
