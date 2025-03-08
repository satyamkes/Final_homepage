import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Award, Trophy, Zap, Brain } from "lucide-react";

const FocusTimer = () => {
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(100);
  const [level, setLevel] = useState(1);
  const [experience, setExperience] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [totalFocusTime, setTotalFocusTime] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      setExperience((prev) => prev + 100);
      setCurrentStreak((prev) => prev + 1);
      setTotalFocusTime((prev) => prev + 25);
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    setProgress((timeLeft / 1500) * 100);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 opacity-60" />
      <div className="relative z-10 max-w-xl w-full p-10 bg-black/30 rounded-3xl border border-white/20 shadow-lg backdrop-blur-lg transition-all duration-500 ease-in-out flex flex-col items-center">
        <div className="flex justify-between items-center w-full mb-6 text-neon-blue">
          <div className="flex items-center space-x-2">
            <Brain className="w-6 h-6" />
            <span>Level {level}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-6 h-6 text-yellow-300" />
            <span>{experience} XP</span>
          </div>
        </div>

        {/* Timer Circle */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          <svg width="200" height="200" viewBox="0 0 200 200" className="transform -rotate-90">
            {/* Background Circle */}
            <circle cx="100" cy="100" r="90" strokeWidth="8" stroke="gray" fill="transparent" />
            
            {/* Animated Progress Circle */}
            <circle
              cx="100"
              cy="100"
              r="90"
              strokeWidth="8"
              stroke="cyan"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 90}
              strokeDashoffset={(1 - progress / 100) * 2 * Math.PI * 90}
              strokeLinecap="round"
              className="transition-all duration-700 ease-in-out"
            />
          </svg>
          
          {/* Timer Text */}
          <div className="absolute text-4xl font-bold text-neon-blue">
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-6 mt-6">
          <button onClick={() => setIsRunning(!isRunning)} className="p-4 rounded-full bg-neon-blue hover:scale-110 transition-transform">
            {isRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
          <button onClick={() => setTimeLeft(1500)} className="p-4 rounded-full bg-red-500 hover:scale-110 transition-transform">
            <RotateCcw className="w-6 h-6" />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-4 text-center text-sm text-gray-300">
          <p>🔥 Streak: {currentStreak} days</p>
          <p>⏳ Total Focus Time: {totalFocusTime} mins</p>
        </div>

        {/* Celebration Popup */}
        {showCelebration && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 opacity-100 transition-opacity duration-700">
            <div className="p-8 bg-black/40 backdrop-blur-lg rounded-xl text-center border border-white/20 animate-bounce">
              <Award className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
              <h2 className="text-xl font-bold">Great Job!</h2>
              <p className="text-neon-blue font-semibold text-lg">+100 XP</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FocusTimer;
