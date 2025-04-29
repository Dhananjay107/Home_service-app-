import { create } from 'zustand';
import { supabase } from '../lib/supabase';

export interface Subscription {
  id: string;
  name: string;
  price: number;
  frequency: 'weekly' | 'biweekly' | 'monthly';
  services: string[];
  features: string[];
}

interface SubscriptionState {
  subscriptions: Subscription[];
  userSubscription: Subscription | null;
  loading: boolean;
  fetchSubscriptions: () => Promise<void>;
  subscribe: (subscriptionId: string) => Promise<void>;
  cancelSubscription: () => Promise<void>;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscriptions: [],
  userSubscription: null,
  loading: false,
  fetchSubscriptions: async () => {
    set({ loading: true });
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*');
    
    if (error) throw error;
    set({ subscriptions: data, loading: false });
  },
  subscribe: async (subscriptionId: string) => {
    const { data, error } = await supabase
      .from('user_subscriptions')
      .insert([{ subscription_id: subscriptionId }]);
    
    if (error) throw error;
    set({ userSubscription: data[0] });
  },
  cancelSubscription: async () => {
    const { error } = await supabase
      .from('user_subscriptions')
      .delete()
      .eq('user_id', supabase.auth.getUser());
    
    if (error) throw error;
    set({ userSubscription: null });
  },
}));