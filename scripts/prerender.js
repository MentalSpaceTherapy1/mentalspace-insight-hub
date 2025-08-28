import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

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

const baseUrl = process.env.BASE_URL || 'http://localhost:8080';
const distDir = './dist';

async function prerenderRoutes() {
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  console.log('Starting prerendering...');
  
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
      
      // Wait a bit more for React to fully render
      await page.waitForTimeout(2000);
      
      const html = await page.content();
      
      // Create directory structure
      const routePath = route === '/' ? '/index' : route;
      const filePath = path.join(distDir, routePath + '.html');
      const dirPath = path.dirname(filePath);
      
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      
      // Write the HTML file
      fs.writeFileSync(filePath, html);
      console.log(`✅ Generated ${filePath}`);
      
      await page.close();
    } catch (error) {
      console.error(`❌ Failed to prerender ${route}:`, error.message);
    }
  }
  
  await browser.close();
  console.log('✅ Prerendering complete!');
}

prerenderRoutes().catch(console.error);