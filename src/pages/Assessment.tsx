
import React from 'react';
import { ArrowLeft, Brain, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavigationBar } from '@/components/NavigationBar';
import { Button } from '@/components/ui/button';

const Assessment = () => {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      question: "How have you been feeling overall this week?",
      options: ["Very good", "Good", "Okay", "Not good", "Very bad"]
    },
    {
      id: 2,
      question: "How well have you been sleeping?",
      options: ["Very well", "Well", "Okay", "Poorly", "Very poorly"]
    },
    {
      id: 3,
      question: "How is your energy level?",
      options: ["Very high", "High", "Normal", "Low", "Very low"]
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
            <h1 className="text-white text-2xl font-bold">Self Assessment</h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 space-y-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Brain size={24} className="text-white" />
              <h2 className="text-white text-lg font-semibold">Mental Health Check</h2>
            </div>
            <p className="text-white/80 mb-6">
              Take a moment to reflect on your current mental state. This assessment will help guide you to the right resources.
            </p>

            <div className="space-y-6">
              {questions.map((q) => (
                <div key={q.id} className="bg-white/10 rounded-xl p-4">
                  <h3 className="text-white font-medium mb-3">{q.question}</h3>
                  <div className="space-y-2">
                    {q.options.map((option, index) => (
                      <button
                        key={index}
                        className="w-full text-left p-3 bg-white/10 rounded-lg text-white/80 hover:bg-white/20 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full py-3">
              <CheckCircle size={20} className="mr-2" />
              Complete Assessment
            </Button>
          </div>
        </div>
      </div>
      
      <NavigationBar />
    </div>
  );
};

export default Assessment;
