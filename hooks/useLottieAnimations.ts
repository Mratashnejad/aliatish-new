import React, { useEffect, useState } from 'react';

// Custom hook to fetch animation data, cache it in localStorage with expiration
function useLottieAnimation(key: string, animationLoader: () => Promise<any>, expirationInMinutes = 60) {
  const [animationData, setAnimationData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        // Check if animation data exists in localStorage
        const cachedItem = localStorage.getItem(key);
        
        if (cachedItem) {
          const { data, timestamp } = JSON.parse(cachedItem);

          // Check if cached data has expired
          const now = new Date().getTime();
          if (now - timestamp < expirationInMinutes * 60 * 1000) {
            setAnimationData(data);
            return;
          } else {
            // Data is stale, clear the cache
            localStorage.removeItem(key);
          }
        }

        // Fetch animation data dynamically
        const animation = await animationLoader();
        setAnimationData(animation);

        // Cache animation data with a timestamp
        const cacheItem = {
          data: animation,
          timestamp: new Date().getTime(),
        };

        try {
          localStorage.setItem(key, JSON.stringify(cacheItem));
        } catch (storageError) {
          // Handle localStorage full error
          if (storageError.name === 'QuotaExceededError') {
            console.error('LocalStorage quota exceeded. Consider clearing space or using sessionStorage.');
          } else {
            console.error('Error saving animation to localStorage:', storageError);
          }
        }
      } catch (err) {
        // Handle animation loader errors
        setError('Failed to load animation');
        console.error('Error loading animation:', err);
      }
    };

    loadAnimation();
  }, [key, animationLoader, expirationInMinutes]);

  return { animationData, error };
}

export default useLottieAnimation;
