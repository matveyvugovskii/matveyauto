
import React, { useState } from 'react';
import { BookingData, CarType } from '../types';

interface BookingFormProps {
  onSuccess: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<BookingData>({
    serviceId: 'complex',
    carType: 'sedan',
    date: '',
    time: '',
    name: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Запис успішно створено! Ми зателефонуємо вам для підтвердження.');
      setIsSubmitting(false);
      onSuccess();
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Тип автомобіля</label>
          <select 
            name="carType"
            value={formData.carType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            required
          >
            <option value="sedan">Седан</option>
            <option value="suv">Позашляховик / Кросовер</option>
            <option value="truck">Мікроавтобус</option>
            <option value="moto">Мотоцикл</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Оберіть послугу</label>
          <select 
            name="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            required
          >
            <option value="basic">Експрес Миття</option>
            <option value="complex">Комплекс</option>
            <option value="premium">Преміум Догляд</option>
            <option value="detailing">Хімчистка</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Дата</label>
          <input 
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Час</label>
          <input 
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            required
          />
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Ваше ім'я</label>
          <input 
            type="text"
            name="name"
            placeholder="Олександр"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Номер телефону</label>
          <input 
            type="tel"
            name="phone"
            placeholder="+380"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            required
          />
        </div>
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 bg-blue-600 text-white text-lg font-bold rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Обробка...
          </div>
        ) : 'Підтвердити запис'}
      </button>
      <p className="text-center text-xs text-slate-400">
        Натискаючи кнопку, ви погоджуєтеся на обробку персональних даних.
      </p>
    </form>
  );
};

export default BookingForm;
