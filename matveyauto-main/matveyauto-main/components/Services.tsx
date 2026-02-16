
import React from 'react';
import { Service } from '../types';

const SERVICES: Service[] = [
  {
    id: 'basic',
    name: 'Експрес Миття',
    description: 'Швидке зовнішнє миття кузова, арок та коліс з подальшим сушінням.',
    price: '250 грн',
    duration: '20 хв',
    icon: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 'complex',
    name: 'Комплекс',
    description: 'Зовнішнє миття + вологе прибирання салону, пилосос та протирання скла.',
    price: '550 грн',
    duration: '50 хв',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    id: 'premium',
    name: 'Преміум Догляд',
    description: 'Комплекс + обробка воском, чорніння гуми та глибока очистка дисків.',
    price: '900 грн',
    duration: '1.5 год',
    icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.856.12-1.685.344-2.468'
  },
  {
    id: 'detailing',
    name: 'Хімчистка',
    description: 'Повне відновлення салону: видалення плям, дезінфекція та озонування.',
    price: 'від 2500 грн',
    duration: '1 день',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Наші Послуги</h2>
          <p className="text-lg text-slate-600">
            Оберіть оптимальний пакет догляду для вашого автомобіля. Ми гарантуємо якість на кожному етапі.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.name}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Вартість</span>
                  <span className="text-lg font-bold text-blue-600">{service.price}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Час</span>
                  <span className="text-sm font-semibold text-slate-600">{service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
