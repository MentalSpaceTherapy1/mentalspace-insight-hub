import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
  '/',
  '/online-therapy',
  '/couples-therapy', 
  '/teen-therapy',
  '/life-coaching',
  '/relationship-coaching',
  '/coaching-services',
  '/insurance',
  '/faq',
  '/contact-us',
  '/career',
  '/career-application',
  '/emergency-resources',
  '/get-started',
  '/therapist-matching',
  '/mental-health-library',
  '/mental-health-tests',
  '/assessment-contact',
  '/thank-you',
  '/blog',
  '/mental-health-library/depression',
  '/mental-health-library/anxiety', 
  '/mental-health-library/adhd',
  '/privacy-policy',
  '/terms-conditions'
];

// Critical SEO validation function
function validateSEOContent(html, route) {
  const checks = {
    hasTitle: html.includes('<title>') && !html.includes('<title></title>'),
    hasMetaDescription: html.includes('name="description"'),
    hasH1: html.includes('<h1'),
    hasContent: html.includes('<p>') || html.includes('<div class='),
    hasNav: html.includes('<nav'),
    hasFooter: html.includes('<footer'),
    hasJsonLd: html.includes('application/ld+json'),
    notEmpty: !html.match(/<div id="root"><\/div>/)
  };
  
  const score = Object.values(checks).filter(Boolean).length;
  const maxScore = Object.keys(checks).length;
  
  return { checks, score, maxScore };
}

function logSEOResults(route, validation) {
  const percentage = Math.round((validation.score / validation.maxScore) * 100);
  const status = percentage >= 75 ? '✅' : percentage >= 50 ? '⚠️' : '❌';
  
  console.log(`${status} ${route}: ${validation.score}/${validation.maxScore} (${percentage}%) SEO signals`);
  
  if (percentage < 75) {
    const failed = Object.entries(validation.checks)
      .filter(([_, passed]) => !passed)
      .map(([check]) => check);
    console.log(`   Missing: ${failed.join(', ')}`);
  }
}

const distDir = './dist';

async function prerenderRoutes() {
  // Check if dist directory exists
  if (!fs.existsSync(distDir)) {
    console.error('❌ Dist directory not found. Make sure build has completed first.');
    return;
  }

  console.log('🚀 Starting server-side prerendering...');
  
  // Create a preview server to serve the built files
  const { preview } = await import('vite');
  const server = await preview({
    root: distDir,
    preview: { 
      port: 0, // Use any available port
      host: 'localhost'
    },
    configFile: false
  });
  
  const port = server.config.preview.port;
  const baseUrl = `http://localhost:${port}`;
  
  console.log(`📡 Preview server started on ${baseUrl}`);

  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  for (const route of routes) {
    try {
      console.log(`Prerendering ${route}...`);
      const page = await browser.newPage();
      
      // Set viewport and user agent
      await page.setViewport({ width: 1200, height: 800 });
      await page.setUserAgent('Mozilla/5.0 (compatible; PrerenderBot/1.0)');
      
      const url = `${baseUrl}${route}`;
      await page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Wait for React to fully render
      await page.waitForTimeout(2000);
      
      const html = await page.content();
      
      // Comprehensive SEO validation
      const validation = validateSEOContent(html, route);
      logSEOResults(route, validation);
      
      // Generate static files for better hosting compatibility
      if (route !== '/') {
        // Create both /route.html and /route/index.html for maximum compatibility
        const routePath = route;
        
        // Create /route.html (legacy format)
        const legacyFilePath = path.join(distDir, routePath + '.html');
        const legacyDirPath = path.dirname(legacyFilePath);
        
        if (!fs.existsSync(legacyDirPath)) {
          fs.mkdirSync(legacyDirPath, { recursive: true });
        }
        
        fs.writeFileSync(legacyFilePath, html);
        
        // Create /route/index.html (modern static hosting format)
        const modernDirPath = path.join(distDir, routePath);
        const modernFilePath = path.join(modernDirPath, 'index.html');
        
        if (!fs.existsSync(modernDirPath)) {
          fs.mkdirSync(modernDirPath, { recursive: true });
        }
        
        fs.writeFileSync(modernFilePath, html);
        console.log(`📄 Saved: ${legacyFilePath} & ${modernFilePath}`);
        
        // Verify files were written correctly
        const legacyExists = fs.existsSync(legacyFilePath);
        const modernExists = fs.existsSync(modernFilePath);
        if (legacyExists && modernExists) {
          const fileSize = fs.statSync(modernFilePath).size;
          console.log(`✅ Verified: ${route} (${Math.round(fileSize/1024)}KB)`);
        }
      } else {
        // Also validate root route
        console.log(`📄 Root route validated`);
      }
      
      await page.close();
    } catch (error) {
      console.error(`❌ Failed to prerender ${route}:`, error.message);
    }
  }
  
  await browser.close();
  await server.close();
  
  // Final verification
  console.log('\n🔍 Final SEO Verification:');
  console.log('============================');
  let totalRoutes = 0;
  let successfulRoutes = 0;
  
  for (const route of routes) {
    totalRoutes++;
    let filePath;
    
    if (route === '/') {
      filePath = path.join(distDir, 'index.html');
    } else {
      // Check modern format first, fallback to legacy
      const modernPath = path.join(distDir, route, 'index.html');
      const legacyPath = path.join(distDir, route + '.html');
      filePath = fs.existsSync(modernPath) ? modernPath : legacyPath;
    }
    
    if (fs.existsSync(filePath)) {
      const html = fs.readFileSync(filePath, 'utf-8');
      const validation = validateSEOContent(html, route);
      
      if (validation.score >= 6) { // At least 75% of checks pass
        successfulRoutes++;
      }
    }
  }
  
  const successRate = Math.round((successfulRoutes / totalRoutes) * 100);
  console.log(`📊 SEO Success Rate: ${successfulRoutes}/${totalRoutes} routes (${successRate}%)`);
  
  if (successRate >= 90) {
    console.log('🎉 Excellent! Your site is search engine ready!');
  } else if (successRate >= 75) {
    console.log('⚠️  Good, but some routes need optimization');
  } else {
    console.log('❌ Critical: Many routes lack SEO content');
  }
  
  console.log('✅ Server-side prerendering complete!');
}

prerenderRoutes().catch(console.error);