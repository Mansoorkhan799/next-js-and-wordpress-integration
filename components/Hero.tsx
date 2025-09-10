'use client';

import { ArrowRight, Star, Users, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [stats] = useState({ rating: 4.7, users: 1000000, tools: 50 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gradient-to-b from-github-dark to-github-dark-secondary py-20 relative overflow-hidden">
      {/* Professional Galaxy Background */}
      <div className="absolute inset-0">
        {/* Deep Space Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-github-dark/50 to-indigo-900/20"></div>
        
        {/* Galaxy Core */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10">
          <div className="w-full h-full rounded-full bg-gradient-radial from-github-accent/15 via-github-accent/8 to-transparent animate-galaxy-pulse"></div>
        </div>
        
        {/* Spiral Arms */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 opacity-5 animate-spiral-drift">
            <div className="w-full h-full rounded-full bg-gradient-radial from-github-accent/10 via-github-accent/5 to-transparent"></div>
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 opacity-5 animate-spiral-drift" style={{ animationDelay: '3s' }}>
            <div className="w-full h-full rounded-full bg-gradient-radial from-github-accent/10 via-github-accent/5 to-transparent"></div>
          </div>
        </div>
        
        {/* Professional Star Field */}
        <div className="absolute inset-0">
          {[
            { left: '10%', top: '15%', size: 'w-0.5 h-0.5', brightness: 'bg-white', opacity: 'opacity-100' },
            { left: '25%', top: '8%', size: 'w-px h-px', brightness: 'bg-gray-200', opacity: 'opacity-60' },
            { left: '40%', top: '20%', size: 'w-0.5 h-0.5', brightness: 'bg-gray-400', opacity: 'opacity-30' },
            { left: '60%', top: '12%', size: 'w-px h-px', brightness: 'bg-white', opacity: 'opacity-100' },
            { left: '80%', top: '18%', size: 'w-0.5 h-0.5', brightness: 'bg-gray-200', opacity: 'opacity-60' },
            { left: '15%', top: '35%', size: 'w-px h-px', brightness: 'bg-gray-400', opacity: 'opacity-30' },
            { left: '35%', top: '42%', size: 'w-0.5 h-0.5', brightness: 'bg-white', opacity: 'opacity-100' },
            { left: '55%', top: '38%', size: 'w-px h-px', brightness: 'bg-gray-200', opacity: 'opacity-60' },
            { left: '75%', top: '45%', size: 'w-0.5 h-0.5', brightness: 'bg-gray-400', opacity: 'opacity-30' },
            { left: '90%', top: '32%', size: 'w-px h-px', brightness: 'bg-white', opacity: 'opacity-100' },
            { left: '5%', top: '55%', size: 'w-0.5 h-0.5', brightness: 'bg-gray-200', opacity: 'opacity-60' },
            { left: '20%', top: '62%', size: 'w-px h-px', brightness: 'bg-gray-400', opacity: 'opacity-30' },
            { left: '45%', top: '58%', size: 'w-0.5 h-0.5', brightness: 'bg-white', opacity: 'opacity-100' },
            { left: '65%', top: '65%', size: 'w-px h-px', brightness: 'bg-gray-200', opacity: 'opacity-60' },
            { left: '85%', top: '52%', size: 'w-0.5 h-0.5', brightness: 'bg-gray-400', opacity: 'opacity-30' },
            { left: '12%', top: '75%', size: 'w-px h-px', brightness: 'bg-white', opacity: 'opacity-100' },
            { left: '30%', top: '82%', size: 'w-0.5 h-0.5', brightness: 'bg-gray-200', opacity: 'opacity-60' },
            { left: '50%', top: '78%', size: 'w-px h-px', brightness: 'bg-gray-400', opacity: 'opacity-30' },
            { left: '70%', top: '85%', size: 'w-0.5 h-0.5', brightness: 'bg-white', opacity: 'opacity-100' },
            { left: '88%', top: '72%', size: 'w-px h-px', brightness: 'bg-gray-200', opacity: 'opacity-60' }
          ].map((star, i) => (
            <div
              key={i}
              className={`absolute ${star.size} ${star.brightness} ${star.opacity} rounded-full animate-star-twinkle`}
              style={{
                left: star.left,
                top: star.top,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 3)}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Subtle Cosmic Dust */}
        <div className="absolute inset-0">
          {[
            { left: '8%', top: '25%' }, { left: '22%', top: '48%' }, { left: '38%', top: '28%' }, { left: '58%', top: '48%' }, { left: '78%', top: '28%' },
            { left: '16%', top: '72%' }, { left: '44%', top: '76%' }, { left: '64%', top: '26%' }, { left: '86%', top: '72%' }, { left: '96%', top: '46%' },
            { left: '12%', top: '18%' }, { left: '28%', top: '12%' }, { left: '42%', top: '22%' }, { left: '58%', top: '14%' }, { left: '72%', top: '20%' },
            { left: '18%', top: '38%' }, { left: '32%', top: '45%' }, { left: '48%', top: '40%' }, { left: '68%', top: '47%' }, { left: '82%', top: '34%' },
            { left: '6%', top: '58%' }, { left: '24%', top: '64%' }, { left: '38%', top: '60%' }, { left: '58%', top: '67%' }, { left: '78%', top: '54%' },
            { left: '14%', top: '78%' }, { left: '32%', top: '84%' }, { left: '52%', top: '80%' }, { left: '72%', top: '87%' }, { left: '88%', top: '74%' },
            { left: '4%', top: '35%' }, { left: '26%', top: '55%' }, { left: '46%', top: '35%' }, { left: '66%', top: '55%' }, { left: '84%', top: '35%' },
            { left: '10%', top: '68%' }, { left: '36%', top: '72%' }, { left: '56%', top: '22%' }, { left: '76%', top: '68%' }, { left: '92%', top: '42%' }
          ].map((dust, i) => (
            <div
              key={`dust-${i}`}
              className="absolute w-1 h-1 bg-github-accent/20 rounded-full animate-cosmic-drift"
              style={{
                left: dust.left,
                top: dust.top,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${8 + (i % 4)}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Professional Grid Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Professional Content Container */}
        <div className="relative z-10">
          <div className="text-center">
            {/* GitHub-style Badge */}
            <div className={`inline-flex items-center px-4 py-2 rounded-full bg-github-dark-secondary/50 border border-github-border/30 mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '0.1s' }}>
              <div className="w-2 h-2 bg-github-accent rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm text-github-text-secondary font-medium">AI Tools Platform</span>
            </div>

            {/* Main heading with GitHub-style typography */}
            <h1 className={`text-5xl md:text-7xl font-bold text-github-text mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className={`block transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`} style={{ transitionDelay: '0.2s' }}>
                Discover Powerful
              </span>
              <span className={`text-github-accent block transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`} style={{ transitionDelay: '0.4s' }}>
                AI Tools
              </span>
            </h1>

            {/* Professional description */}
            <p className={`text-xl text-github-text-secondary mb-10 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '0.6s' }}>
              Explore our curated collection of cutting-edge AI tools for productivity, 
              creativity, and automation. Find the perfect tool to enhance your workflow.
            </p>
          
            {/* GitHub-style Action Button */}
            <div className={`flex justify-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '0.8s' }}>
              <button 
                onClick={() => {
                  const toolsSection = document.getElementById('featured-tools');
                  if (toolsSection) {
                    toolsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative px-8 py-4 bg-github-accent text-white font-semibold rounded-lg hover:bg-github-accent/90 transition-all duration-300 hover:shadow-xl hover:shadow-github-accent/25 hover:scale-105 flex items-center justify-center space-x-3 cursor-pointer"
              >
                <span>Explore Tools</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Professional Stats Section */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '1s' }}>
              <div className="group relative p-6 bg-github-dark-secondary/30 border border-github-border/20 rounded-xl hover:border-github-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-github-accent/10">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-2 bg-github-accent/10 rounded-lg mr-3 group-hover:bg-github-accent/20 transition-colors duration-300">
                    <Star className="text-github-accent w-5 h-5 transition-transform duration-300" />
                  </div>
                  <span className="text-3xl font-bold text-github-text">
                    {stats.rating.toFixed(1)}
                  </span>
                </div>
                <p className="text-github-text-secondary text-sm font-medium group-hover:text-github-accent transition-colors duration-300">Average Rating</p>
              </div>
              
              <div className="group relative p-6 bg-github-dark-secondary/30 border border-github-border/20 rounded-xl hover:border-github-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-github-accent/10">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-2 bg-github-accent/10 rounded-lg mr-3 group-hover:bg-github-accent/20 transition-colors duration-300">
                    <Users className="text-github-accent w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-3xl font-bold text-github-text">
                    {(stats.users / 1000000).toFixed(1)}M+
                  </span>
                </div>
                <p className="text-github-text-secondary text-sm font-medium group-hover:text-github-accent transition-colors duration-300">Active Users</p>
              </div>
              
              <div className="group relative p-6 bg-github-dark-secondary/30 border border-github-border/20 rounded-xl hover:border-github-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-github-accent/10">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-2 bg-github-accent/10 rounded-lg mr-3 group-hover:bg-github-accent/20 transition-colors duration-300">
                    <Download className="text-github-accent w-5 h-5 group-hover:animate-bounce transition-transform duration-300" />
                  </div>
                  <span className="text-3xl font-bold text-github-text">
                    {stats.tools}+
                  </span>
                </div>
                <p className="text-github-text-secondary text-sm font-medium group-hover:text-github-accent transition-colors duration-300">AI Tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
