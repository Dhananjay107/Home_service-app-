import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Regular Home Cleaning',
    description: 'Our standard cleaning service covers all the basics including dusting, vacuuming, mopping, bathroom cleaning, and kitchen cleaning.',
    price: 80,
    image: 'https://images.pexels.com/photos/4353852/pexels-photo-4353852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cleaning',
    duration: 3,
    rating: 4.8,
    reviewCount: 253
  },
  {
    id: '2',
    name: 'Deep Cleaning',
    description: 'A thorough cleaning service that reaches those forgotten spots, including behind appliances, inside cabinets, ceiling fans, and more.',
    price: 180,
    image: 'https://images.pexels.com/photos/4107108/pexels-photo-4107108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cleaning',
    duration: 6,
    rating: 4.9,
    reviewCount: 178
  },
  {
    id: '3',
    name: 'Laundry Service',
    description: 'We\'ll wash, dry, fold and organize your clothes, saving you time on this mundane but necessary task.',
    price: 40,
    image: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'laundry',
    duration: 2,
    rating: 4.7,
    reviewCount: 142
  },
  {
    id: '4',
    name: 'Ironing Service',
    description: 'Professional ironing service to keep your clothes looking sharp and wrinkle-free.',
    price: 35,
    image: 'https://images.pexels.com/photos/4761371/pexels-photo-4761371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'laundry',
    duration: 2,
    rating: 4.6,
    reviewCount: 89
  },
  {
    id: '5',
    name: 'Dishwashing',
    description: 'We\'ll take care of the dishes, including cleaning, sanitizing, and organizing your cookware, dinnerware, and utensils.',
    price: 30,
    image: 'https://images.pexels.com/photos/4108714/pexels-photo-4108714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'dishwashing',
    duration: 1.5,
    rating: 4.8,
    reviewCount: 112
  },
  {
    id: '6',
    name: 'Window Cleaning',
    description: 'Professional window cleaning service for crystal clear windows inside and out.',
    price: 60,
    image: 'https://images.pexels.com/photos/3792580/pexels-photo-3792580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cleaning',
    duration: 3,
    rating: 4.7,
    reviewCount: 93
  },
  {
    id: '7',
    name: 'Commercial Laundry Service',
    description: 'Bulk laundry service for businesses, including restaurants, hotels, and other commercial establishments.',
    price: 120,
    image: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'laundry',
    duration: 4,
    rating: 4.9,
    reviewCount: 45
  },
  {
    id: '8',
    name: 'Post-Construction Cleaning',
    description: 'Specialized cleaning service after renovation or construction work, including dust removal, debris cleanup, and final polishing.',
    price: 250,
    image: 'https://images.pexels.com/photos/4112553/pexels-photo-4112553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'cleaning',
    duration: 8,
    rating: 4.8,
    reviewCount: 62
  },
];

export const getServicesByCategory = (category: string) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};