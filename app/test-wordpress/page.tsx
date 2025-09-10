'use client';

import { useEffect, useState } from 'react';
import { fetchWordPressPosts, convertWordPressPostToTool } from '@/lib/wordpress';

export default function TestWordPress() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function testWordPress() {
      try {
        console.log('Testing WordPress connection...');
        const wordpressPosts = await fetchWordPressPosts();
        console.log('WordPress posts:', wordpressPosts);
        
        const convertedTools = wordpressPosts.map(convertWordPressPostToTool);
        console.log('Converted tools:', convertedTools);
        
        setPosts(convertedTools);
        setError(null);
      } catch (err) {
        console.error('WordPress test error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    testWordPress();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-github-dark flex items-center justify-center">
        <div className="text-github-text text-xl">Loading WordPress data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-github-dark flex items-center justify-center">
        <div className="text-red-400 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-github-dark p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-github-text mb-8">
          WordPress Integration Test
        </h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-github-text mb-4">
            Environment Variables:
          </h2>
          <div className="bg-github-dark-secondary p-4 rounded-lg">
            <p className="text-github-text-secondary">
              WORDPRESS_URL: {process.env.WORDPRESS_URL || 'Not set'}
            </p>
            <p className="text-github-text-secondary">
              WORDPRESS_USERNAME: {process.env.WORDPRESS_USERNAME ? 'Set' : 'Not set'}
            </p>
            <p className="text-github-text-secondary">
              WORDPRESS_PASSWORD: {process.env.WORDPRESS_PASSWORD ? 'Set' : 'Not set'}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-github-text mb-4">
            WordPress Posts Found: {posts.length}
          </h2>
          
          {posts.length === 0 ? (
            <div className="bg-github-dark-secondary p-4 rounded-lg">
              <p className="text-github-text-secondary">
                No WordPress posts found. Check your .env.local file and WordPress configuration.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((tool, index) => (
                <div key={index} className="bg-github-dark-secondary p-6 rounded-lg border border-github-border">
                  <h3 className="text-xl font-bold text-github-text mb-2">{tool.name}</h3>
                  <p className="text-github-text-secondary mb-4">{tool.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-github-text-secondary">Category:</span>
                      <span className="text-github-text ml-2">{tool.category}</span>
                    </div>
                    <div>
                      <span className="text-github-text-secondary">Rating:</span>
                      <span className="text-github-text ml-2">{tool.rating}</span>
                    </div>
                    <div>
                      <span className="text-github-text-secondary">Pricing:</span>
                      <span className="text-github-text ml-2">{tool.pricing}</span>
                    </div>
                    <div>
                      <span className="text-github-text-secondary">Icon:</span>
                      <span className="text-github-text ml-2">{tool.icon}</span>
                    </div>
                    <div>
                      <span className="text-github-text-secondary">Download URL:</span>
                      <span className="text-github-text ml-2">{tool.downloadUrl}</span>
                    </div>
                    <div>
                      <span className="text-github-text-secondary">Features:</span>
                      <span className="text-github-text ml-2">{JSON.stringify(tool.features)}</span>
                    </div>
                  </div>
                  
                  {tool.wordpressPost && (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-github-text mb-2">WordPress Post Data:</h4>
                      <div className="bg-github-dark-tertiary p-4 rounded-lg">
                        <pre className="text-xs text-github-text-secondary overflow-auto">
                          {JSON.stringify(tool.wordpressPost, null, 2)}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
