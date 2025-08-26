#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🧪 Testing simple build process...');

try {
  console.log('🚀 Running simple build...');
  execSync('node scripts/simple-build.js', { stdio: 'inherit' });
  
  console.log('✅ Simple build test passed!');
  console.log('🎉 Build system is now fixed and ready for deployment');
} catch (error) {
  console.error('❌ Build test failed:', error.message);
  process.exit(1);
}