import React, { useState } from 'react';
import { Trophy, Star, TrendingUp } from 'lucide-react';

const LeaderboardCard = ({ rank, user, score, change, contests, maxRating, college }) => {
  const getRankColor = (rank) => {
    if (rank === 1) return "from-yellow-400 to-amber-600";
    if (rank === 2) return "from-gray-300 to-gray-400";
    if (rank === 3) return "from-amber-700 to-amber-800";
    return "from-cyan-500 to-indigo-500";
  };

  return (
    <div className="group relative bg-gradient-to-br from-[#0b0f19] to-[#050517] rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,200,255,0.3)] border border-white/10 p-6 transition-transform transform hover:-translate-y-1">
      <div className={`absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br ${getRankColor(rank)} 
        rounded-br-2xl flex items-center justify-center text-black font-bold text-xl`}>
        #{rank}
      </div>
      <div className="text-white pl-16">
        <h3 className="text-lg font-bold">{user}</h3>
        <p className="text-sm text-gray-400">{college}</p>
        <div className="flex justify-between mt-4">
          <p className="text-blue-400 font-bold">Score: {score}</p>
          <p className={`font-bold ${change > 0 ? 'text-green-400' : change < 0 ? 'text-red-400' : 'text-gray-400'}`}>
            {change > 0 ? '+' : ''}{change}
          </p>
        </div>
        <div className="mt-3 flex justify-between text-gray-400 text-sm">
          <div className="flex items-center"><Trophy className="w-4 h-4 mr-1 text-amber-400" /> {contests} contests</div>
          <div className="flex items-center"><Star className="w-4 h-4 mr-1 text-yellow-400" /> {maxRating} max rating</div>
          <div className="flex items-center"><TrendingUp className="w-4 h-4 mr-1 text-cyan-400" /> Top {Math.round(rank / 100 * 100)}%</div>
        </div>
      </div>
    </div>
  );
};

const Leaderboard = () => {
  const [timeFrame, setTimeFrame] = useState('weekly');
  const leaderboardData = [
    { rank: 1, user: "Sarafaraj Nasardi", college: "NIT Agartala", score: 850, change: +8, contests: 12, maxRating: 1304 },
    { rank: 2, user: "Sakina Khan", college: "NIT Agartala", score: 810, change: +13, contests: 16, maxRating: 1130 },
    { rank: 3, user: "Nikunj Chauhan", college: "NIT Agartala", score: 780, change: -12, contests: 8, maxRating: 910 },
    { rank: 4, user: "Satyam Kesarwani", college: "NIT Agartala", score: 740, change: -10, contests: 6, maxRating: 840 },
    { rank: 5, user: "Sayan Jyoti Das", college: "NIT Trichy", score: 660, change: +18, contests: 5, maxRating: 790 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050505] to-[#0b0f19] py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent mb-6">
            Competitive Programming Leaderboard
          </h1>
          <div className="flex justify-center mb-8 space-x-4">
            {['weekly', 'monthly'].map((time) => (
              <button
                key={time}
                onClick={() => setTimeFrame(time)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 
                  ${timeFrame === time 
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
              >
                {time.charAt(0).toUpperCase() + time.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          {leaderboardData.map((item) => (
            <LeaderboardCard key={item.rank} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;