import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const LandingPage = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #020617, #0F172A, #1E293B)",
      }}
    >
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="text-center z-10">
        {/* Main Title */}
        <h1 className="uppercase text-8xl md:text-9xl leading-none tracking-wide font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-500">
          TRAILLIO
        </h1>

        {/* Subtitle */}
        <h2 className="uppercase text-2xl md:text-3xl mt-2 opacity-80 hover:opacity-100 transition-opacity">
          Progress Tracker
        </h2>

        {/* Progress Quote */}
        <p className="mt-6 text-lg italic text-gray-400 max-w-xl mx-auto transition-all duration-300 hover:text-white px-4">
          "From Small Steps to Giant Leaps: Illuminate Your Progress!"
        </p>

        {/* Buttons Container */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Get Started Button */}
          <Link to="/login">
            <button className="group px-8 py-3 text-lg font-semibold tracking-wide rounded-xl relative transition-all duration-500 
              bg-blue-500/20 backdrop-blur-lg border border-blue-300/30 
              hover:scale-105 hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] hover:border-blue-400
              flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </Link>

          {/* Features Button */}
          <Link to="/features">
          <button className="group px-8 py-3 text-lg font-semibold tracking-wide rounded-xl relative transition-all duration-500 
            bg-purple-500/20 backdrop-blur-lg border border-purple-300/30 
            hover:scale-105 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:border-purple-400
            flex items-center gap-2">
            Features
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
