
import React from 'react';

interface HeroProps {
  onBookClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                Найкращий догляд за вашим авто
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
                Ваше авто заслуговує на <span className="text-blue-600">преміум</span> блиск
              </h1>
              <p className="mt-6 text-xl text-slate-600 max-w-xl leading-relaxed">
                Професійне миття, детейлінг та догляд за салоном з використанням передових технологій та еко-хімії.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBookClick}
                className="px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 transition-all hover:scale-105 active:scale-95"
              >
                Записатися Онлайн
              </button>
              <a 
                href="#services"
                className="px-8 py-4 bg-white text-slate-900 text-lg font-bold rounded-2xl shadow-sm border border-slate-200 hover:border-blue-300 hover:bg-slate-50 transition-all text-center"
              >
                Наші Послуги
              </a>
            </div>

            <div className="flex items-center space-x-6 text-slate-500">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://picsum.photos/id/${100+i}/40/40`} alt="user" />
                ))}
              </div>
              <p className="text-sm font-medium">
                <span className="text-slate-900 font-bold">1200+</span> задоволених клієнтів за останній місяць
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in zoom-in duration-1000 delay-200">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2071&auto=format&fit=crop" 
                alt="Premium Car Wash" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white p-6 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold opacity-80 uppercase tracking-wider">Результат</span>
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-lg font-medium italic">"Найкраща мийка в місті. Авто як нове після кожного візиту!"</p>
              </div>
            </div>
            {/* Stats Floater */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-4 border border-slate-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Гарантія</p>
                <p className="text-sm font-bold text-slate-900">100% Результат</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
