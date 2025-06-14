
import React from 'react';
import { ArrowLeft, Bell, Clock, MessageCircle, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavigationBar } from '@/components/NavigationBar';

const Notifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: 'message',
      icon: MessageCircle,
      title: 'New message from Sarah',
      description: 'Hope you\'re feeling better today!',
      time: '5 minutes ago',
      unread: true
    },
    {
      id: 2,
      type: 'reminder',
      icon: Bell,
      title: 'Daily Check-in Reminder',
      description: 'Time to log your mood for today',
      time: '1 hour ago',
      unread: true
    },
    {
      id: 3,
      type: 'support',
      icon: Heart,
      title: 'Community Support',
      description: 'Someone liked your post in the community',
      time: '3 hours ago',
      unread: false
    },
    {
      id: 4,
      type: 'reminder',
      icon: Clock,
      title: 'Weekly Progress',
      description: 'Your mood tracking summary is ready',
      time: '1 day ago',
      unread: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600">
      <div className="pb-20">
        {/* Header */}
        <div className="px-4 pt-12 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <button 
              onClick={() => navigate('/')}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
            >
              <ArrowLeft size={20} className="text-white" />
            </button>
            <h1 className="text-white text-2xl font-bold">Notifications</h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 space-y-3">
          {notifications.map((notification) => {
            const IconComponent = notification.icon;
            return (
              <div 
                key={notification.id}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-4 ${
                  notification.unread ? 'border-l-4 border-white/50' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-white/20">
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-white font-semibold">{notification.title}</h3>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <p className="text-white/80 text-sm mb-2">{notification.description}</p>
                    <p className="text-white/60 text-xs">{notification.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <NavigationBar />
    </div>
  );
};

export default Notifications;
