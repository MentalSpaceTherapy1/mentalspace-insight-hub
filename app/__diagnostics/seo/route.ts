import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const env = process.env.NEXT_PUBLIC_ENV || 'preview';
  
  let diagnostics = {
    env,
    robots_mode: env === 'prod' ? 'indexable' : 'noindex',
    has_sitemap: false,
    canonical_for_home: null as string | null,
    jsonld_types_found_on_home: [] as string[],
    jsonld_types_found_on_sample_article: [] as string[],
  };
  
  // Check sitemap
  try {
    const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
    diagnostics.has_sitemap = sitemapResponse.ok;
  } catch (error) {
    diagnostics.has_sitemap = false;
  }
  
  // Check home page
  try {
    const homeResponse = await fetch(`${baseUrl}/`);
    if (homeResponse.ok) {
      const homeHtml = await homeResponse.text();
      
      // Extract canonical
      const canonicalMatch = homeHtml.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/i);
      diagnostics.canonical_for_home = canonicalMatch ? canonicalMatch[1] : null;
      
      // Extract JSON-LD types
      const jsonLdMatches = homeHtml.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gi);
      if (jsonLdMatches) {
        jsonLdMatches.forEach(match => {
          try {
            const content = match.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
            const parsed = JSON.parse(content);
            if (parsed['@type']) {
              diagnostics.jsonld_types_found_on_home.push(parsed['@type']);
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
    const articleResponse = await fetch(`${baseUrl}/insights/anxiety-basics`);
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
              diagnostics.jsonld_types_found_on_sample_article.push(parsed['@type']);
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
  
  return NextResponse.json(diagnostics, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}