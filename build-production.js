#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🚀 Building production app with enhanced SSG...');

try {
  // Step 1: Build the Vite app with SSG config
  console.log('📦 Building Vite app with SSG optimizations...');
  execSync('vite build --config vite.config.ssg.ts', { stdio: 'inherit' });

  // Step 2: Run enhanced prerendering
  console.log('🎯 Running enhanced prerendering...');
  execSync('node scripts/prerender.js', { stdio: 'inherit' });

  // Step 3: Generate sitemap dynamically
  console.log('🗺️ Generating sitemap...');
  execSync('node scripts/generate-sitemap.js', { stdio: 'inherit' });

  console.log('✅ Production build complete with enhanced SSG!');
  console.log('📁 Static files are ready in the dist/ directory');
  console.log('🌐 All routes now have SEO-friendly static HTML with full content');
  console.log('🔍 Sitemap generated and robots.txt configured');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}