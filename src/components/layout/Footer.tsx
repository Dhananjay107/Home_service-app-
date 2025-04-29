import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                <span className="text-white font-bold">HS</span>
              </div>
              <span className="font-bold text-xl text-white">HomeServe</span>
            </div>
            <p className="text-gray-400 mb-6">
              Making home care effortless with our on-demand cleaning, laundry, and dishwashing services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about#contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#cleaning" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services#laundry" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Laundry Service
                </Link>
              </li>
              <li>
                <Link to="/services#dishwashing" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Dishwashing
                </Link>
              </li>
              <li>
                <Link to="/services#specialclean" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services#subscription" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Subscription Plans
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary-400 mt-1 shrink-0" />
                <span className="text-gray-400">
                  123 Cleaning Street, Suite 100<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-400 shrink-0" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-400 shrink-0" />
                <span className="text-gray-400">support@homeserve.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} HomeServe. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-primary-400 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-primary-400 text-sm">
              Terms of Service
            </Link>
            <Link to="/faq" className="text-gray-500 hover:text-primary-400 text-sm">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;