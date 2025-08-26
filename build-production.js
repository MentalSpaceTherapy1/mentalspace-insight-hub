#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🚀 Building production app with SSG...');

try {
  // Step 1: Build the Vite app
  console.log('📦 Building Vite app...');
  execSync('npm run build', { stdio: 'inherit' });

  // Step 2: Run prerendering
  console.log('🎯 Running prerendering...');
  execSync('node scripts/prerender.js', { stdio: 'inherit' });

  console.log('✅ Production build complete with SSG!');
  console.log('📁 Static files are ready in the dist/ directory');
  console.log('🌐 All routes now have SEO-friendly static HTML with full content');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}