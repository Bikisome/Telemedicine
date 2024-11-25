import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, Users, Globe } from 'lucide-react';

const HomePage = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  
  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative flex items-center justify-center p-4">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 opacity-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLTEwIDMwaDYwdi0yMGgtNjB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] animate-slide" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float-slow">
          <Users className="w-8 h-8 text-purple-300 opacity-30" />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-float">
          <Globe className="w-12 h-12 text-purple-400 opacity-20" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float-slow">
          <Sparkles className="w-6 h-6 text-purple-200 opacity-40" />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-md w-full relative">
        {/* Glowing card effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
        
        <div className="relative bg-black rounded-2xl shadow-2xl p-8 space-y-8 border border-purple-500/20">
          {/* Header section */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Sparkles className="w-12 h-12 text-purple-500 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient">
              Connect & Create
            </h1>
            <p className="text-gray-400 text-lg">
              Where every room tells a different story
            </p>
          </div>

          {/* Input section */}
          <div className="space-y-6">
            <div className="group">
              <div className="relative">
                <input
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  type="text"
                  placeholder="Enter Room Code"
                  className="w-full px-6 py-4 bg-purple-950/30 rounded-xl border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition-all duration-300 text-purple-50 placeholder-purple-300/50 text-lg backdrop-blur-sm"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>

            <button
              onClick={handleJoinRoom}
              className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 p-px rounded-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-black rounded-xl p-4 transition-all duration-300 group-hover:bg-transparent">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg font-semibold text-white">Talk to Our Doctors</span>
                  <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          </div>

          {/* Footer section */}
          <div className="text-center">
            <p className="text-purple-300/60 text-sm">
              Join {Math.floor(Math.random() * 900 + 100)} others exploring right now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add these custom animations to your CSS/Tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes slide {
    from { transform: translateX(0); }
    to { transform: translateX(40px); }
  }
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  @keyframes float-slow {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-slide {
    animation: slide 20s linear infinite;
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }
  .animate-gradient {
    background-size: 200% auto;
    animation: gradient 4s linear infinite;
  }
`;
document.head.appendChild(style);

export default HomePage;