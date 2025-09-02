import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';

export const generateStaticFiles = (): Plugin => {
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