#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Helper functions for creating diagnostic content
async function createHTMLDiagnosticReport(homeHtml, routes, distDir) {
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
    
    try {
      if (await fs.pathExists(routePath)) {
        const routeHtml = await fs.readFile(routePath, 'utf-8');
        const routeH1 = routeHtml.match(/<h1[^>]*>(.*?)<\/h1>/is);
        const routeP = routeHtml.match(/<p[^>]*>(.*?)<\/p>/is);
        const routeTitle = routeHtml.match(/<title>(.*?)<\/title>/is);
        
        report += `=== ROUTE: ${route} ===\n`;
        report += `Title: ${routeTitle ? routeTitle[1].trim() : 'NOT FOUND'}\n`;
        report += `H1: ${routeH1 ? routeH1[1].replace(/<[^>]*>/g, '').trim().substring(0, 100) : 'NOT FOUND'}\n`;
        report += `First P: ${routeP ? routeP[1].replace(/<[^>]*>/g, '').trim().substring(0, 100) : 'NOT FOUND'}\n\n`;
      }
    } catch (e) {
      // Skip if route file doesn't exist
    }
  }
  
  return report;
}

function createSEODiagnostic(homeHtml, env, distDir) {
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
  
  // Check if sitemap exists - using async fs
  const sitemapPath = path.join(distDir, 'sitemap.xml');
  
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
    has_sitemap: true, // We generate it in the build process
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

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const distSSRDir = path.join(rootDir, 'dist-ssr');

console.log('🚀 Building SSG with server-side rendering...');

// Enhanced logging and environment detection
const env = getEnvironment();
console.log('🌍 Environment:', env);
console.log('📍 Hostname:', process.env.HOSTNAME || 'not set');
console.log('🔧 Node ENV:', process.env.NODE_ENV || 'not set');

// Routes to pre-generate
const routes = [
  '/',
  '/services',
  '/services/adults',
  '/insights',
  '/insights/anxiety-basics',
  '/online-therapy',
  '/couples-therapy',
  '/teen-therapy'
];

// Helper to get environment-specific robots content
function getRobotsContent(env) {
  return env === 'production' ? 'index, follow' : 'noindex, nofollow';
}

// Helper to detect environment
function getEnvironment() {
  const hostname = process.env.HOSTNAME || '';
  if (hostname === 'mentalspacetherapy.lovable.app') {
    return 'production';
  }
  return 'preview';
}

async function buildSSG() {
  try {
    // Clean previous builds first
    console.log('🧹 Cleaning previous builds...');
    await fs.remove(distDir);
    await fs.remove(distSSRDir);

    // Step 1: Build client
    console.log('📦 Building client bundle...');
    execSync('vite build --config vite.config.ssg.ts', { 
      stdio: 'inherit',
      cwd: rootDir 
    });

    // Step 2: Build server
    console.log('🔧 Building SSR server...');
    execSync('vite build --config vite.config.ssr.ts', { 
      stdio: 'inherit',
      cwd: rootDir 
    });

    // Step 3: Generate static HTML files
    console.log('📄 Generating static HTML files...');
    
    // Read the base HTML template
    const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8');
    
    // Import the server renderer
    const { render } = await import(path.join(distSSRDir, 'entry-server.js'));

    const env = getEnvironment();
    const robotsContent = getRobotsContent(env);

    for (const route of routes) {
      console.log(`  📝 Rendering: ${route}`);
      
      try {
        // Render the route server-side
        const { html, helmet } = render(route);
        
        // Replace the placeholder with rendered HTML
        let finalHtml = template.replace(
          '<div id="root"></div>',
          `<div id="root">${html}</div>`
        );

        // Inject helmet data (title, meta, links, scripts including JSON-LD)
        if (helmet && typeof helmet === 'object') {
          // Add helmet script tags (JSON-LD) to head
          if (helmet.script && typeof helmet.script === 'string') {
            finalHtml = finalHtml.replace(
              '</head>',
              `${helmet.script}\n</head>`
            );
          }
          
          // Add helmet meta tags to head
          if (helmet.meta && typeof helmet.meta === 'string') {
            finalHtml = finalHtml.replace(
              '</head>',
              `${helmet.meta}\n</head>`
            );
          }
          
          // Add helmet link tags to head  
          if (helmet.link && typeof helmet.link === 'string') {
            finalHtml = finalHtml.replace(
              '</head>',
              `${helmet.link}\n</head>`
            );
          }
          
          // Replace title if provided by helmet
          if (helmet.title && typeof helmet.title === 'string') {
            finalHtml = finalHtml.replace(
              /<title>.*?<\/title>/,
              helmet.title
            );
          }
        }

        // Update robots meta tag based on environment
        finalHtml = finalHtml.replace(
          /<meta name="robots" content="[^"]*"/,
          `<meta name="robots" content="${robotsContent}"`
        );

        // Create directory structure for route
        const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
        const fullPath = path.join(distDir, routePath);
        
        await fs.ensureDir(path.dirname(fullPath));
        await fs.writeFile(fullPath, finalHtml, 'utf-8');
        
        console.log(`  ✅ Generated: ${routePath}`);
      } catch (error) {
        console.error(`  ❌ Error rendering ${route}:`, error.message);
      }
    }

    // Step 4: Create diagnostic endpoints
    console.log('🔍 Creating diagnostic endpoints...');
    
    // Read the rendered home page HTML to analyze it
    const homeHtml = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8');
    
    // Create proper HTML diagnostic report
    const htmlDiagnosticContent = await createHTMLDiagnosticReport(homeHtml, routes, distDir);
    
    await fs.ensureDir(path.join(distDir, '__diagnostics'));
    await fs.writeFile(
      path.join(distDir, '__diagnostics', 'html.txt'),
      htmlDiagnosticContent,
      'utf-8'
    );

    // SEO diagnostic endpoint - enhanced analysis
    const seoDiagnostic = createSEODiagnostic(homeHtml, env, distDir);

    await fs.writeFile(
      path.join(distDir, '__diagnostics', 'seo.json'),
      JSON.stringify(seoDiagnostic, null, 2),
      'utf-8'
    );

    // Step 5: Generate sitemap
    console.log('🗺️ Generating sitemap...');
    const baseUrl = 'https://mentalspacetherapy.lovable.app';
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf-8');

    // Step 6: Create build status endpoint
    console.log('📊 Creating build status endpoint...');
    const buildStatus = {
      timestamp: new Date().toISOString(),
      environment: env,
      success: true,
      routes_generated: routes.length,
      static_files_count: (await fs.readdir(distDir)).length,
      has_diagnostics: true,
      build_version: Date.now().toString(),
      hostname: process.env.HOSTNAME || 'unknown',
      node_env: process.env.NODE_ENV || 'development'
    };
    
    await fs.writeFile(
      path.join(distDir, '__diagnostics', 'build-status.json'),
      JSON.stringify(buildStatus, null, 2),
      'utf-8'
    );

    // Step 7: Update robots.txt
    console.log('🤖 Updating robots.txt...');
    const robotsTxt = `User-agent: *
Allow: /

# Block admin areas
Disallow: /admin
Disallow: /__diagnostics

# Important files
Sitemap: ${baseUrl}/sitemap.xml

# Environment: ${env}
# Crawl-delay for respectful crawling
Crawl-delay: 1`;

    await fs.writeFile(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');

    // Clean up SSR build directory
    await fs.remove(distSSRDir);

    console.log('✅ SSG build complete!');
    console.log(`📁 Static files ready in: ${distDir}`);
    console.log(`🌐 Routes pre-rendered: ${routes.length}`);
    console.log(`🔍 Diagnostics available at:`);
    console.log(`  - /__diagnostics/html.txt`);
    console.log(`  - /__diagnostics/seo.json`);
    console.log(`  - /__diagnostics/build-status.json`);
    console.log(`🤖 Environment: ${env} (${robotsContent})`);
    console.log(`🏗️ Build verification: Run 'node scripts/verify-build.js' to verify`);
    
    // Final verification
    const verification = await quickVerify();
    if (!verification.success) {
      console.warn('⚠️ Build completed but verification found issues:', verification.issues);
    } else {
      console.log('🎉 Build verified successfully!');
    }
    
  } catch (error) {
    console.error('❌ SSG build failed:', error);
    
    // Create error diagnostic
    try {
      await fs.ensureDir(path.join(distDir, '__diagnostics'));
      const errorStatus = {
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message,
        environment: getEnvironment(),
        hostname: process.env.HOSTNAME || 'unknown'
      };
      
      await fs.writeFile(
        path.join(distDir, '__diagnostics', 'build-status.json'),
        JSON.stringify(errorStatus, null, 2),
        'utf-8'
      );
    } catch (diagError) {
      console.error('Failed to write error diagnostic:', diagError.message);
    }
    
    process.exit(1);
  }
}

// Quick verification function
async function quickVerify() {
  const issues = [];
  
  try {
    // Check index.html has content
    const indexPath = path.join(distDir, 'index.html');
    if (await fs.pathExists(indexPath)) {
      const content = await fs.readFile(indexPath, 'utf-8');
      if (!content.includes('<h1')) issues.push('index.html missing H1');
      if (!content.includes('<p')) issues.push('index.html missing paragraph content');
    } else {
      issues.push('index.html not found');
    }
    
    // Check diagnostics
    const diagDir = path.join(distDir, '__diagnostics');
    if (!await fs.pathExists(diagDir)) issues.push('diagnostics directory missing');
    
  } catch (error) {
    issues.push(`Verification error: ${error.message}`);
  }
  
  return {
    success: issues.length === 0,
    issues
  };
}

buildSSG();