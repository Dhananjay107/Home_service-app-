import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Calendar, Clock, MapPin, CreditCard, CheckCircle } from 'lucide-react';
import ServiceCard from '../components/ui/ServiceCard';
import ProviderCard from '../components/ui/ProviderCard';
import { services, getServiceById } from '../data/services';
import { providers, getProvidersBySkill } from '../data/providers';
import { Service, Provider } from '../types';

const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialServiceId = searchParams.get('service');
  
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [availableProviders, setAvailableProviders] = useState<Provider[]>([]);
  const [bookingComplete, setBookingComplete] = useState(false);
  
  // Times
  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', 
    '04:00 PM', '05:00 PM', '06:00 PM'
  ];
  
  // Initialize with selected service from URL if present
  useEffect(() => {
    if (initialServiceId) {
      const service = getServiceById(initialServiceId);
      if (service) {
        setSelectedService(service);
        setStep(2);
      }
    }
  }, [initialServiceId]);
  
  // Update available providers when service changes
  useEffect(() => {
    if (selectedService) {
      const matchingProviders = getProvidersBySkill(selectedService.category);
      setAvailableProviders(matchingProviders);
    }
  }, [selectedService]);
  
  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setStep(2);
  };
  
  const handleProviderSelect = (provider: Provider) => {
    setSelectedProvider(provider);
  };
  
  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };
  
  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking process
    setTimeout(() => {
      setBookingComplete(true);
    }, 1500);
  };
  
  // Generate dates for the next 7 days
  const getNextDays = (days: number) => {
    return Array.from({ length: days }).map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      return {
        value: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        })
      };
    });
  };
  
  const dates = getNextDays(14);
  
  // Render current step
  const renderStep = () => {
    switch (step) {
      case 1: // Select Service
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Select a Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  onClick={() => handleServiceSelect(service)}
                  className={`cursor-pointer ${
                    selectedService?.id === service.id ? 'ring-2 ring-primary-500' : ''
                  }`}
                >
                  <ServiceCard service={service} delay={index} />
                </div>
              ))}
            </div>
          </div>
        );
        
      case 2: // Select Provider
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Select a Provider</h2>
            <p className="text-gray-600 mb-6">Choose a professional for your {selectedService?.name} service</p>
            
            {availableProviders.length > 0 ? (
              <div className="space-y-4">
                {availableProviders.map((provider, index) => (
                  <ProviderCard 
                    key={provider.id}
                    provider={provider}
                    isSelected={selectedProvider?.id === provider.id}
                    onSelect={handleProviderSelect}
                    delay={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No providers available for this service.</p>
              </div>
            )}
          </div>
        );
        
      case 3: // Schedule
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Date & Time</h2>
            <p className="text-gray-600 mb-6">Select when you'd like your service to be performed</p>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
                <Calendar className="mr-2 text-primary-500" size={20} />
                Select Date
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2">
                {dates.map((date) => (
                  <button
                    key={date.value}
                    onClick={() => handleDateSelect(date.value)}
                    className={`p-3 rounded-lg text-center transition-colors border ${
                      selectedDate === date.value
                        ? 'bg-primary-500 text-white border-primary-500'
                        : 'border-gray-200 hover:border-primary-300 text-gray-700'
                    }`}
                  >
                    {date.display}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
                <Clock className="mr-2 text-primary-500" size={20} />
                Select Time
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`p-3 rounded-lg text-center transition-colors border ${
                      selectedTime === time
                        ? 'bg-primary-500 text-white border-primary-500'
                        : 'border-gray-200 hover:border-primary-300 text-gray-700'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 4: // Checkout
        return (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Review & Complete Booking</h2>
            
            {bookingComplete ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <CheckCircle size={60} className="text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Booking Confirmed!</h3>
                <p className="text-gray-600 mb-4">
                  Your {selectedService?.name} service has been scheduled for {new Date(selectedDate).toLocaleDateString()} at {selectedTime}.
                </p>
                <p className="text-gray-600 mb-6">
                  A confirmation email has been sent to your email address with all the details of your booking.
                </p>
                <button
                  onClick={() => window.location.href = '/'}
                  className="bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                >
                  Return to Home
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Booking Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium text-gray-800">{selectedService?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Provider:</span>
                      <span className="font-medium text-gray-800">{selectedProvider?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium text-gray-800">
                        {selectedDate && new Date(selectedDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium text-gray-800">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium text-gray-800">{selectedService?.duration} hours</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between">
                      <span className="text-gray-800 font-semibold">Total:</span>
                      <span className="font-bold text-lg text-primary-700">${selectedService?.price}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <MapPin className="mr-2 text-primary-500" size={20} />
                    Service Address
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Apartment/Unit (Optional)
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <CreditCard className="mr-2 text-primary-500" size={20} />
                    Payment Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Expiration Date
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        CVC
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                >
                  Complete Booking
                </button>
              </form>
            )}
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="pt-20">
      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center w-full">
              {['Select Service', 'Choose Provider', 'Schedule', 'Checkout'].map((label, index) => (
                <React.Fragment key={index}>
                  <div className={`flex items-center ${index < step ? 'text-primary-600' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index + 1 === step 
                        ? 'bg-primary-500 text-white' 
                        : index + 1 < step 
                          ? 'bg-primary-100 text-primary-600' 
                          : 'bg-gray-100 text-gray-400'
                    }`}>
                      {index + 1}
                    </div>
                    <span className="ml-2 font-medium">{label}</span>
                  </div>
                  {index < 3 && (
                    <div className={`flex-grow h-0.5 mx-4 ${
                      index + 1 < step ? 'bg-primary-500' : 'bg-gray-200'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
            
            <div className="md:hidden flex items-center">
              <span className="text-gray-700 font-medium">Step {step} of 4</span>
              <div className="ml-4 flex-grow bg-gray-200 h-2 rounded-full w-32">
                <div 
                  className="bg-primary-500 h-2 rounded-full"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {renderStep()}
          
          {!bookingComplete && (
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  onClick={prevStep}
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <ChevronLeft size={20} className="mr-1" />
                  Back
                </button>
              )}
              
              {step < 4 && (
                <button
                  onClick={nextStep}
                  disabled={
                    (step === 1 && !selectedService) ||
                    (step === 2 && !selectedProvider) ||
                    (step === 3 && (!selectedDate || !selectedTime))
                  }
                  className={`flex items-center ml-auto px-6 py-2 rounded-lg ${
                    ((step === 1 && !selectedService) ||
                    (step === 2 && !selectedProvider) ||
                    (step === 3 && (!selectedDate || !selectedTime)))
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-primary-500 text-white hover:bg-primary-600'
                  }`}
                >
                  Continue
                  <ChevronRight size={20} className="ml-1" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;