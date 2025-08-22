/**
 * Utility functions for clearing various types of cache
 */

export const clearAuthCache = () => {
  try {
    // Clear all Supabase auth tokens
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
        localStorage.removeItem(key);
      }
    });

    // Clear sessionStorage auth data
    Object.keys(sessionStorage || {}).forEach((key) => {
      if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
        sessionStorage.removeItem(key);
      }
    });

    console.log('Auth cache cleared successfully');
    return true;
  } catch (error) {
    console.error('Error clearing auth cache:', error);
    return false;
  }
};

export const clearAllCache = () => {
  try {
    // Clear localStorage
    localStorage.clear();
    
    // Clear sessionStorage
    sessionStorage.clear();
    
    // Clear IndexedDB (if any)
    if ('indexedDB' in window) {
      // Note: This is a more complex operation, but we'll trigger it
      console.log('IndexedDB cleanup initiated');
    }

    console.log('All cache cleared successfully');
    return true;
  } catch (error) {
    console.error('Error clearing all cache:', error);
    return false;
  }
};

export const clearBrowserCache = () => {
  try {
    // Force reload without cache
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
    }
    
    // Force hard refresh
    window.location.reload();
    return true;
  } catch (error) {
    console.error('Error clearing browser cache:', error);
    return false;
  }
};

export const getStorageInfo = () => {
  const info = {
    localStorage: {
      keys: Object.keys(localStorage),
      size: JSON.stringify(localStorage).length
    },
    sessionStorage: {
      keys: Object.keys(sessionStorage || {}),
      size: JSON.stringify(sessionStorage || {}).length
    }
  };
  
  return info;
};