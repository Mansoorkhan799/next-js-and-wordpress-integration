'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { fetchWordPressPosts, convertWordPressPostToTool, AITool } from './wordpress';

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
        const posts = await fetchWordPressPosts();
        if (isMounted) {
          const convertedTools = posts.map(convertWordPressPostToTool);
          setWordpressTools(convertedTools);
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

    fetchWordPressData();
    
    return () => {
      isMounted = false;
    };
  }, []);

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
