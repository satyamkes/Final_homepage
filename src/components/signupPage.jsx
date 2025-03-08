import React from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, User, ChevronRight, Building, LogIn, Calendar, CheckCircle } from "lucide-react";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center pt-20 bg-gradient-to-br from-[#050505] to-[#0b0f19] p-4">
      <div className="w-full max-w-[900px] flex flex-col md:flex-row bg-gradient-to-br from-[#0a0a23]/90 to-[#050517]/90 rounded-2xl overflow-hidden backdrop-blur-md border border-white/10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white relative">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
            Join Us Today!
          </h1>
          <h2 className="text-xl font-semibold text-gray-300">Start Your Learning Journey</h2>
          <p className="mt-4 text-sm text-gray-400 italic border-l-2 border-blue-500 pl-4">
            "Transform Your Potential into Achievement"
          </p>
          
          {/* Benefits */}
          <div className="mt-6 space-y-3">
            {["Track your progress in DSA & CP", "Get chatbot bot hints", "Explore internship & hackathon opportunities", "AI-powered progress prediction & ranking"].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="text-blue-400" size={20} /> {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Signup Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-[#020024]/80 to-[#090979]/80 text-white backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-8 text-center">Create Account</h2>
          <div className="space-y-5">
            {[{ icon: User, placeholder: "Full Name", type: "text" },
              { icon: Building, placeholder: "College Name", type: "text" },
              { icon: Mail, placeholder: "Email Address", type: "email" },
              { icon: Lock, placeholder: "Password", type: "password" }].map((input, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <input.icon size={18} />
                </div>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  className="w-full bg-white/5 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 px-10 py-3 transition-all duration-300"
                />
              </div>
            ))}
            {/* Year Selection */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Calendar size={18} />
              </div>
              <select className="w-full bg-white/5 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 px-10 py-3 transition-all duration-300 appearance-none">
                <option value="">Select Year</option>
                {["1st Year", "2nd Year", "3rd Year", "4th Year"].map((year, index) => (
                  <option key={index} value={year} className="text-gray-900">{year}</option>
                ))}
              </select>
            </div>
            {/* Sign Up Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 transition-all duration-300 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 group mt-6">
              Create Account
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            {/* Google Sign Up */}
            <button className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 transition-all duration-300 py-3 rounded-lg font-semibold text-gray-300 mt-4 border border-white/20">
              <LogIn size={18} className="text-blue-400" />
              Sign up with Google
            </button>
            {/* Sign In Link */}
            <p className="text-center text-sm text-gray-300 mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;