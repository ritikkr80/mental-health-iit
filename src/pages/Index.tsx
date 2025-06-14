
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { AuthForm } from '@/components/Auth/AuthForm';
import { Header } from '@/components/Header';
import { MoodTracker } from '@/components/MoodTracker';
import { PeerSupport } from '@/components/PeerSupport';
import { ContentHub } from '@/components/ContentHub';
import { SOSButton } from '@/components/SOSButton';
import { NavigationBar } from '@/components/NavigationBar';

const Index = () => {
  const { user } = useAuth();
  const [currentMood, setCurrentMood] = useState<string>('😊');

  // Show authentication form if user is not logged in
  if (!user) {
    return <AuthForm />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600">
      <div className="pb-20">
        <Header />
        
        <div className="px-4 space-y-4">
          <MoodTracker currentMood={currentMood} setCurrentMood={setCurrentMood} />
          <PeerSupport />
          <ContentHub />
          <SOSButton />
        </div>
      </div>
      
      <NavigationBar />
    </div>
  );
};

export default Index;
