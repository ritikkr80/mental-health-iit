
import React from 'react';
import { ArrowLeft, User, Mail, Calendar, Award, TrendingUp, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { NavigationBar } from '@/components/NavigationBar';

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const stats = [
    { icon: Calendar, label: 'Days Active', value: '45', color: 'from-blue-400 to-blue-500' },
    { icon: TrendingUp, label: 'Progress', value: '85%', color: 'from-green-400 to-green-500' },
    { icon: Heart, label: 'Mood Score', value: '8.2', color: 'from-pink-400 to-pink-500' },
    { icon: Award, label: 'Achievements', value: '12', color: 'from-yellow-400 to-yellow-500' }
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
            <h1 className="text-white text-2xl font-bold">Profile</h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 space-y-4">
          {/* Profile Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                <User size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-white text-xl font-bold">{user?.name}</h2>
                <div className="flex items-center gap-2 text-white/80">
                  <Mail size={16} />
                  <span>{user?.email}</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-white/90 text-sm">
                "Taking care of my mental health one day at a time. 
                Grateful for this supportive community! 🌟"
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <div className="text-white text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Recent Activity */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-white text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-sm">😊</span>
                </div>
                <div>
                  <p className="text-white text-sm">Logged mood: Happy</p>
                  <p className="text-white/60 text-xs">Today at 9:30 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <Heart size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white text-sm">Shared in community</p>
                  <p className="text-white/60 text-xs">Yesterday at 3:15 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <NavigationBar />
    </div>
  );
};

export default Profile;
