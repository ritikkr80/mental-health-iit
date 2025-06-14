
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface MoodTrackerProps {
  currentMood: string;
  setCurrentMood: (mood: string) => void;
}

export const MoodTracker = ({ currentMood, setCurrentMood }: MoodTrackerProps) => {
  const navigate = useNavigate();
  
  const moods = [
    { emoji: '🎁', label: 'Excited' },
    { emoji: '😰', label: 'Anxious' },
    { emoji: '😢', label: 'Sad' },
    { emoji: '😊', label: 'Happy' },
    { emoji: '😄', label: 'Joyful' }
  ];

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
      <h2 className="text-purple-700 font-semibold text-center mb-6">
        How are you feeling Today ?
      </h2>
      
      <div className="flex justify-center gap-4 mb-6">
        {moods.map((mood) => (
          <button
            key={mood.emoji}
            onClick={() => setCurrentMood(mood.emoji)}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-200 ${
              currentMood === mood.emoji 
                ? 'bg-purple-100 scale-110 shadow-md' 
                : 'hover:bg-purple-50 hover:scale-105'
            }`}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
      
      <Button 
        onClick={() => navigate('/mood-tracking')}
        className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full py-3 font-medium"
      >
        Track Mood →
      </Button>
    </div>
  );
};
