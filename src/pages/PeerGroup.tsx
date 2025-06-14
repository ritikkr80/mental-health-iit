
import React from 'react';
import { ArrowLeft, Users, Video, MessageCircle, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavigationBar } from '@/components/NavigationBar';
import { Button } from '@/components/ui/button';

const PeerGroup = () => {
  const navigate = useNavigate();

  const upcomingSessions = [
    {
      id: 1,
      title: "Anxiety Support Circle",
      time: "Today, 3:00 PM",
      participants: 8,
      maxParticipants: 12
    },
    {
      id: 2,
      title: "Student Stress Management",
      time: "Tomorrow, 7:00 PM",
      participants: 5,
      maxParticipants: 10
    },
    {
      id: 3,
      title: "Mindfulness & Meditation",
      time: "Friday, 6:00 PM",
      participants: 12,
      maxParticipants: 15
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
            <h1 className="text-white text-2xl font-bold">Peer Group Meetup</h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 space-y-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users size={24} className="text-white" />
              <h2 className="text-white text-lg font-semibold">Join a Support Group</h2>
            </div>
            <p className="text-white/80 mb-6">
              Connect with others who understand what you're going through. Share experiences and support each other.
            </p>

            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="bg-white/10 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-white font-medium">{session.title}</h3>
                    <span className="text-white/70 text-sm">{session.participants}/{session.maxParticipants}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={16} className="text-white/70" />
                    <span className="text-white/70 text-sm">{session.time}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full">
                      <Video size={16} className="mr-2" />
                      Join Video Call
                    </Button>
                    <Button className="bg-white/20 hover:bg-white/30 text-white rounded-full px-4">
                      <MessageCircle size={16} />
                    </Button>
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

export default PeerGroup;
