import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, path: "#", label: "Facebook" },
    { icon: Twitter, path: "#", label: "Twitter" },
    { icon: Instagram, path: "#", label: "Instagram" },
    { icon: Linkedin, path: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#050505] to-[#0b0f19] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Logo & Description */}
        <div className="text-left mb-8 md:mb-0 md:w-1/3">
          <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            TRAILLIO
          </Link>
          <p className="mt-3 text-gray-400 max-w-sm">
            Track your progress, achieve your goals, and celebrate your journey with Traillio's innovative platform.
          </p>
        </div>

        {/* Middle Section - Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-4 md:w-1/3">
          <a href="mailto:contact@traillio.com" className="flex items-center text-gray-400 hover:text-cyan-400 transition">
            <Mail className="w-5 h-5 mr-2" /> contact@traillio.com
          </a>
          <a href="tel:+1234567890" className="flex items-center text-gray-400 hover:text-cyan-400 transition">
            <Phone className="w-5 h-5 mr-2" /> (123) 456-7890
          </a>
          <div className="flex items-center text-gray-400">
            <MapPin className="w-5 h-5 mr-2" /> NIT Agartala, Tripura, India
          </div>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex justify-center md:justify-end space-x-6 md:w-1/3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.path}
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-cyan-400 
                  hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-cyan-400/50"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm border-t border-gray-700 pt-6 mt-8">
        © {year} Traillio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
