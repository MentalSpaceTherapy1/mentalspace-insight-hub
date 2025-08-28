#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🚀 Running SSG build with enhanced verification...');

try {
  // Use the robust build script
  console.log('📦 Running robust SSG build with verification...');
  execSync('node scripts/verify-and-build.js', { stdio: 'inherit' });

  console.log('✅ Production build complete with SSR/SSG!');
  console.log('📁 Static files are ready in the dist/ directory');
  console.log('🌐 All routes now have server-rendered HTML with full content');
  console.log('🔍 Diagnostics available at:');
  console.log('  - /__diagnostics/html.txt');
  console.log('  - /__diagnostics/seo.json');
  console.log('  - /__diagnostics/build-status.json');
  console.log('🤖 Robots.txt and sitemap.xml generated');
  console.log('🛠️ Run "node scripts/verify-build.js" to verify output');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}