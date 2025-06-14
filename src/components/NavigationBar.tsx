
import React from 'react';
import { Home, Clock, User, Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const NavigationBar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Home', path: '/', active: location.pathname === '/' },
    { icon: Clock, label: 'History', path: '/history', active: location.pathname === '/history' },
    { icon: User, label: 'Community', path: '/community', active: location.pathname === '/community' },
    { icon: Settings, label: 'Settings', path: '/settings', active: location.pathname === '/settings' }
  ];

  const handleNavigation = (item: any) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.label === 'Settings') {
      navigate('/settings');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-purple-700 backdrop-blur-sm border-t border-purple-400/30">
      <div className="flex items-center justify-around py-3">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(item)}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 ${
              item.active 
                ? 'bg-white/20 text-white' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <item.icon size={20} />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
