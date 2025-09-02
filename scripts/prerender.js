import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

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

const distDir = './dist';

async function prerenderRoutes() {
  // Check if dist directory exists
  if (!fs.existsSync(distDir)) {
    console.error('❌ Dist directory not found. Make sure build has completed first.');
    return;
  }

  console.log('🚀 Starting server-side prerendering...');
  
  // Create a preview server to serve the built files
  const server = await createServer({
    root: distDir,
    server: { port: 0 }, // Use any available port
    mode: 'production',
    configFile: false,
    plugins: []
  });
  
  await server.listen();
  const port = server.config.server.port;
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
      
      // Verify content was rendered
      if (!html.includes('<nav') || !html.includes('<footer')) {
        console.warn(`⚠️  Navigation or footer missing in ${route}`);
      }
      
      // Only generate non-root route files (root is handled by build)
      if (route !== '/') {
        const routePath = route;
        const filePath = path.join(distDir, routePath + '.html');
        const dirPath = path.dirname(filePath);
        
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }
        
        fs.writeFileSync(filePath, html);
        console.log(`✅ Generated ${filePath}`);
      } else {
        console.log(`✅ Root route already handled by build process`);
      }
      
      await page.close();
    } catch (error) {
      console.error(`❌ Failed to prerender ${route}:`, error.message);
    }
  }
  
  await browser.close();
  await server.close();
  console.log('✅ Server-side prerendering complete!');
}

prerenderRoutes().catch(console.error);