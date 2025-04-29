import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, ChevronRight } from 'lucide-react';
import { Service } from '../../types';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, delay = 0 }) => {
  const { id, name, description, price, image, duration, rating, reviewCount } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: delay * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0]  
      }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-primary-500 text-white py-1 px-3 rounded-bl-lg font-medium">
          ${price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Clock size={16} className="mr-1" />
            <span>{duration} hour{duration > 1 ? 's' : ''}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span className="text-gray-700 mr-1">{rating}</span>
            <span className="text-gray-500">({reviewCount})</span>
          </div>
        </div>
        
        <Link 
          to={`/booking?service=${id}`}
          className="block w-full text-center py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 font-medium"
        >
          Book Now
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;