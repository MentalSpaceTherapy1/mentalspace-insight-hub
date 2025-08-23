import fs from 'fs-extra';
import path from 'path';
import http from 'http';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

const prerender = async () => {
  console.log('🚀 Starting enhanced prerendering...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Set a realistic viewport
  await page.setViewport({ width: 1200, height: 800 });

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

  // Start a simple HTTP server for proper routing
  const server = http.createServer((req, res) => {
    const filePath = path.join(distDir, req.url === '/' ? 'index.html' : req.url);
    
    if (fs.existsSync(filePath) && !fs.statSync(filePath).isDirectory()) {
      const content = fs.readFileSync(filePath);
      const ext = path.extname(filePath);
      const contentType = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml'
      }[ext] || 'text/plain';
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    } else {
      // Serve index.html for SPA routes
      const indexContent = fs.readFileSync(path.join(distDir, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(indexContent);
    }
  });

  const port = 8080 + Math.floor(Math.random() * 1000);
  server.listen(port);

  for (const route of routes) {
    try {
      console.log(`📄 Pre-rendering: ${route}`);

      await page.goto(`http://localhost:${port}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Wait for React to fully render and content to load
      await page.waitForFunction(() => {
        const hasContent = document.body.innerHTML.includes('MentalSpace') ||
                          document.querySelectorAll('h1, h2, h3').length > 0 ||
                          document.querySelector('main') ||
                          document.querySelector('[role="main"]');
        const notLoadingState = !document.body.innerHTML.includes('loading') &&
                               !document.body.innerHTML.includes('Edit in Lovable');
        return hasContent && notLoadingState;
      }, { timeout: 15000 });

      // Additional wait for lazy content and images
      await page.waitForTimeout(3000);
      
      // Ensure all critical content is loaded
      await page.evaluate(() => {
        // Force render any lazy components
        window.scrollTo(0, document.body.scrollHeight);
        window.scrollTo(0, 0);
      });

      const renderedHtml = await page.content();

      // Create route structure
      const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
      const fullPath = path.join(distDir, routePath);
      
      await fs.ensureDir(path.dirname(fullPath));

      // Clean and optimize the HTML
      const optimizedHtml = renderedHtml
        .replace(/\s+/g, ' ')
        .replace(/>\s+</g, '><')
        .trim();

      await fs.writeFile(fullPath, optimizedHtml, 'utf-8');
      console.log(`✅ Generated: ${routePath}`);
      
    } catch (error) {
      console.error(`❌ Error pre-rendering ${route}:`, error.message);
    }
  }

  server.close();
  await browser.close();
  console.log('🎉 Enhanced prerendering complete! All routes now have full SEO-friendly content.');
};

prerender().catch(console.error);