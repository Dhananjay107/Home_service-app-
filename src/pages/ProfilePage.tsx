import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit, User, MapPin, Mail, Phone, Clock, CheckCircle, XCircle } from 'lucide-react';
import { BookingStatus } from '../types';

const ProfilePage: React.FC = () => {
  // Mock user data - in a real app, this would come from an API/auth service
  const [user] = useState({
    name: 'Jessica Thompson',
    email: 'jessica.thompson@example.com',
    phone: '(555) 123-4567',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    addresses: [
      {
        id: 'a1',
        title: 'Home',
        street: '123 Main Street',
        city: 'San Francisco, CA 94103',
        isDefault: true
      },
      {
        id: 'a2',
        title: 'Office',
        street: '456 Market Street, Suite 200',
        city: 'San Francisco, CA 94105',
        isDefault: false
      }
    ],
    bookings: [
      {
        id: 'b1',
        serviceId: '1',
        serviceName: 'Regular Home Cleaning',
        date: '2025-05-10',
        time: '09:00 AM',
        status: 'scheduled' as BookingStatus,
        address: 'Home',
        price: 80
      },
      {
        id: 'b2',
        serviceId: '3',
        serviceName: 'Laundry Service',
        date: '2025-05-05',
        time: '10:00 AM',
        status: 'completed' as BookingStatus,
        address: 'Home',
        price: 40
      },
      {
        id: 'b3',
        serviceId: '5',
        serviceName: 'Dishwashing',
        date: '2025-04-28',
        time: '02:00 PM',
        status: 'completed' as BookingStatus,
        address: 'Home',
        price: 30
      }
    ],
    paymentMethods: [
      {
        id: 'p1',
        type: 'Visa',
        last4: '4242',
        expiry: '06/26',
        isDefault: true
      }
    ]
  });
  
  const [activeTab, setActiveTab] = useState('bookings');
  
  const getStatusBadge = (status: BookingStatus) => {
    switch (status) {
      case 'scheduled':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Clock size={12} className="mr-1" />
            Scheduled
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock size={12} className="mr-1" />
            In Progress
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle size={12} className="mr-1" />
            Completed
          </span>
        );
      case 'cancelled':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle size={12} className="mr-1" />
            Cancelled
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden mb-6"
          >
            <div className="md:flex">
              <div className="md:shrink-0 md:w-1/3 bg-gradient-to-r from-primary-500 to-primary-700 p-6 text-white flex flex-col items-center justify-center">
                <img 
                  src={user.image} 
                  alt={user.name} 
                  className="h-24 w-24 rounded-full object-cover border-4 border-white"
                />
                <h2 className="text-xl font-bold mt-4">{user.name}</h2>
                <p className="text-primary-100">Member since April 2025</p>
              </div>
              
              <div className="p-6 md:p-8 md:w-2/3">
                <div className="mb-4 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
                  <button className="text-primary-500 hover:text-primary-600 flex items-center text-sm">
                    <Edit size={16} className="mr-1" />
                    Edit Profile
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <User size={18} className="text-gray-400 mr-3" />
                    <span className="text-gray-600">{user.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="text-gray-400 mr-3" />
                    <span className="text-gray-600">{user.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={18} className="text-gray-400 mr-3" />
                    <span className="text-gray-600">{user.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin size={18} className="text-gray-400 mr-3 mt-1" />
                    <div>
                      <span className="text-gray-600 block">{user.addresses[0].street}</span>
                      <span className="text-gray-600">{user.addresses[0].city}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Tabs */}
          <div className="mb-6 border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('bookings')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'bookings'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Bookings
              </button>
              <button
                onClick={() => setActiveTab('addresses')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'addresses'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Addresses
              </button>
              <button
                onClick={() => setActiveTab('payment')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'payment'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Payment Methods
              </button>
            </nav>
          </div>
          
          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {activeTab === 'bookings' && (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Bookings</h3>
                
                {user.bookings.length > 0 ? (
                  <div className="space-y-4">
                    {user.bookings.map((booking) => (
                      <motion.div
                        key={booking.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-800">{booking.serviceName}</h4>
                          {getStatusBadge(booking.status)}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2 text-gray-400" />
                            {new Date(booking.date).toLocaleDateString()} at {booking.time}
                          </div>
                          
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2 text-gray-400" />
                            {booking.address}
                          </div>
                          
                          <div className="font-medium text-primary-600">
                            ${booking.price}
                          </div>
                        </div>
                        
                        {booking.status === 'scheduled' && (
                          <div className="mt-3 flex space-x-3">
                            <button className="px-3 py-1 border border-primary-500 text-primary-500 rounded hover:bg-primary-50 text-sm transition-colors">
                              Reschedule
                            </button>
                            <button className="px-3 py-1 border border-red-500 text-red-500 rounded hover:bg-red-50 text-sm transition-colors">
                              Cancel
                            </button>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">You don't have any bookings yet.</p>
                    <button className="mt-4 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                      Book a Service
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'addresses' && (
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Your Addresses</h3>
                  <button className="text-white bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg text-sm flex items-center">
                    <PlusCircle size={16} className="mr-1" />
                    Add Address
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {user.addresses.map((address) => (
                    <motion.div
                      key={address.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`border rounded-lg p-4 relative ${
                        address.isDefault ? 'border-primary-300 bg-primary-50' : 'border-gray-200'
                      }`}
                    >
                      <div className="flex justify-between">
                        <h4 className="font-semibold text-gray-800">{address.title}</h4>
                        {address.isDefault && (
                          <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mt-1">{address.street}</p>
                      <p className="text-gray-600">{address.city}</p>
                      
                      <div className="mt-3 flex space-x-3">
                        <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center">
                          <Edit size={14} className="mr-1" /> Edit
                        </button>
                        {!address.isDefault && (
                          <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center">
                            <CheckCircle size={14} className="mr-1" /> Set as Default
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'payment' && (
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Payment Methods</h3>
                  <button className="text-white bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg text-sm flex items-center">
                    <PlusCircle size={16} className="mr-1" />
                    Add Payment Method
                  </button>
                </div>
                
                <div className="space-y-4">
                  {user.paymentMethods.map((method) => (
                    <motion.div
                      key={method.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`border rounded-lg p-4 relative ${
                        method.isDefault ? 'border-primary-300 bg-primary-50' : 'border-gray-200'
                      }`}
                    >
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <CreditCard size={20} className="mr-2 text-gray-500" />
                          <div>
                            <h4 className="font-semibold text-gray-800">{method.type} •••• {method.last4}</h4>
                            <p className="text-gray-600 text-sm">Expires {method.expiry}</p>
                          </div>
                        </div>
                        {method.isDefault && (
                          <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                            Default
                          </span>
                        )}
                      </div>
                      
                      <div className="mt-3 flex space-x-3">
                        <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center">
                          <Edit size={14} className="mr-1" /> Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700 text-sm flex items-center">
                          <XCircle size={14} className="mr-1" /> Remove
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Import the missing icons
const Calendar = Clock;
const PlusCircle = User;
const CreditCard = MapPin;

export default ProfilePage;