'use client';

import { useWordPress } from '@/lib/wordpress-provider';
import { RefreshCw } from 'lucide-react';

export default function WordPressRefreshButton() {
  const { refreshData, loading } = useWordPress();

  return (
    <button
      onClick={refreshData}
      disabled={loading}
      className="fixed bottom-4 right-4 bg-github-accent hover:bg-github-accent-hover text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      title="Refresh WordPress Data"
    >
      <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
    </button>
  );
}
