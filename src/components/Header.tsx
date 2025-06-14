
import React from 'react';
import { Bell, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="relative px-4 pt-12 pb-6">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
        <div className="w-full h-full rounded-full border-2 border-white/30"></div>
      </div>
      <div className="absolute top-8 right-16 w-16 h-16 opacity-10">
        <div className="w-full h-full rounded-full border-2 border-white/40"></div>
      </div>
      
      <div className="flex justify-between items-start relative z-10">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
              <img 
                src="/lovable-uploads/58e1e331-4999-4d50-8858-597a25e77bf0.png" 
                alt="Nivaan Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white/90 text-sm font-medium">Nivaan</span>
          </div>
          <h1 className="text-white text-2xl font-bold mb-1">Good morning,</h1>
          <p className="text-white text-xl">{user?.name || 'User'}</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/notifications')}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <Bell size={20} className="text-white" />
          </button>
          <button
            onClick={() => navigate('/profile')}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center hover:from-pink-500 hover:to-purple-600 transition-colors"
          >
            <User size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
