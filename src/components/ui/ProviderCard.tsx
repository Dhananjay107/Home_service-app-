import React from 'react';
import { Star, Shield, Check } from 'lucide-react';
import { Provider } from '../../types';
import { motion } from 'framer-motion';

interface ProviderCardProps {
  provider: Provider;
  isSelected?: boolean;
  onSelect?: (provider: Provider) => void;
  delay?: number;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ 
  provider, 
  isSelected = false,
  onSelect,
  delay = 0
}) => {
  const { name, photo, rating, reviewCount, experience, skills } = provider;

  const handleClick = () => {
    if (onSelect) {
      onSelect(provider);
    }
  };

  const skillLabels: Record<string, string> = {
    'cleaning': 'Home Cleaning',
    'laundry': 'Laundry',
    'dishwashing': 'Dishwashing',
    'other': 'Other Services'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay: delay * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0]  
      }}
      whileHover={{ y: -5 }}
      onClick={handleClick}
      className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 cursor-pointer
        ${isSelected ? 'ring-2 ring-primary-500 shadow-md' : 'hover:shadow-md'}`}
    >
      <div className="flex flex-col sm:flex-row p-4 gap-4">
        <div className="flex-shrink-0">
          <img 
            src={photo} 
            alt={name}
            className="w-20 h-20 rounded-full object-cover mx-auto sm:mx-0"
          />
        </div>
        
        <div className="flex-grow sm:text-left text-center">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            {isSelected && (
              <span className="flex items-center text-primary-500 text-sm">
                <Check size={16} className="mr-1" /> Selected
              </span>
            )}
          </div>
          
          <div className="flex items-center mb-3 justify-center sm:justify-start">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span className="text-gray-700 mr-1">{rating}</span>
            <span className="text-gray-500">({reviewCount} reviews)</span>
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mb-3 justify-center sm:justify-start">
            <Shield size={16} className="mr-1 text-primary-400" />
            <span>{experience} years experience</span>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {skills.map((skill) => (
              <span 
                key={skill}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700"
              >
                {skillLabels[skill]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProviderCard;