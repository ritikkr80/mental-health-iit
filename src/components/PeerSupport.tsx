
import React from 'react';
import { Button } from '@/components/ui/button';

export const PeerSupport = () => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
      <h3 className="text-purple-800 font-semibold mb-2">Assess Your Self</h3>
      <p className="text-gray-600 text-sm mb-4">
        Evaluate the right course of action for you
      </p>
      
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h4 className="text-purple-800 font-semibold mb-2">Assess Your Self</h4>
            <p className="text-gray-600 text-sm mb-3">
              Evaluate the right course of action for you.Evaluate the right course of action for you
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full px-6 py-2 text-sm">
              Start Now!
            </Button>
          </div>
          <div className="w-16 h-16 ml-4">
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">🧠</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
