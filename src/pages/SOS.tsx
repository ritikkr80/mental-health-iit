
import React from 'react';
import { ArrowLeft, Phone, MessageCircle, MapPin, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavigationBar } from '@/components/NavigationBar';
import { Button } from '@/components/ui/button';

const SOS = () => {
  const navigate = useNavigate();

  const emergencyContacts = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 crisis support"
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Text-based crisis support"
    },
    {
      name: "Emergency Services",
      number: "911",
      description: "For immediate medical emergencies"
    }
  ];

  const quickActions = [
    {
      title: "Talk to Someone Now",
      description: "Connect with a crisis counselor",
      icon: MessageCircle,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Find Nearby Help",
      description: "Locate crisis centers near you",
      icon: MapPin,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Self-Care Resources",
      description: "Immediate coping strategies",
      icon: Heart,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 via-red-500 to-red-600">
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
            <h1 className="text-white text-2xl font-bold">🆘 Emergency Support</h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 space-y-4">
          {/* Emergency Notice */}
          <div className="bg-white rounded-2xl p-6 border-2 border-red-200">
            <h2 className="text-red-700 text-lg font-bold mb-2">You're Not Alone</h2>
            <p className="text-red-600 mb-4">
              If you're having thoughts of suicide or self-harm, please reach out for help immediately. 
              There are people who want to support you.
            </p>
            <p className="text-red-500 text-sm">
              If this is a medical emergency, call 911 or go to your nearest emergency room.
            </p>
          </div>

          {/* Emergency Contacts */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h2 className="text-white text-lg font-semibold mb-4">Emergency Contacts</h2>
            <div className="space-y-3">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{contact.name}</h3>
                      <p className="text-white/70 text-sm">{contact.description}</p>
                    </div>
                    <Button className="bg-white text-red-600 hover:bg-white/90 rounded-full px-4 py-2 font-bold">
                      <Phone size={16} className="mr-2" />
                      {contact.number}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h2 className="text-white text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <button
                    key={index}
                    className="w-full bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${action.color}`}>
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-white font-medium">{action.title}</h3>
                        <p className="text-white/70 text-sm">{action.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      <NavigationBar />
    </div>
  );
};

export default SOS;
