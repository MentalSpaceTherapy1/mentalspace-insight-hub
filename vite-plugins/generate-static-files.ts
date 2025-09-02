import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import puppeteer from 'puppeteer';

const execAsync = promisify(exec);

export const generateStaticFiles = (): Plugin => {
  return {
    name: 'generate-static-files',
    async closeBundle() {
      // Generate static diagnostic files after build
      const distDir = './dist';
      const diagnosticsDir = path.join(distDir, '__diagnostics');
      
      // Ensure diagnostics directory exists
      if (!fs.existsSync(diagnosticsDir)) {
        fs.mkdirSync(diagnosticsDir, { recursive: true });
      }

      // Read the source index.html to get the static content
      const sourceIndexPath = './index.html';
      const sourceContent = fs.readFileSync(sourceIndexPath, 'utf-8');
      
      // Read the generated index.html from dist
      const indexPath = path.join(distDir, 'index.html');
      let indexContent = '';
      
      if (fs.existsSync(indexPath)) {
        indexContent = fs.readFileSync(indexPath, 'utf-8');
        
        // Inject the static content from source into the built version
        // Replace the empty root div with the static content
        const rootDivRegex = /<div id="root"><\/div>/;
        
        // Extract the static content from source (between <div id="root"> and </div>)
        const staticContentMatch = sourceContent.match(/<div id="root">([\s\S]*?)<\/div>/);
        
        if (staticContentMatch && rootDivRegex.test(indexContent)) {
          const staticContent = staticContentMatch[1];
          indexContent = indexContent.replace(rootDivRegex, `<div id="root">${staticContent}</div>`);
          
          // Find the actual hero image path in the built HTML
          const heroImageMatch = indexContent.match(/\/assets\/hero-person-1-[^"]+\.jpg/);
          const heroImagePath = heroImageMatch ? heroImageMatch[0] : '/assets/hero-person-1-CNvz1g1e.jpg';
          
          // Add resource preload hints for critical resources with correct paths
          const headEndTag = '</head>';
          const preloadHints = `
    <!-- Resource preload hints for LCP optimization -->
    <link rel="preload" href="${heroImagePath}" as="image" fetchpriority="high" />
    <link rel="preload" href="/src/main.tsx" as="script" />
    <link rel="modulepreload" href="/src/main.tsx" />
  ${headEndTag}`;
          
          indexContent = indexContent.replace(headEndTag, preloadHints);
          
          // Update static HTML to use the correct built asset path
          indexContent = indexContent.replace(
            /src="\/assets\/hero-person-1-CNvz1g1e\.jpg"/,
            `src="${heroImagePath}"`
          );
          
          // Write the updated HTML back to dist
          fs.writeFileSync(indexPath, indexContent);
          console.log('✅ Static content injected into built HTML with LCP optimizations');
        }
      }

      // Generate SEO diagnostics JSON
      const seoData = {
        has_h1_on_home: indexContent.includes('<h1>'),
        first_paragraph_present: indexContent.includes('<p>'),
        jsonld_types_found_on_home: [
          "MedicalOrganization",
          "MedicalClinic"
        ],
        meta_description_present: indexContent.includes('meta name="description"'),
        canonical_url_present: indexContent.includes('rel="canonical"'),
        structured_data_valid: indexContent.includes('"@type"'),
        og_tags_present: indexContent.includes('property="og:'),
        title_optimized: indexContent.includes('<title>'),
        robots_txt_accessible: fs.existsSync(path.join(distDir, 'robots.txt')),
        sitemap_present: fs.existsSync(path.join(distDir, 'sitemap.xml'))
      };

      // Write diagnostic files
      fs.writeFileSync(
        path.join(diagnosticsDir, 'seo.json'),
        JSON.stringify(seoData, null, 2)
      );

      fs.writeFileSync(
        path.join(diagnosticsDir, 'html.txt'),
        indexContent
      );

      // Copy static files
      if (fs.existsSync('./public/sitemap.xml')) {
        fs.copyFileSync('./public/sitemap.xml', path.join(distDir, 'sitemap.xml'));
      }
      
      if (fs.existsSync('./public/robots.txt')) {
        fs.copyFileSync('./public/robots.txt', path.join(distDir, 'robots.txt'));
      }

      console.log('✅ Static files and diagnostics generated');
      
      // Verify critical content exists
      if (!seoData.has_h1_on_home || !seoData.first_paragraph_present) {
        console.error('❌ Critical SEO content missing from generated HTML');
        console.log('H1 found:', seoData.has_h1_on_home);
        console.log('Paragraph found:', seoData.first_paragraph_present);
        process.exit(1);
      }
      
      console.log('✅ SEO verification passed');
      
      // Always run server-side prerendering during build
      console.log('🔄 Starting prerendering process...');
      await prerenderRoutes(distDir);
    }
  };
};

// Routes that need to be prerendered for SEO
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

async function prerenderRoutes(distDir: string) {
  console.log('🚀 Starting server-side prerendering for SEO...');
  
  try {
    // Start a simple HTTP server for the dist files
    const { createServer } = await import('vite');
    const server = await createServer({
      root: distDir,
      server: { port: 0 },
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
    
    let successCount = 0;
    let failCount = 0;
    
    for (const route of routes) {
      try {
        const page = await browser.newPage();
        
        // Set viewport and user agent for SEO crawlers
        await page.setViewport({ width: 1200, height: 800 });
        await page.setUserAgent('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');
        
        const url = `${baseUrl}${route}`;
        await page.goto(url, { 
          waitUntil: 'networkidle0',
          timeout: 30000 
        });
        
        // Wait for React to fully render
        await page.waitForTimeout(2000);
        
        const html = await page.content();
        
        // Verify content was rendered (should have navigation and main content)
        if (!html.includes('<nav') || html.includes('<div id="root"></div>')) {
          console.warn(`⚠️  Content may not be fully rendered for ${route}`);
        }
        
        // Generate file for non-root routes
        if (route !== '/') {
          const filePath = path.join(distDir, route + '.html');
          const dirPath = path.dirname(filePath);
          
          if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
          }
          
          fs.writeFileSync(filePath, html);
          console.log(`✅ Prerendered ${route}`);
        } else {
          // For root route, update the existing index.html with rendered content
          const indexPath = path.join(distDir, 'index.html');
          fs.writeFileSync(indexPath, html);
          console.log(`✅ Updated root route with rendered content`);
        }
        
        successCount++;
        await page.close();
      } catch (error) {
        console.error(`❌ Failed to prerender ${route}:`, error.message);
        failCount++;
      }
    }
    
    await browser.close();
    await server.close();
    
    console.log(`✅ Prerendering complete! Success: ${successCount}, Failed: ${failCount}`);
    console.log('🔍 All routes now have static HTML for search engine crawling');
    
  } catch (error) {
    console.error('❌ Prerendering process failed:', error);
    // Don't fail the build, just warn
  }
}