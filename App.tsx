
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar onBookClick={toggleBooking} />
      
      <main className="flex-grow">
        <Hero onBookClick={toggleBooking} />
        <Services />
        <section id="location" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Де ми знаходимося?</h2>
                <p className="text-slate-600 mb-8 text-lg">
                  Ми знаходимося в самому центрі міста, щоб ви могли зручно заїхати до нас по дорозі на роботу або додому. 
                  Сучасне обладнання та професійна хімія гарантують ідеальний результат.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Адреса</h4>
                      <p className="text-slate-500">вул. Автомобільна, 42, Київ, Україна</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Години роботи</h4>
                      <p className="text-slate-500">Пн - Нд: 08:00 - 22:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] bg-slate-200">
                 <img src="https://picsum.photos/id/1071/800/600" alt="Map Placeholder" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <button 
              onClick={toggleBooking}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="max-h-[90vh] overflow-y-auto p-6 md:p-10">
              <h2 className="text-2xl font-bold mb-6 text-center">Забронювати візит</h2>
              <BookingForm onSuccess={() => setIsBookingOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* AI Assistant Chatbot */}
      <AIChat />
    </div>
  );
};

export default App;
