import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

// Routes that should be included in sitemap
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/online-therapy', priority: '0.9', changefreq: 'monthly' },
  { path: '/couples-therapy', priority: '0.9', changefreq: 'monthly' },
  { path: '/teen-therapy', priority: '0.9', changefreq: 'monthly' },
  { path: '/life-coaching', priority: '0.8', changefreq: 'monthly' },
  { path: '/relationship-coaching', priority: '0.8', changefreq: 'monthly' },
  { path: '/coaching-services', priority: '0.8', changefreq: 'monthly' },
  { path: '/insurance', priority: '0.7', changefreq: 'monthly' },
  { path: '/faq', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact-us', priority: '0.7', changefreq: 'monthly' },
  { path: '/career', priority: '0.5', changefreq: 'monthly' },
  { path: '/emergency-resources', priority: '0.8', changefreq: 'monthly' },
  { path: '/get-started', priority: '0.8', changefreq: 'monthly' },
  { path: '/therapist-matching', priority: '0.7', changefreq: 'monthly' },
  { path: '/mental-health-library', priority: '0.8', changefreq: 'weekly' },
  { path: '/mental-health-tests', priority: '0.7', changefreq: 'monthly' },
  { path: '/mental-health-library/depression', priority: '0.7', changefreq: 'monthly' },
  { path: '/mental-health-library/anxiety', priority: '0.7', changefreq: 'monthly' },
  { path: '/mental-health-library/adhd', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-conditions', priority: '0.3', changefreq: 'yearly' }
];

const generateSitemap = () => {
  console.log('🗺️ Generating dynamic sitemap...');
  
  const baseUrl = 'https://mentalspacetherapy.lovable.app';
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    sitemapXML += `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemapXML += `
</urlset>`;

  // Write to dist directory
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXML, 'utf-8');
  console.log(`✅ Sitemap generated with ${routes.length} URLs`);
};

generateSitemap();