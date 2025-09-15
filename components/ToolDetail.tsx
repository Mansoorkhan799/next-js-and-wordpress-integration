'use client';

import { AITool } from '@/lib/data';
import { Download, Star, ExternalLink, Calendar, Users, CheckCircle, Globe, Share2, Heart, Bookmark } from 'lucide-react';

interface ToolDetailProps {
  tool: AITool & { wordpressPost?: any };
  isWordPress?: boolean;
}

export default function ToolDetail({ tool, isWordPress = false }: ToolDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-github-dark via-github-dark-secondary to-github-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-github-accent rounded-full mix-blend-multiply filter blur-xl animate-galaxy-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-cosmic-drift"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-spiral-drift"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-github-text-secondary">
              <li><a href="/" className="hover:text-github-accent transition-colors">Home</a></li>
              <li className="text-github-text-secondary">/</li>
              <li><a href="/tools" className="hover:text-github-accent transition-colors">Tools</a></li>
              <li className="text-github-text-secondary">/</li>
              <li className="text-github-text font-medium">{tool.name}</li>
            </ol>
          </nav>

          {/* Tool Header */}
          <div className="glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 animate-fade-in-up">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full lg:w-auto">
                {tool.featuredImage ? (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl ring-2 ring-github-accent/20 flex-shrink-0">
                    <img 
                      src={tool.featuredImage} 
                      alt={tool.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br from-github-accent to-github-accent-hover flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl shadow-xl flex-shrink-0">
                    {tool.icon}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-github-text mb-3 gradient-text leading-tight">
                    {tool.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 text-github-text-secondary">
                    <span className="bg-gradient-to-r from-github-accent to-github-accent-hover text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                      {tool.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      <span className="text-sm sm:text-base font-semibold">{tool.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} className="sm:w-4 sm:h-4 text-github-accent" />
                      <span className="text-sm sm:text-base">{tool.downloads.toLocaleString()} downloads</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href={tool.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-enhanced flex items-center justify-center space-x-2 px-4 py-2.5 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
                >
                  <Download size={18} className="sm:w-5 sm:h-5" />
                  <span>Download Now</span>
                </a>
                <a
                  href={tool.websiteUrl || tool.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary btn-enhanced flex items-center justify-center space-x-2 px-4 py-2.5 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
                >
                  <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                  <span>Visit Website</span>
                </a>
              </div>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-github-text-secondary leading-relaxed mt-4 sm:mt-6 max-w-4xl">
              {tool.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Description */}
            <div className="card hover-lift animate-fade-in-up">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
                <h2 className="text-2xl sm:text-3xl font-bold text-github-text">About {tool.name}</h2>
                {isWordPress && (
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-github-accent bg-github-accent/10 px-2 sm:px-3 py-1 rounded-full self-start sm:self-center">
                    <Globe size={14} className="sm:w-4 sm:h-4" />
                    <span>From WordPress</span>
                  </div>
                )}
              </div>
              {isWordPress && tool.wordpressPost ? (
                <div 
                  className="prose-enhanced"
                  dangerouslySetInnerHTML={{ __html: tool.wordpressPost.content.rendered }}
                />
              ) : (
                <p className="text-github-text-secondary leading-relaxed text-lg">{tool.longDescription}</p>
              )}
            </div>

            {/* Features */}
            <div className="card hover-lift animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl font-bold text-github-text mb-4 sm:mb-6">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {tool.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 sm:p-4 rounded-lg bg-github-dark-tertiary/50 hover:bg-github-dark-tertiary transition-colors">
                    <CheckCircle size={16} className="sm:w-5 sm:h-5 text-github-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-github-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="card hover-lift animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl font-bold text-github-text mb-4 sm:mb-6">Use Cases</h2>
              <div className="space-y-3 sm:space-y-4">
                {tool.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-github-dark-tertiary/50 hover:bg-github-dark-tertiary transition-colors">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-github-accent to-github-accent-hover rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base lg:text-lg text-github-text-secondary">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            {/* Tool Info */}
            <div className="card hover-lift animate-slide-in-right">
              <h3 className="text-lg sm:text-xl font-bold text-github-text mb-4 sm:mb-6 flex items-center">
                <Bookmark size={18} className="sm:w-5 sm:h-5 text-github-accent mr-2" />
                Tool Information
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-github-border/50">
                  <span className="text-github-text-secondary">Category</span>
                  <span className="text-github-text font-medium">{tool.category}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-github-border/50">
                  <span className="text-github-text-secondary">Pricing</span>
                  <span className="text-github-text font-medium">{tool.pricing}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-github-border/50">
                  <span className="text-github-text-secondary">Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-github-text font-medium">{tool.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-github-border/50">
                  <span className="text-github-text-secondary">Downloads</span>
                  <span className="text-github-text font-medium">{tool.downloads.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-github-text-secondary">Last Updated</span>
                  <span className="text-github-text font-medium">{new Date(tool.lastUpdated).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card hover-lift animate-slide-in-right">
              <h3 className="text-lg sm:text-xl font-bold text-github-text mb-4 sm:mb-6 flex items-center">
                <Share2 size={18} className="sm:w-5 sm:h-5 text-github-accent mr-2" />
                Quick Actions
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <a
                  href={tool.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary btn-enhanced text-center block py-2.5 sm:py-3 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Download Tool
                </a>
                <a
                  href={tool.websiteUrl || tool.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-secondary btn-enhanced text-center block py-2.5 sm:py-3 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Visit Official Site
                </a>
                <button className="w-full btn-secondary btn-enhanced py-2.5 sm:py-3 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <Heart size={16} className="sm:w-4 sm:h-4" />
                  <span>Save Tool</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
