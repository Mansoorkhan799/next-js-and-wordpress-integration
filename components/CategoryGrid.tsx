'use client';

import Link from 'next/link';
import { aiTools, categories } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function CategoryGrid() {
  const categoryData = categories
    .filter(cat => cat !== 'All')
    .map(category => {
      const tools = aiTools.filter(tool => tool.category === category);
      const avgRating = tools.reduce((sum, tool) => sum + tool.rating, 0) / tools.length;
      const totalDownloads = tools.reduce((sum, tool) => sum + tool.downloads, 0);

      return {
        name: category,
        toolCount: tools.length,
        avgRating: avgRating.toFixed(1),
        totalDownloads: totalDownloads.toLocaleString(),
        icon: getCategoryIcon(category),
        description: getCategoryDescription(category),
      };
    });

  return (
    <section className="py-16 bg-github-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.map(category => (
            <Link
              key={category.name}
              href={`/tools?category=${category.name}`}
              className="card group hover:shadow-lg transition-all duration-200"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-github-text mb-2 group-hover:text-github-accent transition-colors">
                {category.name}
              </h3>
              <p className="text-github-text-secondary mb-4">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-github-text-secondary mb-4">
                <span>{category.toolCount} tools</span>
                <span>⭐ {category.avgRating}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-github-text-secondary">
                  {category.totalDownloads} downloads
                </span>
                <ArrowRight size={16} className="text-github-accent group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function getCategoryIcon(category: string): string {
  const icons: { [key: string]: string } = {
    'Productivity': '⚡',
    'Creative': '🎨',
    'Writing': '✍️',
    'Design': '🎭',
    'Development': '💻',
  };
  return icons[category] || '🔧';
}

function getCategoryDescription(category: string): string {
  const descriptions: { [key: string]: string } = {
    'Productivity': 'Boost your efficiency with AI-powered productivity tools for task management, automation, and workflow optimization.',
    'Creative': 'Unleash your creativity with AI tools for art generation, music creation, and creative content production.',
    'Writing': 'Enhance your writing with AI assistants for grammar, style, content generation, and language improvement.',
    'Design': 'Create stunning visuals with AI-powered design tools for graphics, layouts, and visual content.',
    'Development': 'Accelerate your development with AI tools for coding, debugging, testing, and software engineering.',
  };
  return descriptions[category] || 'Discover AI tools in this category.';
}
