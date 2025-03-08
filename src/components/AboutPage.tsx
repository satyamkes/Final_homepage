import React from "react";
import { Target, Users, Shield, Award, LineChart, Sparkles, Heart, Globe } from "lucide-react";
import Navbar from "./Navbar";

const AboutSection = ({ title, children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 py-16 ${className} animate-fade-up`}>
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 
      bg-clip-text text-transparent mb-12 text-center transform hover:scale-105 transition-all duration-500">
      {title}
    </h2>
    {children}
  </div>
);

const ValueCard = ({ icon: Icon, title, description, index }) => (
  <div 
    className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl 
      border border-white/10 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:z-10"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    {/* Background Glow */}
    <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 
      group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl`}></div>
    
    {/* Icon */}
    <div className="flex items-center gap-4 mb-4">
      <div className={`p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-pink-500 group-hover:scale-110 transition-transform duration-500`}>
        <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    
    {/* Description */}
    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
      {description}
    </p>

    {/* Hover Line Effect */}
    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 
      group-hover:w-full transition-all duration-500"></div>
  </div>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F1E] to-[#1A1F3C] text-white overflow-hidden">
      <Navbar />

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

      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-32 overflow-hidden text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-cyan-400 to-pink-400 mb-8 transform hover:scale-105 transition-all duration-500">
          About Traillio
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-up">
          Empowering individuals and teams to track, analyze, and visualize their progress 
          with intuitive tools and powerful insights.
        </p>
      </div>

      {/* Mission Section */}
      <AboutSection title="Our Mission">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard icon={Target} title="Purpose-Driven" description="Making progress tracking accessible and meaningful for everyone." index={0} />
          <ValueCard icon={Users} title="Community-Focused" description="Building a supportive community where users inspire each other." index={1} />
          <ValueCard icon={Shield} title="Trust & Security" description="Ensuring data security with industry-leading measures." index={2} />
        </div>
      </AboutSection>

      {/* Features Section */}
      <AboutSection title="Why Choose Traillio" className="bg-[#0a0a23]/80 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard icon={LineChart} title="Smart Analytics" description="Track and analyze progress across multiple platforms." index={0} />
          <ValueCard icon={Sparkles} title="Intuitive Design" description="A smooth, distraction-free user experience." index={1} />
          <ValueCard icon={Heart} title="Leaderboard Ranking" description="Personalized progress tracking with rankings." index={2} />
          <ValueCard icon={Globe} title="AI Coding Assistant" description="AI-powered hints for solving coding problems." index={3} />
        </div>
      </AboutSection>

    </div>
  );
};

export default AboutPage;
