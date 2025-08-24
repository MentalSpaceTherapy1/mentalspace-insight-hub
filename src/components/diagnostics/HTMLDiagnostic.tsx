import { useEffect, useState } from 'react';

const HTMLDiagnostic = () => {
  const [htmlContent, setHtmlContent] = useState('Loading...');

  useEffect(() => {
    const fetchHTML = async () => {
      const baseUrl = 'https://mentalspacetherapy.lovable.app';
      const routes = ['/', '/online-therapy', '/mental-health-library/anxiety'];
      let output = '';

      for (const route of routes) {
        try {
          const response = await fetch(`${baseUrl}${route}`, {
            headers: {
              'User-Agent': 'MentalSpace-Diagnostics'
            }
          });
          
          if (response.ok) {
            const html = await response.text();
            output += `\n\n=== ROUTE: ${route} ===\n`;
            
            // Extract key SEO elements
            const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
            const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
            const firstPMatch = html.match(/<p[^>]*>(.*?)<\/p>/i);
            const canonicalMatch = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/i);
            
            output += `Title: ${titleMatch ? titleMatch[1] : 'NOT FOUND'}\n`;
            output += `H1: ${h1Match ? h1Match[1].replace(/<[^>]*>/g, '') : 'NOT FOUND'}\n`;
            output += `First P: ${firstPMatch ? firstPMatch[1].replace(/<[^>]*>/g, '').slice(0, 100) + '...' : 'NOT FOUND'}\n`;
            output += `Canonical: ${canonicalMatch ? canonicalMatch[1] : 'NOT FOUND'}\n`;
            
            // Check for JSON-LD
            const jsonLdMatches = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gi);
            output += `JSON-LD Scripts: ${jsonLdMatches ? jsonLdMatches.length : 0}\n`;
            
          } else {
            output += `\n\n=== ROUTE: ${route} ===\nERROR: ${response.status} ${response.statusText}\n`;
          }
        } catch (error) {
          output += `\n\n=== ROUTE: ${route} ===\nERROR: ${error}\n`;
        }
      }
      
      setHtmlContent(output);
    };

    fetchHTML();
  }, []);

  return (
    <div style={{ 
      fontFamily: 'monospace', 
      whiteSpace: 'pre-wrap', 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      {htmlContent}
    </div>
  );
};

export default HTMLDiagnostic;