
import React from 'react';
import { ArrowLeft, User, Bell, Shield, LogOut, Moon, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { NavigationBar } from '@/components/NavigationBar';
import { Button } from '@/components/ui/button';

const Settings = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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
            <h1 className="text-white text-2xl font-bold">Settings</h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 space-y-4">
          {/* Profile Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <User size={24} className="text-white" />
              <h2 className="text-white text-lg font-semibold">Profile</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/80">Name</span>
                <span className="text-white">{user?.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">Email</span>
                <span className="text-white">{user?.email}</span>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Bell size={24} className="text-white" />
              <h2 className="text-white text-lg font-semibold">Preferences</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white">Daily Reminders</span>
                <button className="w-12 h-6 bg-white/20 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">Dark Mode</span>
                <button className="w-12 h-6 bg-white/20 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield size={24} className="text-white" />
              <h2 className="text-white text-lg font-semibold">Privacy</h2>
            </div>
            <div className="space-y-3">
              <button className="w-full text-left text-white/80 hover:text-white transition-colors">
                Data Export
              </button>
              <button className="w-full text-left text-white/80 hover:text-white transition-colors">
                Delete Account
              </button>
            </div>
          </div>

          {/* Logout */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <Button
              onClick={handleLogout}
              variant="destructive"
              className="w-full flex items-center gap-2 bg-red-500 hover:bg-red-600"
            >
              <LogOut size={20} />
              Logout
            </Button>
          </div>
        </div>
      </div>
      
      <NavigationBar />
    </div>
  );
};

export default Settings;
