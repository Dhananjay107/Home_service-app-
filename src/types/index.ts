export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ServiceCategory;
  duration: number;
  rating: number;
  reviewCount: number;
}

export type ServiceCategory = 'cleaning' | 'laundry' | 'dishwashing' | 'other';

export interface Booking {
  id: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  status: BookingStatus;
  address: string;
  specialInstructions?: string;
  price: number;
}

export type BookingStatus = 'scheduled' | 'in-progress' | 'completed' | 'cancelled';

export interface Provider {
  id: string;
  name: string;
  photo: string;
  rating: number;
  reviewCount: number;
  skills: ServiceCategory[];
  experience: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
  bookings: Booking[];
}

export interface Address {
  id: string;
  title: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
}