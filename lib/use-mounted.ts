'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to prevent hydration mismatches
 * Returns true only after the component has mounted on the client
 */
export function useMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}
