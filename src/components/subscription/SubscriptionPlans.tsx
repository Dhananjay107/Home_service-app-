import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useSubscriptionStore } from '../../stores/subscriptionStore';
import type { Subscription } from '../../stores/subscriptionStore';

const SubscriptionPlans: React.FC = () => {
  const { subscriptions, subscribe, userSubscription } = useSubscriptionStore();

  const handleSubscribe = async (subscription: Subscription) => {
    try {
      await subscribe(subscription.id);
    } catch (error) {
      console.error('Failed to subscribe:', error);
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Subscription Plans</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your home care needs
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {subscriptions.map((subscription, index) => (
            <motion.div
              key={subscription.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg border p-8 shadow-sm ${
                userSubscription?.id === subscription.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900">{subscription.name}</h3>
              <p className="mt-4 text-sm text-gray-500">
                Billed {subscription.frequency}
              </p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                ${subscription.price}
                <span className="text-base font-normal text-gray-500">
                  /{subscription.frequency === 'monthly' ? 'mo' : 'wk'}
                </span>
              </p>

              <ul className="mt-8 space-y-4">
                {subscription.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-primary-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe(subscription)}
                disabled={userSubscription?.id === subscription.id}
                className={`mt-8 w-full rounded-lg px-4 py-2 text-center font-medium ${
                  userSubscription?.id === subscription.id
                    ? 'bg-primary-200 text-primary-700 cursor-not-allowed'
                    : 'bg-primary-500 text-white hover:bg-primary-600'
                }`}
              >
                {userSubscription?.id === subscription.id
                  ? 'Current Plan'
                  : 'Subscribe Now'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;