'use client';

import { useState } from 'react';
import Link from 'next/link';
import { aiTools, categories, AITool } from '@/lib/data';
import { useWordPress } from '@/lib/wordpress-provider';
import { Download, Star, ExternalLink, Search, Filter } from 'lucide-react';

export default function AllToolsGrid({ initialSearch }: { initialSearch?: string }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState(initialSearch || '');
  const [sortBy, setSortBy] = useState('popularity');
  const { wordpressTools, loading } = useWordPress();

  // Combine static tools with WordPress tools
  const allTools = [...aiTools, ...wordpressTools];

  const filteredAndSortedTools = allTools
    .filter(tool => {
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        case 'downloads':
          return b.downloads - a.downloads;
        case 'newest':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        default:
          return b.downloads - a.downloads; // popularity
      }
    });

  return (
    <section className="py-16 bg-github-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-github-text-secondary w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-github-dark-tertiary border border-github-border rounded-md pl-10 pr-4 py-2 text-github-text placeholder-github-text-secondary focus:outline-none focus:border-github-accent"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <Filter className="text-github-text-secondary w-4 h-4" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-github-dark-tertiary border border-github-border rounded-md px-3 py-2 text-github-text focus:outline-none focus:border-github-accent"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="downloads">Most Downloads</option>
                <option value="name">Name A-Z</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-github-accent text-white'
                    : 'bg-github-dark-tertiary text-github-text-secondary hover:text-github-text'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-github-text-secondary">
            {loading ? (
              'Loading tools...'
            ) : (
              `Showing ${filteredAndSortedTools.length} of ${allTools.length} tools`
            )}
          </p>
        </div>

        {/* Tools Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="text-github-text-secondary text-lg">Loading AI tools...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredAndSortedTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-github-text mb-2">No tools found</h3>
            <p className="text-github-text-secondary">
              Try adjusting your search terms or filters to find what you&apos;re looking for.
            </p>
          </div>
        )}
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
      <div className="bg-github-dark-secondary border border-github-border rounded-xl p-5 hover:border-github-accent hover:shadow-xl hover:shadow-github-accent/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-github-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header with icon and rating */}
          <div className="flex items-start justify-between mb-3">
            {tool.featuredImage ? (
              <div className="w-12 h-12 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={tool.featuredImage} 
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                {tool.icon}
              </div>
            )}
            <div className="flex items-center space-x-1 bg-github-dark-tertiary px-2 py-1 rounded-full">
              <Star size={14} className="text-yellow-400 fill-current group-hover:animate-spin transition-transform duration-300" />
              <span className="text-xs font-semibold text-github-text group-hover:text-yellow-400 transition-colors duration-300">
                {tool.rating}
              </span>
            </div>
          </div>
          
          {/* Tool name */}
          <h3 className="text-lg font-bold text-github-text mb-2 group-hover:text-github-accent transition-colors duration-300 line-clamp-1">
            {tool.name}
          </h3>
          
          {/* Description */}
          <p className="text-github-text-secondary mb-3 text-sm line-clamp-2 group-hover:text-github-text transition-colors duration-300 leading-relaxed">
            {tool.description}
          </p>
          
          {/* Footer with category and actions */}
          <div className="flex items-center justify-between pt-3 border-t border-github-border group-hover:border-github-accent/30 transition-colors duration-300">
            <span className="text-xs font-medium text-github-text-secondary bg-github-dark-tertiary px-2 py-1 rounded-full group-hover:bg-github-accent group-hover:text-white transition-all duration-300">
              {tool.category}
            </span>
            
            <div className="flex space-x-2">
              <Link 
                href={`/tools/${tool.id}`}
                className="bg-github-dark-tertiary hover:bg-github-accent text-github-text-secondary hover:text-white px-3 py-1 rounded-lg text-xs font-medium flex items-center space-x-1 hover:scale-105 transition-all duration-300"
              >
                <ExternalLink size={12} />
                <span>View</span>
              </Link>
              <button
                onClick={handleDownload}
                className="bg-github-accent hover:bg-github-accent-hover text-white px-3 py-1 rounded-lg text-xs font-medium flex items-center space-x-1 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-github-accent/25"
              >
                <Download size={12} />
                <span>Get</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Hover effect border */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-github-accent/20 transition-colors duration-300"></div>
      </div>
    </div>
  );
}
