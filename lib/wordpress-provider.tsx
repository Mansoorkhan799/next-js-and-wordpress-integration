'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { AITool } from './data';
import { useMounted } from './use-mounted';

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
  const isMounted = useMounted();

  useEffect(() => {
    if (!isMounted) return;
    
    let isMountedRef = true;
    
    async function fetchWordPressData() {
      try {
        setError(null);
        // Use the Next.js API route instead of direct WordPress API call
        const response = await fetch('/api/wordpress/posts', {
          // Add cache control to prevent unnecessary requests
          cache: 'no-cache', // Temporarily disable cache for debugging
          next: { revalidate: 0 } // No cache for debugging
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('WordPress API Response:', data);
        if (isMountedRef && data.success) {
          console.log('Setting WordPress tools:', data.data);
          setWordpressTools(data.data);
        }
      } catch (err) {
        if (isMountedRef) {
          setError(err instanceof Error ? err.message : 'Failed to fetch WordPress data');
          console.error('Error fetching WordPress posts:', err);
        }
      } finally {
        if (isMountedRef) {
          setLoading(false);
        }
      }
    }

    // Only fetch if we don't have data yet
    if (wordpressTools.length === 0 && loading) {
      fetchWordPressData();
    }
    
    return () => {
      isMountedRef = false;
    };
  }, [wordpressTools.length, loading, isMounted]);

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
