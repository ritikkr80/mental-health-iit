
import React from 'react';
import { Home, Clock, User, Settings } from 'lucide-react';

export const NavigationBar = () => {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Clock, label: 'History' },
    { icon: User, label: 'Community' },
    { icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-purple-700 backdrop-blur-sm border-t border-purple-400/30">
      <div className="flex items-center justify-around py-3">
        {navItems.map((item, index) => (
          <button
            key={index}
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
