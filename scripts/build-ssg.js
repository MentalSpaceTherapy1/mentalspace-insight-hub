#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

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
    execSync('vite build', { 
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
    
    // HTML diagnostic endpoint
    const homeHtml = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8');
    const htmlDiagnosticContent = `${homeHtml}`;
    
    await fs.ensureDir(path.join(distDir, '__diagnostics'));
    await fs.writeFile(
      path.join(distDir, '__diagnostics', 'html.txt'),
      htmlDiagnosticContent,
      'utf-8'
    );

    // SEO diagnostic endpoint  
    const h1Match = homeHtml.match(/<h1[^>]*>/i);
    const pMatch = homeHtml.match(/<p[^>]*>/i);
    const canonicalMatch = homeHtml.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/i);
    const jsonLdMatches = homeHtml.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gi);
    
    const jsonLdTypes = [];
    if (jsonLdMatches) {
      jsonLdMatches.forEach(match => {
        try {
          const content = match.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
          const parsed = JSON.parse(content);
          if (parsed['@type']) {
            jsonLdTypes.push(parsed['@type']);
          } else if (Array.isArray(parsed)) {
            parsed.forEach(item => {
              if (item['@type']) {
                jsonLdTypes.push(item['@type']);
              }
            });
          }
        } catch (e) {
          // Skip invalid JSON-LD
        }
      });
    }

    const seoDiagnostic = {
      env,
      robots_mode: env === 'production' ? 'indexable' : 'noindex',
      canonical_for_home: canonicalMatch ? canonicalMatch[1] : null,
      has_h1_on_home: !!h1Match,
      first_paragraph_present: !!pMatch,
      jsonld_types_found_on_home: [...new Set(jsonLdTypes)]
    };

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