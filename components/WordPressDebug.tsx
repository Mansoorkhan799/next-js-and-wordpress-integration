'use client';

import { useWordPress } from '@/lib/wordpress-provider';

export default function WordPressDebug() {
  const { wordpressTools, loading, error } = useWordPress();

  return (
    <div className="p-4 bg-github-dark-secondary rounded-lg">
      <h2 className="text-xl font-bold text-github-text mb-4">WordPress Debug</h2>
      
      <div className="space-y-2">
        <p className="text-github-text-secondary">
          <strong>Loading:</strong> {loading ? 'Yes' : 'No'}
        </p>
        <p className="text-github-text-secondary">
          <strong>Error:</strong> {error || 'None'}
        </p>
        <p className="text-github-text-secondary">
          <strong>WordPress Tools Count:</strong> {wordpressTools.length}
        </p>
        
        {wordpressTools.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-github-text mb-2">WordPress Tools:</h3>
            <div className="space-y-2">
              {wordpressTools.map((tool, index) => (
                <div key={tool.id} className="p-2 bg-github-dark-tertiary rounded text-sm">
                  <p className="text-github-text"><strong>{index + 1}.</strong> {tool.name}</p>
                  <p className="text-github-text-secondary text-xs">Category: {tool.category}</p>
                  <p className="text-github-text-secondary text-xs">Rating: {tool.rating}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
