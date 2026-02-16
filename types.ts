
export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
}

export interface BookingData {
  serviceId: string;
  carType: string;
  date: string;
  time: string;
  name: string;
  phone: string;
}

export type CarType = 'sedan' | 'suv' | 'truck' | 'moto';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
