'use client';

import { ArrowRight, Star, Download, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({ rating: 0, users: 0, tools: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate stats counting
    const animateStats = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          rating: Math.min(4.7, progress * 4.7),
          users: Math.min(1000000, Math.floor(progress * 1000000)),
          tools: Math.min(50, Math.floor(progress * 50))
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
          setStats({ rating: 4.7, users: 1000000, tools: 50 });
        }
      }, stepDuration);
      
      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-b from-github-dark to-github-dark-secondary py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-github-accent rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-github-accent rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-github-accent rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-github-accent rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Main heading with staggered animation */}
          <h1 className={`text-4xl md:text-6xl font-bold text-github-text mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className={`inline-block transition-all duration-1000 ${
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

          {/* Description with fade-in animation */}
          <p className={`text-xl text-github-text-secondary mb-8 max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '0.6s' }}>
            Explore our curated collection of cutting-edge AI tools for productivity, 
            creativity, and automation. Find the perfect tool to enhance your workflow.
          </p>
          
          {/* Buttons with scale animation */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '0.8s' }}>
            <button className="btn-primary flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-github-accent/25 group">
              <span>Explore Tools</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="btn-secondary flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300 hover:shadow-lg group">
              <Download size={20} className="group-hover:animate-bounce" />
              <span>Download All</span>
            </button>
          </div>

          {/* Stats with counting animation */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '1s' }}>
            <div className="text-center group">
              <div className="flex items-center justify-center mb-2">
                <Star className="text-github-accent w-6 h-6 mr-2 group-hover:animate-spin transition-transform duration-300" />
                <span className="text-2xl font-bold text-github-text">
                  {stats.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-github-text-secondary group-hover:text-github-accent transition-colors duration-300">Average Rating</p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center mb-2">
                <Users className="text-github-accent w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-2xl font-bold text-github-text">
                  {(stats.users / 1000000).toFixed(1)}M+
                </span>
              </div>
              <p className="text-github-text-secondary group-hover:text-github-accent transition-colors duration-300">Active Users</p>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center mb-2">
                <Download className="text-github-accent w-6 h-6 mr-2 group-hover:animate-bounce transition-transform duration-300" />
                <span className="text-2xl font-bold text-github-text">
                  {stats.tools}+
                </span>
              </div>
              <p className="text-github-text-secondary group-hover:text-github-accent transition-colors duration-300">AI Tools</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-github-accent rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
}
