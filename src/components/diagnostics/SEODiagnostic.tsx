import { useEffect, useState } from 'react';
import { getEnvironment, shouldIndex, getBaseUrl } from '@/utils/envUtils';
import Header from '@/components/Header';

const SEODiagnostic = () => {
  const [diagnostics, setDiagnostics] = useState({});

  useEffect(() => {
    const runDiagnostics = async () => {
      const baseUrl = getBaseUrl();
      const env = getEnvironment();
      
      let results = {
        env,
        robots_mode: shouldIndex() ? 'indexable' : 'noindex',
        has_sitemap: false,
        canonical_for_home: null as string | null,
        jsonld_types_found_on_home: [] as string[],
        jsonld_types_found_on_sample_article: [] as string[],
        has_h1_on_home: false,
        first_paragraph_present: false,
        base_url_detected: baseUrl,
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
          
          // Check for H1
          const h1Match = homeHtml.match(/<h1[^>]*>/i);
          results.has_h1_on_home = !!h1Match;
          
          // Check for first paragraph
          const pMatch = homeHtml.match(/<p[^>]*>/i);
          results.first_paragraph_present = !!pMatch;
          
          // Extract JSON-LD types
          const jsonLdMatches = homeHtml.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gi);
          if (jsonLdMatches) {
            jsonLdMatches.forEach(match => {
              try {
                const content = match.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
                const parsed = JSON.parse(content);
                if (parsed['@type']) {
                  results.jsonld_types_found_on_home.push(parsed['@type']);
                } else if (Array.isArray(parsed)) {
                  parsed.forEach(item => {
                    if (item['@type']) {
                      results.jsonld_types_found_on_home.push(item['@type']);
                    }
                  });
                }
              } catch (e) {
                // Skip invalid JSON-LD
              }
            });
          }
        }
      } catch (error) {
        results.canonical_for_home = `ERROR: ${error}`;
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
                } else if (Array.isArray(parsed)) {
                  parsed.forEach(item => {
                    if (item['@type']) {
                      results.jsonld_types_found_on_sample_article.push(item['@type']);
                    }
                  });
                }
              } catch (e) {
                // Skip invalid JSON-LD
              }
            });
          }
        }
      } catch (error) {
        results.jsonld_types_found_on_sample_article = [`ERROR: ${error}`];
      }
      
      setDiagnostics(results);
    };

    runDiagnostics();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto py-8">
        <Header />
        <main className="mt-8">
          <h1 className="text-3xl font-bold mb-6">SEO Diagnostic Report</h1>
          <p className="text-muted-foreground mb-6">
            This page analyzes SEO configuration across the site to verify crawler compatibility.
          </p>
          <pre className="bg-muted p-4 rounded-lg text-sm overflow-auto">
            {JSON.stringify(diagnostics, null, 2)}
          </pre>
        </main>
      </div>
    </div>
  );
};

export default SEODiagnostic;