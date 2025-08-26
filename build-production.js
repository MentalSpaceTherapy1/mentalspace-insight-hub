#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🚀 Building production app with SSR/SSG...');

try {
  // Use the new SSG build script
  console.log('📦 Running SSG build with server-side rendering...');
  execSync('node scripts/build-ssg.js', { stdio: 'inherit' });

  console.log('✅ Production build complete with SSR/SSG!');
  console.log('📁 Static files are ready in the dist/ directory');
  console.log('🌐 All routes now have server-rendered HTML with full content');
  console.log('🔍 Diagnostics available at /__diagnostics/html and /__diagnostics/seo');
  console.log('🤖 Robots.txt and sitemap.xml generated');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}