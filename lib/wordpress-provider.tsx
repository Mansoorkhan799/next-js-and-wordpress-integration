'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { AITool } from './data';

interface WordPressContextType {
  wordpressTools: AITool[];
  loading: boolean;
  error: string | null;
}

const WordPressContext = createContext<WordPressContextType>({
  wordpressTools: [],
  loading: true,
  error: null,
});

export function WordPressProvider({ children }: { children: ReactNode }) {
  const [wordpressTools, setWordpressTools] = useState<AITool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    async function fetchWordPressData() {
      try {
        setError(null);
        // Use the Next.js API route instead of direct WordPress API call
        const response = await fetch('/api/wordpress/posts', {
          // Add cache control to prevent unnecessary requests
          cache: 'force-cache',
          next: { revalidate: 900 } // 15 minutes cache
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (isMounted && data.success) {
          setWordpressTools(data.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch WordPress data');
          console.error('Error fetching WordPress posts:', err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    // Only fetch if we don't have data yet
    if (wordpressTools.length === 0 && loading) {
      fetchWordPressData();
    }
    
    return () => {
      isMounted = false;
    };
  }, [wordpressTools.length, loading]);

  return (
    <WordPressContext.Provider value={{ wordpressTools, loading, error }}>
      {children}
    </WordPressContext.Provider>
  );
}

export function useWordPress() {
  const context = useContext(WordPressContext);
  if (!context) {
    throw new Error('useWordPress must be used within a WordPressProvider');
  }
  return context;
}
