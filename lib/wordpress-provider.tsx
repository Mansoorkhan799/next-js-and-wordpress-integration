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
        const response = await fetch(`/api/wordpress/posts?t=${Date.now()}`, {
          // Add cache control to prevent unnecessary requests
          cache: 'no-store', // Completely disable cache for immediate updates
          next: { revalidate: 0 } // No cache for real-time updates
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
    
    // Always fetch fresh data
    fetchWordPressData();
  }, [isMounted]);

  // Auto-refresh every 30 seconds to catch updates
  useEffect(() => {
    if (!isMounted) return;
    
    const interval = setInterval(() => {
      fetchWordPressData();
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, [isMounted]);

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
