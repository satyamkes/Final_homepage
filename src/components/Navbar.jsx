import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "About", path: "/about" },
    { title: "Features", path: "/features" },
    { title: "Our Team", path: "/OurTeam" },
    { title: "LeaderBoard", path: "/leaderboard" },
    { title: "FocusTimer", path: "/focustimer" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-poppins
        ${isScrolled 
          ? "bg-[#0b0f19]/90 shadow-lg backdrop-blur-md py-2" 
          : "bg-transparent py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative">
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 
              bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-400 
              group-hover:to-indigo-300 transition-all duration-500">
              TRAILLIO
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 
              to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 rounded-xl text-gray-300 hover:text-white
                  transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10 font-medium">{link.title}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 
                  opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 
                  transition-all duration-500 rounded-xl" />
              </Link>
            ))}
            
            <Link to="/login">
              <button className="ml-4 px-6 py-2.5 rounded-xl font-semibold text-sm
                relative group overflow-hidden">
                <span className="relative z-10 text-white">Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-0 
                  group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100" />
                <div className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500">
                  <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-indigo-500 blur-xl" />
                </div>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-300 hover:bg-gray-700/40 
              transition-colors duration-300 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 
              opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 relative z-10" />
            ) : (
              <Menu className="w-6 h-6 relative z-10" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        } overflow-hidden`}>
          <div className="py-3 space-y-2 bg-[#0b0f19]/90 backdrop-blur-md rounded-2xl p-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2.5 rounded-xl text-gray-300 hover:text-white 
                  hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500
                  transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link 
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4 px-4 py-2.5 rounded-xl text-center font-semibold
                text-white bg-gradient-to-r from-cyan-500 to-indigo-500
                hover:from-cyan-400 hover:to-indigo-400
                transition-all duration-300 transform hover:scale-[1.02]"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Highlight Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r 
        from-transparent via-cyan-400 to-transparent opacity-50 transition-opacity duration-500
        ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
    </nav>
  );
};

export default Navbar;
