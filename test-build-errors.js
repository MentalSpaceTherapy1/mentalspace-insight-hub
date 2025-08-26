#!/usr/bin/env node

import { execSync } from 'child_process';

console.log('🔍 TESTING FOR BUILD ERRORS\n');

try {
  console.log('📦 Testing SSG build...');
  execSync('node scripts/build-ssg.js', { stdio: 'inherit' });
  console.log('✅ SSG build successful');
} catch (error) {
  console.error('❌ SSG build failed:', error.message);
  console.error('Full error:', error);
}

try {
  console.log('\n📦 Testing npm build...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ npm build successful');
} catch (error) {
  console.error('❌ npm build failed:', error.message);
  console.error('Full error:', error);
}