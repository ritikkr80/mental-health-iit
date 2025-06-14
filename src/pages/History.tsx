
import React from 'react';
import { ArrowLeft, Calendar, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavigationBar } from '@/components/NavigationBar';

const History = () => {
  const navigate = useNavigate();

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
            <h1 className="text-white text-2xl font-bold">Mood History</h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 space-y-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar size={24} className="text-white" />
              <h2 className="text-white text-lg font-semibold">Weekly Summary</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                <span className="text-white">Monday</span>
                <span className="text-2xl">😊</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                <span className="text-white">Tuesday</span>
                <span className="text-2xl">😔</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                <span className="text-white">Wednesday</span>
                <span className="text-2xl">😊</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp size={24} className="text-white" />
              <h2 className="text-white text-lg font-semibold">Insights</h2>
            </div>
            <p className="text-white/80">
              You've been feeling more positive this week! Your mood has improved by 20% compared to last week.
            </p>
          </div>
        </div>
      </div>
      
      <NavigationBar />
    </div>
  );
};

export default History;
