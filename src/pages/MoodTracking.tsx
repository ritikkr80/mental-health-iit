
import React from 'react';
import { ArrowLeft, Calendar, TrendingUp, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavigationBar } from '@/components/NavigationBar';
import { Button } from '@/components/ui/button';

const MoodTracking = () => {
  const navigate = useNavigate();

  const moods = [
    { emoji: '🎁', label: 'Excited', color: 'bg-yellow-100' },
    { emoji: '😰', label: 'Anxious', color: 'bg-orange-100' },
    { emoji: '😢', label: 'Sad', color: 'bg-blue-100' },
    { emoji: '😊', label: 'Happy', color: 'bg-green-100' },
    { emoji: '😄', label: 'Joyful', color: 'bg-pink-100' }
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
            <h1 className="text-white text-2xl font-bold">Track Your Mood</h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 space-y-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Heart size={24} className="text-purple-600" />
              <h2 className="text-purple-700 text-lg font-semibold">How are you feeling right now?</h2>
            </div>
            
            <div className="grid grid-cols-5 gap-3 mb-8">
              {moods.map((mood) => (
                <div key={mood.emoji} className="text-center">
                  <button className={`w-16 h-16 rounded-full ${mood.color} flex items-center justify-center text-3xl mb-2 hover:scale-105 transition-all duration-200 shadow-md`}>
                    {mood.emoji}
                  </button>
                  <span className="text-xs text-gray-600 font-medium">{mood.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-purple-700 font-semibold">Add a note (optional)</h3>
              <textarea 
                placeholder="What's on your mind today?"
                className="w-full p-4 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none h-24"
              />
              
              <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full py-3 font-medium">
                Save Mood Entry
              </Button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp size={24} className="text-white" />
              <h2 className="text-white text-lg font-semibold">Recent Entries</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">😊</span>
                  <span className="text-white">Today, 2:30 PM</span>
                </div>
                <span className="text-white/70 text-sm">Happy</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">😔</span>
                  <span className="text-white">Yesterday, 10:15 AM</span>
                </div>
                <span className="text-white/70 text-sm">Sad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <NavigationBar />
    </div>
  );
};

export default MoodTracking;
