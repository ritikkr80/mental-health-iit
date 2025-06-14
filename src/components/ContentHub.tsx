
import React from 'react';
import { Button } from '@/components/ui/button';

export const ContentHub = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-white font-semibold text-lg px-2">Today's Tasks</h3>
      
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h4 className="text-purple-800 font-bold text-lg mb-2">Peer Group Meetup</h4>
            <p className="text-gray-700 text-sm mb-4">
              Let's open up to the thing that matters among the people
            </p>
            <Button className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white rounded-full px-6 py-2 font-medium">
              Join Now ▶
            </Button>
          </div>
          <div className="w-16 h-16 ml-4">
            <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-3xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h4 className="text-orange-800 font-bold text-lg mb-2">Meditation</h4>
            <p className="text-gray-700 text-sm mb-4">
              A mindful Meditation guide to relogram yourself to silence.
            </p>
            <Button className="bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-white rounded-full px-6 py-2 font-medium">
              Start Now ▶
            </Button>
          </div>
          <div className="w-16 h-16 ml-4">
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">🧘</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
