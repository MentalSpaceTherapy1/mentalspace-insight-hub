// Helper functions for creating diagnostic content

function createHTMLDiagnosticReport(homeHtml, routes, distDir) {
  const fs = require('fs-extra');
  const path = require('path');
  
  let report = '# HTML Diagnostic Report\n\n';
  report += 'This page shows the actual HTML content served for key routes to verify SEO crawling.\n\n';
  
  // Analyze the home page
  const h1Match = homeHtml.match(/<h1[^>]*>(.*?)<\/h1>/is);
  const pMatch = homeHtml.match(/<p[^>]*>(.*?)<\/p>/is);
  const titleMatch = homeHtml.match(/<title>(.*?)<\/title>/is);
  const canonicalMatch = homeHtml.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/i);
  const jsonLdMatches = homeHtml.match(/<script[^>]*type="application\/ld\+json"[^>]*>/gi);
  
  report += '=== ROUTE: / ===\n';
  report += `Title: ${titleMatch ? titleMatch[1].trim() : 'NOT FOUND'}\n`;
  report += `H1: ${h1Match ? h1Match[1].replace(/<[^>]*>/g, '').trim().substring(0, 100) : 'NOT FOUND'}\n`;
  report += `First P: ${pMatch ? pMatch[1].replace(/<[^>]*>/g, '').trim().substring(0, 100) : 'NOT FOUND'}\n`;
  report += `Canonical: ${canonicalMatch ? canonicalMatch[1] : 'NOT FOUND'}\n`;
  report += `JSON-LD Scripts: ${jsonLdMatches ? jsonLdMatches.length : 0}\n\n`;
  
  report += 'First 500 chars of HTML:\n';
  report += homeHtml.substring(0, 500) + '\n\n';
  
  // Add other routes if they exist
  const otherRoutes = ['/online-therapy', '/services', '/insights'];
  for (const route of otherRoutes) {
    const routeFile = route === '/' ? 'index.html' : `${route}/index.html`;
    const routePath = path.join(distDir, routeFile);
    
    if (fs.existsSync(routePath)) {
      const routeHtml = fs.readFileSync(routePath, 'utf-8');
      const routeH1 = routeHtml.match(/<h1[^>]*>(.*?)<\/h1>/is);
      const routeP = routeHtml.match(/<p[^>]*>(.*?)<\/p>/is);
      const routeTitle = routeHtml.match(/<title>(.*?)<\/title>/is);
      
      report += `=== ROUTE: ${route} ===\n`;
      report += `Title: ${routeTitle ? routeTitle[1].trim() : 'NOT FOUND'}\n`;
      report += `H1: ${routeH1 ? routeH1[1].replace(/<[^>]*>/g, '').trim().substring(0, 100) : 'NOT FOUND'}\n`;
      report += `First P: ${routeP ? routeP[1].replace(/<[^>]*>/g, '').trim().substring(0, 100) : 'NOT FOUND'}\n\n`;
    }
  }
  
  return report;
}

function createSEODiagnostic(homeHtml, env, distDir) {
  const path = require('path');
  const fs = require('fs-extra');
  
  // Enhanced SEO analysis
  const h1Match = homeHtml.match(/<h1[^>]*>/i);
  const pMatch = homeHtml.match(/<p[^>]*>/i);
  const canonicalMatch = homeHtml.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/i);
  const jsonLdMatches = homeHtml.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gis);
  
  const jsonLdTypes = [];
  if (jsonLdMatches) {
    jsonLdMatches.forEach(match => {
      try {
        const content = match.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
        const parsed = JSON.parse(content);
        if (parsed['@type']) {
          jsonLdTypes.push(parsed['@type']);
        } else if (Array.isArray(parsed)) {
          parsed.forEach(item => {
            if (item && item['@type']) {
              jsonLdTypes.push(item['@type']);
            }
          });
        }
      } catch (e) {
        console.warn('Failed to parse JSON-LD:', e.message);
      }
    });
  }
  
  // Check if sitemap exists
  const sitemapExists = fs.existsSync(path.join(distDir, 'sitemap.xml'));
  
  // Detect base URL
  let baseUrl = 'https://mentalspacetherapy.lovable.app';
  if (canonicalMatch) {
    try {
      const url = new URL(canonicalMatch[1]);
      baseUrl = `${url.protocol}//${url.host}`;
    } catch(e) {
      // Use default
    }
  }
  
  return {
    env,
    robots_mode: env === 'production' ? 'indexable' : 'noindex',
    has_sitemap: sitemapExists,
    canonical_for_home: canonicalMatch ? canonicalMatch[1] : baseUrl + '/',
    jsonld_types_found_on_home: [...new Set(jsonLdTypes)],
    jsonld_types_found_on_sample_article: [], // Could be enhanced
    has_h1_on_home: !!h1Match,
    first_paragraph_present: !!pMatch,
    base_url_detected: baseUrl,
    structured_data_count: jsonLdMatches ? jsonLdMatches.length : 0,
    seo_score: calculateSEOScore(homeHtml, jsonLdMatches, h1Match, pMatch, canonicalMatch)
  };
}

function calculateSEOScore(html, jsonLd, h1, p, canonical) {
  let score = 0;
  if (h1) score += 25;
  if (p) score += 25;
  if (canonical) score += 25;
  if (jsonLd && jsonLd.length > 0) score += 25;
  return score;
}

module.exports = {
  createHTMLDiagnosticReport,
  createSEODiagnostic
};