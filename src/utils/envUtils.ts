// Environment utilities for production vs development
export function getEnvironment(): 'production' | 'development' | 'preview' {
  // Check for common environment variables
  if (typeof window !== 'undefined') {
    // Client-side detection
    const hostname = window.location.hostname;
    
    if (hostname === 'mentalspacetherapy.lovable.app') {
      return 'production';
    } else if (hostname.includes('lovable.app') || hostname.includes('lovable.dev')) {
      return 'preview';
    } else {
      return 'development';
    }
  }
  
  // Server-side/build-time detection
  const nodeEnv = process.env.NODE_ENV;
  const publicEnv = process.env.NEXT_PUBLIC_ENV;
  
  if (publicEnv === 'production' || nodeEnv === 'production') {
    return 'production';
  } else if (publicEnv === 'preview') {
    return 'preview';
  } else {
    return 'development';
  }
}

export function shouldIndex(): boolean {
  const env = getEnvironment();
  return env === 'production';
}

export function getRobotsContent(): string {
  return shouldIndex() ? 'index, follow' : 'noindex, nofollow';
}

export function getBaseUrl(): string {
  const env = getEnvironment();
  
  if (env === 'production') {
    return 'https://mentalspacetherapy.lovable.app';
  }
  
  // For preview/development, use current location if available
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}`;
  }
  
  return 'https://mentalspacetherapy.lovable.app';
}