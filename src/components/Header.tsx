
import React from 'react';
import { Bell, User } from 'lucide-react';

export const Header = () => {
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
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">💜</span>
              </div>
            </div>
            <span className="text-white/90 text-sm font-medium">Nivaan</span>
          </div>
          <h1 className="text-white text-2xl font-bold mb-1">Good morning,</h1>
          <p className="text-white text-xl">Alex</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
            <Bell size={20} className="text-white" />
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
            <User size={20} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
