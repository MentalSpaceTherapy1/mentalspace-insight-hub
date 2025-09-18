#!/usr/bin/env node

/**
 * Google AdsBot URL Verification Runner
 * 
 * This script builds the project and runs comprehensive URL verification
 * to ensure all URLs work properly for Google AdsBot without destination errors.
 * 
 * Usage: 
 *   npm run verify-adsbot
 *   node scripts/run-adsbot-verification.js
 */

import { execSync } from 'child_process';
import { verifyAdsBotURLs } from './verify-adsbot-urls.js';

console.log('🚀 Starting Google AdsBot Verification Process...');
console.log('================================================');

try {
  // Build the project first
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!\n');
  
  // Run URL verification
  console.log('🔍 Starting URL verification with Google AdsBot simulation...\n');
  const exitCode = await verifyAdsBotURLs();
  
  console.log('\n================================================');
  if (exitCode === 0) {
    console.log('✅ All URLs verified successfully!');
    console.log('🚀 Your site is ready for Google Ads campaigns without destination errors.');
  } else {
    console.log('❌ Some URLs failed verification.');
    console.log('Please fix the issues above before running ad campaigns.');
  }
  
  process.exit(exitCode);
  
} catch (error) {
  console.error('❌ Verification process failed:', error.message);
  process.exit(1);
}