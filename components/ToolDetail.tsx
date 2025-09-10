'use client';

import { AITool } from '@/lib/data';
import { Download, Star, ExternalLink, Calendar, Users, CheckCircle, Globe } from 'lucide-react';

interface ToolDetailProps {
  tool: AITool & { wordpressPost?: any };
  isWordPress?: boolean;
}

export default function ToolDetail({ tool, isWordPress = false }: ToolDetailProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-github-text-secondary">
          <li><a href="/" className="hover:text-github-accent">Home</a></li>
          <li>/</li>
          <li><a href="/tools" className="hover:text-github-accent">Tools</a></li>
          <li>/</li>
          <li className="text-github-text">{tool.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="card mb-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                {tool.featuredImage ? (
                  <div className="w-20 h-20 rounded-lg overflow-hidden">
                    <img 
                      src={tool.featuredImage} 
                      alt={tool.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="text-6xl">{tool.icon}</div>
                )}
                <div>
                  <h1 className="text-3xl font-bold text-github-text mb-2">{tool.name}</h1>
                  <div className="flex items-center space-x-4 text-github-text-secondary">
                    <span className="bg-github-dark-tertiary px-3 py-1 rounded-full text-sm">
                      {tool.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span>{tool.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{tool.downloads.toLocaleString()} downloads</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-github-text-secondary mb-6">{tool.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={tool.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>Download Now</span>
              </a>
              <a
                href={tool.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <ExternalLink size={20} />
                <span>Visit Website</span>
              </a>
            </div>
          </div>

          {/* Description */}
          <div className="card mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-github-text">About {tool.name}</h2>
              {isWordPress && (
                <div className="flex items-center space-x-2 text-sm text-github-accent">
                  <Globe size={16} />
                  <span>From WordPress</span>
                </div>
              )}
            </div>
            {isWordPress && tool.wordpressPost ? (
              <div 
                className="text-github-text-secondary leading-relaxed prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: tool.wordpressPost.content.rendered }}
              />
            ) : (
              <p className="text-github-text-secondary leading-relaxed">{tool.longDescription}</p>
            )}
          </div>

          {/* Features */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-github-text mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {tool.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-github-accent flex-shrink-0" />
                  <span className="text-github-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="card">
            <h2 className="text-2xl font-bold text-github-text mb-4">Use Cases</h2>
            <ul className="space-y-3">
              {tool.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-github-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-github-text-secondary">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Tool Info */}
          <div className="card mb-6">
            <h3 className="text-lg font-semibold text-github-text mb-4">Tool Information</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-github-text-secondary">Category</span>
                <span className="text-github-text">{tool.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-github-text-secondary">Pricing</span>
                <span className="text-github-text">{tool.pricing}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-github-text-secondary">Rating</span>
                <div className="flex items-center space-x-1">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="text-github-text">{tool.rating}</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-github-text-secondary">Downloads</span>
                <span className="text-github-text">{tool.downloads.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-github-text-secondary">Last Updated</span>
                <span className="text-github-text">{new Date(tool.lastUpdated).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card">
            <h3 className="text-lg font-semibold text-github-text mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <a
                href={tool.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary text-center block"
              >
                Download Tool
              </a>
              <a
                href={tool.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary text-center block"
              >
                Visit Official Site
              </a>
              <button className="w-full btn-secondary">
                Share Tool
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
