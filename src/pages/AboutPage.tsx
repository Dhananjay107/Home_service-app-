import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Clock, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Send } from 'lucide-react';
import HowItWorks from '../components/ui/HowItWorks';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Sarah founded HomeServe with a mission to make home care accessible and affordable for everyone.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Michael ensures that all our services run smoothly and efficiently to deliver the best customer experience.'
    },
    {
      name: 'Emily Garcia',
      role: 'Customer Success Manager',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Emily works tirelessly to ensure our customers receive exceptional service and support.'
    }
  ];
  
  const values = [
    {
      icon: <Users className="h-8 w-8 text-primary-500" />,
      title: 'Customer First',
      description: 'We prioritize your needs and satisfaction above all else. Your happiness is our success.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary-500" />,
      title: 'Quality Service',
      description: 'We\'re committed to excellence in every service we provide, with attention to detail and thoroughness.'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-500" />,
      title: 'Reliability',
      description: 'You can count on us to show up on time and complete your service as promised, every time.'
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-500" />,
      title: 'Community Care',
      description: 'We believe in giving back to the communities we serve and making a positive impact.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              About HomeServe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-primary-100 mb-8"
            >
              We\'re on a mission to make home care effortless with quality on-demand services that give you back your valuable time.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  HomeServe was founded in 2023 with a simple idea: to make home care services accessible, 
                  affordable, and hassle-free for busy individuals and families.
                </p>
                <p className="text-gray-600 mb-6">
                  Our founder, Sarah Johnson, experienced firsthand the challenges of balancing work, family, 
                  and home responsibilities. She envisioned a platform where quality home services could be 
                  booked with just a few clicks, bringing convenience and peace of mind to people\'s lives.
                </p>
                <p className="text-gray-600">
                  Today, HomeServe has grown into a trusted name in home services, serving thousands of 
                  customers with reliable cleaning, laundry, and dishwashing services. Our team of 
                  professional service providers is dedicated to delivering excellence and making your 
                  home a more comfortable place to live.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-primary-100 rounded-lg"></div>
                <img 
                  src="https://images.pexels.com/photos/3760610/pexels-photo-3760610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="HomeServe Team" 
                  className="relative z-10 rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-primary-200 rounded-lg"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              These core principles guide everything we do and shape our approach to delivering exceptional service.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              The passionate individuals behind HomeServe who work tirelessly to deliver excellence.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-primary-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our services or want to provide feedback? We\'d love to hear from you! 
                  Reach out to us using any of the methods below.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={20} className="text-primary-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">Visit Us</h3>
                      <p className="text-gray-600">
                        123 Cleaning Street, Suite 100<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={20} className="text-primary-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">Email Us</h3>
                      <p className="text-gray-600">
                        info@homeserve.com<br />
                        support@homeserve.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={20} className="text-primary-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">Call Us</h3>
                      <p className="text-gray-600">
                        (555) 123-4567<br />
                        Hours: Mon-Fri, 8am - 6pm PT
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 pt-2">
                    <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                  
                  <form>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors w-full flex items-center justify-center"
                    >
                      Send Message
                      <Send size={18} className="ml-2" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;