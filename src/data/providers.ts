import { Provider } from '../types';

export const providers: Provider[] = [
  {
    id: 'p1',
    name: 'Emily Johnson',
    photo: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    reviewCount: 89,
    skills: ['cleaning', 'laundry', 'dishwashing'],
    experience: 5
  },
  {
    id: 'p2',
    name: 'Michael Rodriguez',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    reviewCount: 76,
    skills: ['cleaning', 'dishwashing'],
    experience: 3
  },
  {
    id: 'p3',
    name: 'Sophia Chen',
    photo: 'https://images.pexels.com/photos/4049672/pexels-photo-4049672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    reviewCount: 42,
    skills: ['cleaning', 'laundry'],
    experience: 4
  },
  {
    id: 'p4',
    name: 'David Wilson',
    photo: 'https://images.pexels.com/photos/9950569/pexels-photo-9950569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    reviewCount: 67,
    skills: ['cleaning', 'dishwashing'],
    experience: 6
  },
  {
    id: 'p5',
    name: 'Olivia Martinez',
    photo: 'https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    reviewCount: 55,
    skills: ['laundry', 'dishwashing'],
    experience: 2
  }
];

export const getProviderById = (id: string): Provider | undefined => {
  return providers.find(provider => provider.id === id);
};

export const getProvidersBySkill = (skill: string): Provider[] => {
  return providers.filter(provider => provider.skills.includes(skill as any));
};