'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { AITool } from './data';
import { useMounted } from './use-mounted';
import { clearWordPressCache } from './wordpress';

interface WordPressContextType {
  wordpressTools: AITool[];
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

const WordPressContext = createContext<WordPressContextType>({
  wordpressTools: [],
  loading: true,
  error: null,
  refreshData: async () => {},
});

export function WordPressProvider({ children }: { children: ReactNode }) {
  const [wordpressTools, setWordpressTools] = useState<AITool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useMounted();

  const fetchWordPressData = async () => {
    try {
      setError(null);
      // Use the Next.js API route instead of direct WordPress API call
        const response = await fetch('/api/wordpress/posts', {
          // Add cache control to prevent unnecessary requests
          cache: 'no-cache', // Disable cache for immediate updates
          next: { revalidate: 30 } // 30 seconds cache for real-time updates
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
  };

  const refreshData = async () => {
    setLoading(true);
    // Clear cache before refreshing
    clearWordPressCache();
    await fetchWordPressData();
  };

  useEffect(() => {
    if (!isMounted) return;
    
    // Only fetch if we don't have data yet
    if (wordpressTools.length === 0 && loading) {
      fetchWordPressData();
    }
  }, [wordpressTools.length, loading, isMounted]);

  return (
    <WordPressContext.Provider value={{ wordpressTools, loading, error, refreshData }}>
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
