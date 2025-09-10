'use client';

import { useEffect, useState } from 'react';

export default function WhoWeAre() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-github-dark-secondary relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-github-accent rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-github-accent rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-github-accent rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Section Badge */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-github-dark/50 border border-github-border/30 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="w-2 h-2 bg-github-accent rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm text-github-text-secondary font-medium">About Our Platform</span>
          </div>

          {/* Main Heading */}
          <h2 className={`text-4xl md:text-5xl font-bold text-github-text mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '0.2s' }}>
            Who We Are & What We Offer
          </h2>

          {/* Detailed Description */}
          <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '0.4s' }}>
            <p className="text-xl text-github-text-secondary leading-relaxed mb-8">
              We are a dedicated team of AI enthusiasts, developers, and technology experts who believe in the transformative power of artificial intelligence. Our mission is to democratize access to cutting-edge AI tools and make them available to everyone, from individual creators to enterprise teams.
            </p>
            
            <p className="text-lg text-github-text-secondary leading-relaxed mb-8">
              Our platform serves as a comprehensive hub where you can discover, evaluate, and access the most powerful AI tools available today. We carefully curate and test each tool to ensure quality, reliability, and effectiveness. Whether you're looking to enhance your productivity, boost your creativity, automate repetitive tasks, or explore new possibilities with AI, we provide the resources and tools you need to succeed.
            </p>

            <p className="text-lg text-github-text-secondary leading-relaxed">
              From advanced language models and image generators to specialized productivity tools and automation platforms, our collection spans across multiple categories and use cases. We continuously update our offerings with the latest innovations in AI technology, ensuring you always have access to the most current and effective tools in the market.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '0.6s' }}>
            <div className="group p-6 bg-github-dark/30 border border-github-border/20 rounded-xl hover:border-github-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-github-accent/10">
              <div className="w-12 h-12 bg-github-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-github-accent/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-github-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-github-text mb-3 group-hover:text-github-accent transition-colors duration-300">
                Curated Quality
              </h3>
              <p className="text-github-text-secondary">
                Every tool is carefully tested and verified for quality, security, and effectiveness before being added to our platform.
              </p>
            </div>

            <div className="group p-6 bg-github-dark/30 border border-github-border/20 rounded-xl hover:border-github-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-github-accent/10">
              <div className="w-12 h-12 bg-github-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-github-accent/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-github-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-github-text mb-3 group-hover:text-github-accent transition-colors duration-300">
                Latest Innovations
              </h3>
              <p className="text-github-text-secondary">
                Stay ahead with access to the newest AI tools and technologies as they emerge in the rapidly evolving AI landscape.
              </p>
            </div>

            <div className="group p-6 bg-github-dark/30 border border-github-border/20 rounded-xl hover:border-github-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-github-accent/10">
              <div className="w-12 h-12 bg-github-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-github-accent/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-github-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-github-text mb-3 group-hover:text-github-accent transition-colors duration-300">
                Community Driven
              </h3>
              <p className="text-github-text-secondary">
                Join a vibrant community of AI enthusiasts, share experiences, and get support from fellow users and experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
