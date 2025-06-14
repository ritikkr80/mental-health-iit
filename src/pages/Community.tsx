
import React from 'react';
import { ArrowLeft, MessageCircle, Users, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavigationBar } from '@/components/NavigationBar';

const Community = () => {
  const navigate = useNavigate();

  const discussions = [
    { id: 1, title: "Dealing with exam stress", replies: 12, likes: 8, emoji: "😰" },
    { id: 2, title: "How to maintain work-life balance", replies: 7, likes: 15, emoji: "⚖️" },
    { id: 3, title: "Anxiety before presentations", replies: 23, likes: 31, emoji: "😅" },
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
            <h1 className="text-white text-2xl font-bold">Community</h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 space-y-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users size={24} className="text-white" />
              <h2 className="text-white text-lg font-semibold">Support Groups</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">🎓</div>
                <p className="text-white text-sm">Exam Stress</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">💙</div>
                <p className="text-white text-sm">Anxiety Support</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle size={24} className="text-white" />
              <h2 className="text-white text-lg font-semibold">Recent Discussions</h2>
            </div>
            <div className="space-y-3">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{discussion.emoji}</span>
                    <div className="flex-1">
                      <h3 className="text-white font-medium mb-2">{discussion.title}</h3>
                      <div className="flex items-center gap-4 text-white/70 text-sm">
                        <span className="flex items-center gap-1">
                          <MessageCircle size={14} />
                          {discussion.replies}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart size={14} />
                          {discussion.likes}
                        </span>
                      </div>
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

export default Community;
