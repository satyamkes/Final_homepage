import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const TeamCard = ({ img, name, role, socialLinks }) => {
  return (
    <div className="group relative bg-gradient-to-br from-[#0A0F1E] to-[#1A1F3C] bg-opacity-50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-cyan-500/30 hover:shadow-pink-500/40 transition-all duration-500 w-full max-w-sm">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-pink-900/50 group-hover:to-cyan-900/50 transition-all duration-500" />
      
      {/* Profile Image */}
      <div className="relative p-8 flex flex-col items-center">
        <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg transform group-hover:scale-105 transition-all duration-500">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-500">
            {name}
          </h3>
          <p className="mt-2 text-gray-300 group-hover:text-gray-400 transition-colors duration-500">
            {role}
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-4 flex justify-center space-x-4">
          {socialLinks.github && (
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-full bg-[#1A1F3C] text-gray-400 hover:bg-cyan-600 hover:text-white transition-all duration-500">
              <Github className="w-5 h-5" />
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full bg-[#1A1F3C] text-gray-400 hover:bg-cyan-600 hover:text-white transition-all duration-500">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {socialLinks.email && (
            <a href={`mailto:${socialLinks.email}`}
               className="p-2 rounded-full bg-[#1A1F3C] text-gray-400 hover:bg-cyan-600 hover:text-white transition-all duration-500">
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Satyam Kumar Kesarwani",
      role: "Team Leader and Frontend Developer",
      img: "/img.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/satyam-kumar-kesarwani-763b61293",
        github: "https://github.com/satyamkes",
        email: "satyamkesarwani2020@gmail.com"
      }
    },
    {
      name: "Nikunj Chauhan",
      role: "Lead Frontend Developer and ML Developer",
      img: "/nikunj.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/nikunj-chauhan-9781832b2",
        github: "https://github.com/nkca122",
        email: "nkca122@gmail.com"
      }
    },
    {
      name: "Sayan Jyoti Das",
      role: "Lead Backend Developer",
      img: "/sayan.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/sayanjyotidas",
        github: "https://github.com/sayandas",
        email: "sayan@example.com"
      }
    },
    {
      name: "Sakina Khan",
      role: "Backend Developer",
      img: "/sakina.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/sakina-khan-a03968278",
        github: "https://github.com/sakina_khan",
        email: "sakina@example.com"
      }
    },
    {
      name: "Sarafaraj Nasardi",
      role: "Backend Developer and Tester",
      img: "/sarafaraj.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/sarafaraj-nasardi-7722b31b3",
        github: "https://github.com/sarafarajnasardi",
        email: "sarafarajnasardi786@gmail.com"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F1E] to-[#1A1F3C] text-white py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-12">
          Meet Our Team
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16">
          Our dedicated team of professionals works tirelessly to bring you the best progress-tracking experience. Each member brings unique expertise and passion to make Traillio exceptional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 align-middle w-[100%]">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex justify-center">
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
