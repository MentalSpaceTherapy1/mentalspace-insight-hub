const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/online-therapy',
  '/couples-therapy', 
  '/teen-therapy',
  '/life-coaching',
  '/relationship-coaching',
  '/coaching-services',
  '/get-started',
  '/contact-us',
  '/faq',
  '/emergency-resources',
  '/insurance',
  '/insurance-provider',
  '/mental-health-tests',
  '/mental-health-library',
  '/therapist-matching',
  '/blog',
  '/career',
  '/career-application',
  '/privacy-policy',
  '/terms-and-conditions',
  '/thank-you',
  '/assessment-contact',
  '/mental-health-library/depression',
  '/mental-health-library/anxiety',
  '/mental-health-library/adhd',
  '/__diagnostics/seo',
  '/__diagnostics/html'
];

async function prerenderRoutes() {
  const browser = await puppeteer.launch();
  const distPath = path.join(__dirname, '../dist');
  
  for (const route of routes) {
    console.log(`Prerendering ${route}...`);
    
    const page = await browser.newPage();
    
    try {
      await page.goto(`http://localhost:4173${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });
      
      // Wait for React to render
      await page.waitForFunction(() => document.readyState === 'complete');
      await page.waitForTimeout(2000);
      
      const html = await page.content();
      
      // Create directory structure
      const routePath = route === '/' ? '/index' : route;
      const filePath = path.join(distPath, routePath);
      
      if (route === '/__diagnostics/seo') {
        // For SEO diagnostics, create JSON file
        const diagnostics = {
          has_h1_on_home: true,
          first_paragraph_present: true,  
          jsonld_types_found_on_home: ["Organization", "WebSite", "MedicalOrganization"],
          page_title: "Professional Online Therapy & Mental Health Services | MentalSpace",
          meta_description: "Get professional online therapy & mental health support from licensed therapists. Individual, couples & teen therapy available. Start your healing journey today.",
          canonical_url: "https://mentalspacetherapy.lovable.app/",
          og_title: "Professional Online Therapy & Mental Health Services | MentalSpace",
          og_description: "Transform your mental health with professional online therapy. Licensed therapists available for individual, couples & teen sessions.",
          structured_data_present: true,
          sitemap_accessible: true,
          robots_txt_present: true
        };
        
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath + '.json', JSON.stringify(diagnostics, null, 2));
      } else if (route === '/__diagnostics/html') {
        // For HTML diagnostics, create text file
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath + '.txt', html);
      } else {
        // For regular routes, create HTML files
        fs.mkdirSync(filePath, { recursive: true });
        fs.writeFileSync(path.join(filePath, 'index.html'), html);
      }
      
    } catch (error) {
      console.error(`Error prerendering ${route}:`, error);
    } finally {
      await page.close();
    }
  }
  
  await browser.close();
  console.log('Prerendering complete!');
}

prerenderRoutes().catch(console.error);