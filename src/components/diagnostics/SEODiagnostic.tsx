import { useEffect, useState } from 'react';

const SEODiagnostic = () => {
  const [diagnostics, setDiagnostics] = useState({});

  useEffect(() => {
    const runDiagnostics = async () => {
      const baseUrl = 'https://mentalspacetherapy.lovable.app';
      const env = process.env.NODE_ENV || 'development';
      
      let results = {
        env,
        robots_mode: env === 'production' ? 'indexable' : 'noindex',
        has_sitemap: false,
        canonical_for_home: null as string | null,
        jsonld_types_found_on_home: [] as string[],
        jsonld_types_found_on_sample_article: [] as string[],
      };
      
      // Check sitemap
      try {
        const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
        results.has_sitemap = sitemapResponse.ok;
      } catch (error) {
        results.has_sitemap = false;
      }
      
      // Check home page
      try {
        const homeResponse = await fetch(`${baseUrl}/`);
        if (homeResponse.ok) {
          const homeHtml = await homeResponse.text();
          
          // Extract canonical
          const canonicalMatch = homeHtml.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/i);
          results.canonical_for_home = canonicalMatch ? canonicalMatch[1] : null;
          
          // Extract JSON-LD types
          const jsonLdMatches = homeHtml.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gi);
          if (jsonLdMatches) {
            jsonLdMatches.forEach(match => {
              try {
                const content = match.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
                const parsed = JSON.parse(content);
                if (parsed['@type']) {
                  results.jsonld_types_found_on_home.push(parsed['@type']);
                }
              } catch (e) {
                // Skip invalid JSON-LD
              }
            });
          }
        }
      } catch (error) {
        // Skip if home page fails
      }
      
      // Check sample article
      try {
        const articleResponse = await fetch(`${baseUrl}/mental-health-library/anxiety`);
        if (articleResponse.ok) {
          const articleHtml = await articleResponse.text();
          
          // Extract JSON-LD types
          const jsonLdMatches = articleHtml.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gi);
          if (jsonLdMatches) {
            jsonLdMatches.forEach(match => {
              try {
                const content = match.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
                const parsed = JSON.parse(content);
                if (parsed['@type']) {
                  results.jsonld_types_found_on_sample_article.push(parsed['@type']);
                }
              } catch (e) {
                // Skip invalid JSON-LD
              }
            });
          }
        }
      } catch (error) {
        // Skip if article fails
      }
      
      setDiagnostics(results);
    };

    runDiagnostics();
  }, []);

  return (
    <div style={{ 
      fontFamily: 'monospace', 
      whiteSpace: 'pre-wrap', 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1>SEO Diagnostics</h1>
      {JSON.stringify(diagnostics, null, 2)}
    </div>
  );
};

export default SEODiagnostic;