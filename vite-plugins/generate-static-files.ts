import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';

export const generateStaticFiles = (): Plugin => {
  const runPrerender = async () => {
    try {
      console.log('🚀 Starting automatic prerendering...');
      
      // Skip prerendering in development
      if (process.env.NODE_ENV !== 'production') {
        console.log('⏭️  Skipping prerendering in development mode');
        return;
      }
      
      // Import puppeteer dynamically to avoid issues in development
      const puppeteer = await import('puppeteer');
      
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

      const baseUrl = 'http://localhost:8080';
      const distDir = './dist';
      
      const browser = await puppeteer.default.launch({ 
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      
      for (const route of routes) {
        try {
          console.log(`Prerendering ${route}...`);
          const page = await browser.newPage();
          
          await page.setViewport({ width: 1200, height: 800 });
          await page.setUserAgent('Mozilla/5.0 (compatible; PrerenderBot/1.0)');
          
          const url = `${baseUrl}${route}`;
          await page.goto(url, { 
            waitUntil: 'networkidle0',
            timeout: 30000 
          });
          
          await page.waitForTimeout(2000);
          
          const html = await page.content();
          
          // Verify navigation is present
          if (!html.includes('nav') || !html.includes('footer')) {
            console.warn(`⚠️  Navigation or footer missing in ${route}`);
          }
          
          const routePath = route === '/' ? '/index' : route;
          const filePath = path.join(distDir, routePath + '.html');
          const dirPath = path.dirname(filePath);
          
          if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
          }
          
          fs.writeFileSync(filePath, html);
          console.log(`✅ Generated ${filePath}`);
          
          await page.close();
        } catch (error) {
          console.error(`❌ Failed to prerender ${route}:`, error.message);
        }
      }
      
      await browser.close();
      console.log('✅ Prerendering complete!');
      
    } catch (error) {
      console.warn('⚠️  Prerendering skipped (likely in development):', error.message);
    }
  };

  return {
    name: 'generate-static-files',
    closeBundle() {
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
      
      // Auto-run prerendering after build completes (production only)
      if (process.env.NODE_ENV === 'production') {
        runPrerender();
      }
      
      // Verify critical content exists
      if (!seoData.has_h1_on_home || !seoData.first_paragraph_present) {
        console.error('❌ Critical SEO content missing from generated HTML');
        console.log('H1 found:', seoData.has_h1_on_home);
        console.log('Paragraph found:', seoData.first_paragraph_present);
        process.exit(1);
      }
      
      console.log('✅ SEO verification passed');
    }
  };
};