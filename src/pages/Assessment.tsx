
import React, { useState } from 'react';
import { ArrowLeft, Brain, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavigationBar } from '@/components/NavigationBar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Assessment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

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

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmit = () => {
    const unansweredQuestions = questions.filter(q => !answers[q.id]);
    
    if (unansweredQuestions.length > 0) {
      toast({
        title: "Incomplete Assessment",
        description: "Please answer all questions before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Calculate a simple score based on answers
    const scores = {
      "Very good": 5, "Very well": 5, "Very high": 5,
      "Good": 4, "Well": 4, "High": 4,
      "Okay": 3, "Normal": 3,
      "Not good": 2, "Poorly": 2, "Low": 2,
      "Very bad": 1, "Very poorly": 1, "Very low": 1
    };

    const totalScore = Object.values(answers).reduce((sum, answer) => {
      return sum + (scores[answer as keyof typeof scores] || 0);
    }, 0);

    const maxScore = questions.length * 5;
    const percentage = (totalScore / maxScore) * 100;

    let message = "";
    if (percentage >= 80) {
      message = "You're doing great! Keep up the positive momentum.";
    } else if (percentage >= 60) {
      message = "You're doing well, but consider exploring our meditation and peer support features.";
    } else if (percentage >= 40) {
      message = "It seems you're going through a challenging time. Consider reaching out for support.";
    } else {
      message = "We're here to help. Please consider using our SOS feature or connecting with peer support.";
    }

    toast({
      title: "Assessment Complete",
      description: message,
    });

    // Navigate back to home after a short delay
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const isComplete = questions.every(q => answers[q.id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600">
      <div className="pb-20">
        {/* Header */}
        <div className="px-4 pt-12 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <button 
              onClick={() => navigate('/')}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
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
                        onClick={() => handleAnswerSelect(q.id, option)}
                        className={`w-full text-left p-3 rounded-lg text-white/80 transition-colors ${
                          answers[q.id] === option
                            ? 'bg-white/30 border-2 border-white/50'
                            : 'bg-white/10 hover:bg-white/20'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Button 
              onClick={handleSubmit}
              disabled={!isComplete}
              className={`w-full mt-6 rounded-full py-3 font-medium transition-all ${
                isComplete 
                  ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white' 
                  : 'bg-gray-400 text-gray-200 cursor-not-allowed'
              }`}
            >
              <CheckCircle size={20} className="mr-2" />
              Complete Assessment
            </Button>

            {!isComplete && (
              <p className="text-white/60 text-sm text-center mt-2">
                Please answer all questions to complete the assessment
              </p>
            )}
          </div>
        </div>
      </div>
      
      <NavigationBar />
    </div>
  );
};

export default Assessment;
