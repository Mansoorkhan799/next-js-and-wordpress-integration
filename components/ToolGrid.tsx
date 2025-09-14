'use client';

import { useState } from 'react';
import Link from 'next/link';
import { aiTools, categories, AITool } from '@/lib/data';
import { useWordPress } from '@/lib/wordpress-provider';
import { Download, Star, ExternalLink, Search, ArrowRight } from 'lucide-react';

export default function ToolGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { wordpressTools, loading } = useWordPress();

  // Combine static tools with WordPress tools
  const allTools = [...aiTools, ...wordpressTools];

  const filteredTools = allTools.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="featured-tools" className="py-16 bg-github-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-github-accent/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-github-accent rounded-full animate-pulse"></div>
            <span className="text-github-accent text-sm font-medium">Featured Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-github-text mb-6">
            Featured AI Tools
          </h2>
          <p className="text-github-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the most popular and powerful AI tools used by millions of professionals worldwide. 
            Each tool is carefully curated and tested for quality.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-github-accent text-white shadow-lg shadow-github-accent/25 scale-105'
                    : 'bg-github-dark-tertiary text-github-text-secondary hover:text-github-text hover:bg-github-border hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-github-text-secondary w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-github-dark-tertiary border border-github-border rounded-full px-12 py-3 text-github-text placeholder-github-text-secondary focus:outline-none focus:border-github-accent focus:ring-2 focus:ring-github-accent/20 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="text-github-text-secondary text-lg">Loading AI tools...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => (
              <div
                key={tool.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link href="/tools" className="inline-flex items-center space-x-3 bg-github-dark-tertiary hover:bg-github-accent text-github-text hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-github-accent/25 group">
            <span>View All Tools</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ToolCard({ tool }: { tool: AITool }) {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(tool.downloadUrl, '_blank');
  };

  return (
    <div className="group">
      <div className="bg-github-dark-secondary border border-github-border rounded-xl p-4 sm:p-6 hover:border-github-accent hover:shadow-2xl hover:shadow-github-accent/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden min-h-[300px] sm:min-h-[280px]">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-github-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header with icon and rating */}
          <div className="flex items-start justify-between mb-4">
            <div className="relative">
              {tool.featuredImage ? (
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={tool.featuredImage} 
                    alt={tool.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                  {tool.icon}
                </div>
              )}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-github-accent rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-1 bg-github-dark-tertiary px-3 py-1 rounded-full">
              <Star size={16} className="text-yellow-400 fill-current group-hover:animate-spin transition-transform duration-300" />
              <span className="text-sm font-semibold text-github-text group-hover:text-yellow-400 transition-colors duration-300">
                {tool.rating}
              </span>
            </div>
          </div>
          
          {/* Tool name */}
          <h3 className="text-xl font-bold text-github-text mb-3 group-hover:text-github-accent transition-colors duration-300 line-clamp-1">
            {tool.name}
          </h3>
          
          {/* Description */}
          <p className="text-github-text-secondary mb-4 line-clamp-2 group-hover:text-github-text transition-colors duration-300 leading-relaxed">
            {tool.description}
          </p>
          
          {/* Features preview */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {tool.features.slice(0, 2).map((feature, index) => (
                <span 
                  key={index}
                  className="text-xs text-github-text-secondary bg-github-dark-tertiary px-2 py-1 rounded-md group-hover:bg-github-accent/20 group-hover:text-github-accent transition-all duration-300"
                >
                  {feature}
                </span>
              ))}
              {tool.features.length > 2 && (
                <span className="text-xs text-github-text-secondary bg-github-dark-tertiary px-2 py-1 rounded-md">
                  +{tool.features.length - 2} more
                </span>
              )}
            </div>
          </div>
          
          {/* Footer with category and actions */}
          <div className="mt-auto pt-4 border-t border-github-border group-hover:border-github-accent/30 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm font-medium text-github-text-secondary bg-github-dark-tertiary px-2 sm:px-3 py-1 rounded-full group-hover:bg-github-accent group-hover:text-white transition-all duration-300">
                  {tool.category}
                </span>
                <span className="text-xs text-github-text-secondary">
                  {tool.pricing}
                </span>
              </div>
              
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <Link 
                  href={`/tools/${tool.id}`}
                  className="flex-1 sm:flex-none bg-github-dark-tertiary hover:bg-github-accent text-github-text-secondary hover:text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center space-x-1 sm:space-x-2 hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink size={12} />
                  <span>View</span>
                </Link>
                
                <button
                  onClick={handleDownload}
                  className="flex-1 sm:flex-none bg-github-accent hover:bg-github-accent-hover text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center space-x-1 sm:space-x-2 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-github-accent/25"
                >
                  <Download size={12} />
                  <span>Get</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hover effect border */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-github-accent/20 transition-colors duration-300"></div>
      </div>
    </div>
  );
}
