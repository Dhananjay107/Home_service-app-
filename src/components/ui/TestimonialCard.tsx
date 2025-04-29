import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  testimonial: string;
  rating: number;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  image, 
  testimonial, 
  rating,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
      
      <div className="mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            size={16} 
            className={i < rating ? "text-yellow-400" : "text-gray-300"} 
            fill={i < rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      
      <blockquote className="text-gray-600 italic">"{testimonial}"</blockquote>
    </motion.div>
  );
};

export default TestimonialCard;