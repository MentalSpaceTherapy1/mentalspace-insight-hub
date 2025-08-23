import { useEffect } from 'react';

// Core Web Vitals optimization component
const PerformanceOptimizer = () => {
  useEffect(() => {
    // Prefetch critical resources
    const prefetchCriticalResources = () => {
      const criticalUrls = [
        '/src/assets/therapy-session.jpg',
        '/src/assets/hero-person-1.jpg',
        '/src/assets/hero-person-2.jpg'
      ];

      criticalUrls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
      });
    };

    // Optimize font loading
    const optimizeFonts = () => {
      const fontLinks = document.querySelectorAll('link[href*="fonts"]');
      fontLinks.forEach(link => {
        link.setAttribute('rel', 'preload');
        link.setAttribute('as', 'font');
        link.setAttribute('crossorigin', 'anonymous');
      });
    };

    // Add resource hints for better performance
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const domains = ['fonts.googleapis.com', 'fonts.gstatic.com', 'images.unsplash.com'];
      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect for critical third-party origins
      const preconnectDomains = ['fonts.googleapis.com'];
      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = `https://${domain}`;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Optimize images with intersection observer for better CLS
    const optimizeImageLoading = () => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              // Add aspect ratio container to prevent layout shifts
              if (!img.style.aspectRatio && img.width && img.height) {
                img.style.aspectRatio = `${img.width} / ${img.height}`;
              }
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      }
    };

    // Add critical CSS inlining hint
    const addCriticalCSS = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Critical above-the-fold styles */
        .hero-section { contain: layout style paint; }
        .loading-skeleton { 
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `;
      document.head.appendChild(style);
    };

    // Initialize performance optimizations
    prefetchCriticalResources();
    optimizeFonts();
    addResourceHints();
    addCriticalCSS();

    // Defer non-critical optimizations
    requestIdleCallback(() => {
      optimizeImageLoading();
    });
  }, []);

  return null;
};

export default PerformanceOptimizer;