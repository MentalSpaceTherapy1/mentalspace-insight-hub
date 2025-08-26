#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🚀 Building production app...');

try {
  // Clean previous builds
  console.log('🧹 Cleaning previous builds...');
  execSync('rm -rf dist', { stdio: 'inherit' });

  // Run simple Vite build
  console.log('📦 Running Vite build...');
  execSync('npx vite build', { stdio: 'inherit' });

  console.log('✅ Production build complete!');
  console.log('📁 Static files are ready in the dist/ directory');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}