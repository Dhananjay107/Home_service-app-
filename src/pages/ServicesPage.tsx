import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';
import { services } from '../data/services';
import { ServiceCategory } from '../types';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');
  
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cleaning', name: 'Cleaning' },
    { id: 'laundry', name: 'Laundry' },
    { id: 'dishwashing', name: 'Dishwashing' },
    { id: 'other', name: 'Other Services' }
  ];
  
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-primary-100 max-w-2xl mx-auto"
          >
            Browse our range of professional home services designed to make your life easier and give you back your precious time.
          </motion.p>
        </div>
      </section>
      
      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as ServiceCategory | 'all')}
                className={`px-5 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} delay={index} />
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Special Offers */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Special Offers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Take advantage of our limited-time offers and package deals to save on your home services.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary-500 rounded-full p-3 text-white">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">New Customer Special</h3>
                  <p className="text-gray-600 mb-4">Get 15% off your first booking with code WELCOME15</p>
                  <Link 
                    to="/booking" 
                    className="flex items-center text-primary-600 font-medium hover:text-primary-700"
                  >
                    Book now <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6 border border-accent-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-accent-500 rounded-full p-3 text-white">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-accent-700 mb-2">Weekly Package</h3>
                  <p className="text-gray-600 mb-4">Save 20% when you schedule weekly cleaning services</p>
                  <Link 
                    to="/booking" 
                    className="flex items-center text-accent-600 font-medium hover:text-accent-700"
                  >
                    Book now <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
                >
                  Can't decide which service you need?
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-600 mb-6"
                >
                  Let us help you choose the right service for your home. Our experts are ready to provide personalized recommendations based on your specific needs.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link 
                    to="/about#contact" 
                    className="bg-primary-500 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-600 transition-colors inline-block"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 relative" style={{ minHeight: '16rem' }}>
                <img 
                  src="https://images.pexels.com/photos/4107097/pexels-photo-4107097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Home Service Consultation" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;