import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CreditCard, Home } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Home className="w-6 h-6 text-white" />,
      title: 'Choose Your Service',
      description: 'Browse through our range of services and select the one that meets your needs.',
      color: 'bg-primary-500'
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: 'Schedule a Time',
      description: 'Pick a date and time that works for you. We offer flexible scheduling options.',
      color: 'bg-secondary-500'
    },
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      title: 'Make Payment',
      description: 'Complete your booking with our secure payment system. We accept various payment methods.',
      color: 'bg-accent-500'
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: 'Enjoy Your Clean Home',
      description: 'Relax while our professionals take care of your home with quality service.',
      color: 'bg-primary-700'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary-500 font-medium"
          >
            SIMPLE PROCESS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mt-2"
          >
            How It Works
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-primary-500 mx-auto mt-4"
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                {step.icon}
              </div>
              <div className="relative mb-8 md:mb-0 md:pb-0">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gray-300"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;