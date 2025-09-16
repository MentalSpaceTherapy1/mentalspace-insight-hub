#!/usr/bin/env node

/**
 * Standalone Prerendering Script for SEO
 * 
 * This script runs the prerendering process to generate static HTML files
 * for all routes, ensuring search engine visibility.
 * 
 * Usage: node scripts/run-prerender.js
 */

console.log('🚀 Starting SEO Prerendering Process...');
console.log('=====================================');

// Import and run the prerender script
import('./prerender.js')
  .then(() => {
    console.log('');
    console.log('✅ Prerendering completed successfully!');
    console.log('');
    console.log('Next steps:');
    console.log('1. Deploy your site to production');
    console.log('2. Submit sitemap to Google Search Console');
    console.log('3. Monitor indexing progress');
    console.log('');
    console.log('🔍 Your site should now be visible to search engines!');
  })
  .catch((error) => {
    console.error('❌ Prerendering failed:', error);
    process.exit(1);
  });