import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Users, ThumbsUp } from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import HowItWorks from '../components/ui/HowItWorks';
import { services } from '../data/services';

const HomePage: React.FC = () => {
  const featuredServices = services.slice(0, 3);
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Working Mom',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      testimonial: 'HomeServe has been a lifesaver for our busy family. Their cleaning services are thorough and the staff is always professional and punctual.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      testimonial: 'As someone who works from home, having a clean environment is essential. Their weekly cleaning service has improved my productivity and peace of mind.',
      rating: 5
    },
    {
      name: 'Jennifer Lopez',
      role: 'Retired Teacher',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      testimonial: 'The laundry service has been a game-changer for me. Everything comes back perfectly folded and smelling fresh. Couldn\'t be happier!',
      rating: 4
    }
  ];
  
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary-500" />,
      title: 'Trusted Professionals',
      description: 'All our service providers undergo thorough background checks and training.'
    },
    {
      icon: <Clock className="h-10 w-10 text-primary-500" />,
      title: 'Flexible Scheduling',
      description: 'Book services at your convenience, including evenings and weekends.'
    },
    {
      icon: <Users className="h-10 w-10 text-primary-500" />,
      title: 'Dedicated Support',
      description: '24/7 customer service to address any questions or concerns.'
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-primary-500" />,
      title: 'Satisfaction Guaranteed',
      description: 'If you\'re not happy with our service, we\'ll make it right.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20" 
            style={{ backgroundImage: "url('https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                Home Services <br />
                <span className="text-accent-300">Made Simple</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl"
              >
                On-demand cleaning, laundry, and dishwashing services that fit your schedule. Let us take care of your home while you focus on what matters most.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  to="/services" 
                  className="bg-white text-primary-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-md"
                >
                  Explore Services
                </Link>
                <Link 
                  to="/booking" 
                  className="bg-accent-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors shadow-md"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                src="https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Home Cleaning" 
                className="rounded-xl shadow-2xl max-w-full h-auto max-h-80 md:max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary-500 font-medium"
            >
              OUR SERVICES
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mt-2"
            >
              What We Offer
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-1 bg-primary-500 mx-auto mt-4"
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} delay={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-block bg-primary-50 text-primary-700 px-6 py-3 rounded-lg font-medium hover:bg-primary-100 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary-500 font-medium"
            >
              WHY CHOOSE US
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mt-2"
            >
              The HomeServe Difference
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
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="inline-block p-3 rounded-full bg-primary-50 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary-500 font-medium"
            >
              TESTIMONIALS
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mt-2"
            >
              What Our Customers Say
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-1 bg-primary-500 mx-auto mt-4"
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Home Experience?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto"
          >
            Join thousands of satisfied customers who have reclaimed their time and enjoy a cleaner, more organized home.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              to="/booking" 
              className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-md"
            >
              Book Your Service Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;