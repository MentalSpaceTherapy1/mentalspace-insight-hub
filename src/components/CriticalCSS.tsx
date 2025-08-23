import { useEffect } from 'react';

// Critical CSS inliner for above-the-fold content
const CriticalCSS = () => {
  useEffect(() => {
    // Inline critical CSS for LCP optimization
    const criticalStyles = `
      <style id="critical-css">
        /* Above-the-fold critical styles */
        .hero-section {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.1));
        }
        
        .header-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: hsl(var(--background) / 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid hsl(var(--border));
        }
        
        .text-gradient {
          background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Prevent CLS with proper aspect ratios */
        .hero-image {
          aspect-ratio: 16 / 9;
          object-fit: cover;
          width: 100%;
          height: auto;
        }
        
        /* Loading skeleton animations */
        .skeleton-pulse {
          animation: skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes skeleton-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        /* Optimize font rendering */
        body {
          font-display: swap;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Button optimizations */
        .btn-primary {
          background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.8));
          color: hsl(var(--primary-foreground));
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        
        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px hsl(var(--primary) / 0.3);
        }
      </style>
    `;

    // Only add if not already present
    if (!document.getElementById('critical-css')) {
      document.head.insertAdjacentHTML('beforeend', criticalStyles);
    }

    // Remove non-critical CSS loading delay
    const removeLoader = () => {
      const loader = document.getElementById('css-loader');
      if (loader) {
        loader.remove();
      }
    };

    // Clean up after first paint
    requestAnimationFrame(removeLoader);
  }, []);

  return null;
};

export default CriticalCSS;