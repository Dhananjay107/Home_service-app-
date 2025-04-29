import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/about' },
    { name: 'Contact', path: '/about#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-white shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
            <span className="text-white font-bold">HS</span>
          </div>
          <span className={`font-bold text-xl ${scrolled ? 'text-primary-700' : 'text-primary-700'}`}>
            HomeServe
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary-500 ${
                location.pathname === item.path ? 'text-primary-600' : 'text-gray-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/profile" className="text-gray-600 hover:text-primary-500 transition-colors">
            <User size={20} />
          </Link>
          <Link 
            to="/booking" 
            className="bg-primary-500 text-white px-4 py-2 rounded-full font-medium hover:bg-primary-600 transition-colors"
          >
            Book Now
          </Link>
        </div>
        
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <nav className="flex flex-col py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-3 text-base font-medium ${
                    location.pathname === item.path 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-gray-600'
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 mt-2 pt-2">
                <Link
                  to="/profile"
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-600"
                  onClick={closeMenu}
                >
                  <User size={18} className="mr-2" />
                  Profile
                </Link>
                <Link
                  to="/booking"
                  className="flex items-center px-4 py-3 text-base font-medium text-primary-600"
                  onClick={closeMenu}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Book Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;