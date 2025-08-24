import { useEffect } from 'react';
import { getRobotsContent, shouldIndex } from '@/utils/envUtils';

// Component to inject environment-specific SEO meta tags
export const SEOEnvironment = () => {
  useEffect(() => {
    // Update robots meta tag based on environment
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', getRobotsContent());

    // Add noindex warning for non-production environments
    if (!shouldIndex()) {
      console.warn('🚫 SEO: This environment is set to noindex. Content will not be indexed by search engines.');
      
      // Add visual indicator in development
      if (document.querySelector('#seo-warning')) return;
      
      const warning = document.createElement('div');
      warning.id = 'seo-warning';
      warning.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #f59e0b;
        color: white;
        text-align: center;
        padding: 8px;
        font-size: 12px;
        z-index: 999999;
        font-family: monospace;
      `;
      warning.textContent = '⚠️ PREVIEW MODE: noindex active - not indexed by search engines';
      document.body.appendChild(warning);
    } else {
      // Remove warning if it exists
      const existing = document.querySelector('#seo-warning');
      if (existing) existing.remove();
    }
  }, []);

  return null;
};