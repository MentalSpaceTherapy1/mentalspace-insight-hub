/**
 * Image optimization utilities for better performance
 */

// Preload critical images
export const preloadImage = (src: string, priority: 'high' | 'low' = 'low') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  if (priority === 'high') {
    link.setAttribute('fetchpriority', 'high');
  }
  document.head.appendChild(link);
};

// Create optimized image URL with WebP fallback
export const getOptimizedImageUrl = (
  originalSrc: string, 
  width?: number, 
  quality: number = 75,
  format: 'webp' | 'jpg' | 'png' = 'webp'
) => {
  if (!originalSrc) return '';
  
  const params = new URLSearchParams();
  if (width) params.append('w', width.toString());
  params.append('q', quality.toString());
  params.append('f', format);
  
  return `${originalSrc}?${params.toString()}`;
};

// Generate responsive image srcSet
export const generateSrcSet = (
  originalSrc: string,
  sizes: number[] = [400, 800, 1200, 1600],
  quality: number = 75
) => {
  return sizes
    .map(size => `${getOptimizedImageUrl(originalSrc, size, quality)} ${size}w`)
    .join(', ');
};

// Lazy load images with Intersection Observer
export const setupLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-lazy]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.lazy;
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-lazy');
            observer.unobserve(img);
          }
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  }
};

// Critical resource hints for better performance
export const addResourceHints = () => {
  // DNS prefetch for external image domains
  const dnsHints = [
    'https://images.unsplash.com',
    'https://cdn.jsdelivr.net'
  ];

  dnsHints.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });

  // Preconnect to critical domains
  const preconnectDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];

  preconnectDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};