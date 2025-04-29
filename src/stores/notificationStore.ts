import { create } from 'zustand';
import { supabase } from '../lib/supabase';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
}

interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  loading: boolean;
  fetchNotifications: () => Promise<void>;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
}

export const useNotificationStore = create<NotificationState>((set, get) => ({
  notifications: [],
  unreadCount: 0,
  loading: false,
  fetchNotifications: async () => {
    set({ loading: true });
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    const unreadCount = data.filter(n => !n.read).length;
    set({ notifications: data, unreadCount, loading: false });
  },
  markAsRead: async (id: string) => {
    const { error } = await supabase
      .from('notifications')
      .update({ read: true })
      .eq('id', id);
    
    if (error) throw error;
    
    const notifications = get().notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    );
    set({ 
      notifications,
      unreadCount: get().unreadCount - 1
    });
  },
  markAllAsRead: async () => {
    const { error } = await supabase
      .from('notifications')
      .update({ read: true })
      .eq('read', false);
    
    if (error) throw error;
    
    const notifications = get().notifications.map(n => ({ ...n, read: true }));
    set({ notifications, unreadCount: 0 });
  },
}));

// Subscribe to real-time notifications
supabase
  .channel('notifications')
  .on('postgres_changes', { 
    event: 'INSERT', 
    schema: 'public', 
    table: 'notifications' 
  }, (payload) => {
    const notification = payload.new as Notification;
    useNotificationStore.setState(state => ({
      notifications: [notification, ...state.notifications],
      unreadCount: state.unreadCount + 1
    }));
  })
  .subscribe();