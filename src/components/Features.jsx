import React from "react";
import { Brain, Trophy, BookOpen, Newspaper } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "AI-Powered Progress Prediction",
      description: "Our advanced AI algorithms analyze your coding patterns to predict growth trajectories and provide personalized recommendations",
      icon: Brain,
      gradient: "from-cyan-500 to-pink-500",
      delay: "delay-0"
    },
    {
      title: "College Leaderboard Ranking",
      description: "Compete with peers, track your position, and showcase your skills across different colleges nationwide",
      icon: Trophy,
      gradient: "from-pink-500 to-purple-500",
      delay: "delay-100"
    },
    {
      title: "Focused Learning Environment",
      description: "Immerse yourself in a distraction-free coding environment with structured learning paths",
      icon: BookOpen,
      gradient: "from-purple-500 to-cyan-500",
      delay: "delay-200"
    },
    {
      title: "Industry Insights & Tech News",
      description: "Stay ahead with curated tech news and industry trends that matter to your career growth",
      icon: Newspaper,
      gradient: "from-cyan-500 to-purple-500",
      delay: "delay-300"
    }
  ];

  return (
    <div className="h-screen bg-gradient-to-b from-[#0A0F1E] to-[#1A1F3C] text-white overflow-scroll">
      {/* Floating Particles */}
      <div className="fixed inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-pink-500/30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            FEATURES
          </h1>
          
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 blur-xl opacity-20 animate-pulse"></div>
            <h2 className="relative text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
              CODING ANALYSIS & PROGRESS TRACKING
            </h2>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl 
                border border-white/10 hover:border-cyan-500/50 transition-all duration-500 ${feature.delay}
                hover:transform hover:scale-105 hover:z-10`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 
                group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl`}></div>

              {/* Icon */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover Line Effect */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 
                group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-20">
          <p className="text-lg text-cyan-400 italic">
            "Transform your coding journey with data-driven insights and focused learning"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
