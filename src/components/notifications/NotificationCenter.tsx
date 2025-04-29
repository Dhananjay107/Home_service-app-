import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Check, X } from 'lucide-react';
import { format } from 'date-fns';
import { useNotificationStore } from '../../stores/notificationStore';

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({ isOpen, onClose }) => {
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotificationStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 top-full mt-2 w-80 rounded-lg bg-white shadow-lg"
        >
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center">
              <Bell size={20} className="text-primary-500" />
              <h3 className="ml-2 font-semibold">Notifications</h3>
              {unreadCount > 0 && (
                <span className="ml-2 rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-600">
                  {unreadCount} new
                </span>
              )}
            </div>
            <button
              onClick={markAllAsRead}
              className="text-sm text-primary-600 hover:text-primary-700"
            >
              Mark all as read
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No notifications yet
              </div>
            ) : (
              notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`border-b p-4 ${
                    notification.read ? 'bg-white' : 'bg-primary-50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{notification.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">{notification.message}</p>
                      <p className="mt-1 text-xs text-gray-400">
                        {format(new Date(notification.createdAt), 'MMM d, yyyy h:mm a')}
                      </p>
                    </div>
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-primary-600 hover:text-primary-700"
                      >
                        <Check size={16} />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </div>

          <div className="border-t p-2">
            <button
              onClick={onClose}
              className="block w-full rounded-lg p-2 text-center text-sm text-gray-600 hover:bg-gray-100"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationCenter;