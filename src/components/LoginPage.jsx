import React from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, ChevronRight } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#050505] to-[#0b0f19] p-4">
      <div className="w-full max-w-[900px] flex flex-col md:flex-row bg-gradient-to-br from-[#0b0f19]/90 to-[#050517]/90 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,200,255,0.3)] backdrop-blur-md border border-white/10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Welcome Back!
            </h1>
            <h2 className="text-xl font-semibold text-gray-300">
              Your Gateway to Progress
            </h2>
            <p className="mt-4 text-sm text-gray-400 italic border-l-2 border-cyan-400 pl-4">
              "Track your growth, refine your skills, and conquer your goals with ease!"
            </p>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-[#0b0f19]/80 to-[#0a0a23]/80 text-white backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Sign In</h2>

          <div className="space-y-6">
            {/* Email */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white/5 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 px-10 py-3 transition-all duration-300"
              />
            </div>

            {/* Password */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Lock size={18} />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-white/5 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 px-10 py-3 transition-all duration-300"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-cyan-400 focus:ring-cyan-400" />
                <span className="text-gray-300">Remember me</span>
              </label>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <button className="w-full bg-gradient-to-r from-cyan-500 to-indigo-400 hover:from-cyan-400 hover:to-indigo-300 transition-all duration-300 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 group">
              Sign In
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-300 mt-6">
              Don't have an account?{" "}
              <Link to="/signupPage" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
