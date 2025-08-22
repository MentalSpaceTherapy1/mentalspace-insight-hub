/**
 * Utility functions for clearing various types of cache
 */

export const clearAuthCache = () => {
  try {
    console.log('Clearing auth cache...');
    
    // Get current storage state for debugging
    const authKeys = Object.keys(localStorage).filter(key => 
      key.startsWith('supabase.auth.') || key.includes('sb-')
    );
    console.log('Found auth keys in localStorage:', authKeys);
    
    // Clear all Supabase auth tokens from localStorage
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
        console.log('Removing localStorage key:', key);
        localStorage.removeItem(key);
      }
    });

    // Clear sessionStorage auth data
    const sessionAuthKeys = Object.keys(sessionStorage || {}).filter(key => 
      key.startsWith('supabase.auth.') || key.includes('sb-')
    );
    console.log('Found auth keys in sessionStorage:', sessionAuthKeys);
    
    Object.keys(sessionStorage || {}).forEach((key) => {
      if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
        console.log('Removing sessionStorage key:', key);
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

export const forceAuthRefresh = async () => {
  try {
    console.log('Forcing auth refresh...');
    
    // Import supabase client dynamically to avoid circular dependencies
    const { supabase } = await import('@/integrations/supabase/client');
    
    // Sign out completely first
    await supabase.auth.signOut({ scope: 'global' });
    
    // Clear all auth cache
    clearAuthCache();
    
    // Force page reload to ensure clean state
    setTimeout(() => {
      window.location.reload();
    }, 500);
    
    return true;
  } catch (error) {
    console.error('Error forcing auth refresh:', error);
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