
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const SOSButton = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-6 shadow-lg">
      <div className="text-center">
        <h3 className="text-red-700 font-bold text-lg mb-2">Need Immediate Help?</h3>
        <p className="text-red-600 text-sm mb-4">
          Access emergency support and crisis resources
        </p>
        <Button 
          onClick={() => navigate('/sos')}
          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full px-8 py-3 font-bold text-lg shadow-lg"
        >
          🆘 SOS - Get Help Now
        </Button>
      </div>
    </div>
  );
};
