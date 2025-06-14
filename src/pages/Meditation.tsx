
import React, { useState } from 'react';
import { ArrowLeft, Play, Pause, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavigationBar } from '@/components/NavigationBar';
import { Button } from '@/components/ui/button';

const Meditation = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(5);

  const durations = [5, 10, 15, 20, 30];
  
  const meditationTypes = [
    {
      title: "Breathing Exercise",
      description: "Focus on your breath to calm your mind",
      duration: "5-30 min",
      emoji: "🌬️"
    },
    {
      title: "Body Scan",
      description: "Relax each part of your body systematically",
      duration: "10-20 min",
      emoji: "🧘"
    },
    {
      title: "Mindfulness",
      description: "Stay present and aware of your thoughts",
      duration: "5-15 min",
      emoji: "🌸"
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
            <h1 className="text-white text-2xl font-bold">Meditation</h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 space-y-4">
          {/* Duration Selection */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h2 className="text-white text-lg font-semibold mb-4">Choose Duration</h2>
            <div className="flex gap-2">
              {durations.map((duration) => (
                <button
                  key={duration}
                  onClick={() => setSelectedDuration(duration)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedDuration === duration
                      ? 'bg-white text-purple-600'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {duration} min
                </button>
              ))}
            </div>
          </div>

          {/* Meditation Player */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-4xl">🧘</span>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Guided Meditation</h3>
            <p className="text-white/80 mb-6">{selectedDuration} minutes of mindful breathing</p>
            
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white rounded-full px-8 py-3"
              >
                {isPlaying ? (
                  <>
                    <Pause size={20} className="mr-2" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play size={20} className="mr-2" />
                    Start
                  </>
                )}
              </Button>
              <Button className="bg-white/20 hover:bg-white/30 text-white rounded-full px-4">
                <RotateCcw size={20} />
              </Button>
            </div>
          </div>

          {/* Meditation Types */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h2 className="text-white text-lg font-semibold mb-4">Meditation Types</h2>
            <div className="space-y-3">
              {meditationTypes.map((type, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{type.emoji}</span>
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{type.title}</h3>
                      <p className="text-white/70 text-sm">{type.description}</p>
                      <span className="text-white/60 text-xs">{type.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <NavigationBar />
    </div>
  );
};

export default Meditation;
