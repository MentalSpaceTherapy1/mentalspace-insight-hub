#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs-extra';

console.log('🧪 Running comprehensive build verification tests...\n');

// Test 1: Quick Build Test
console.log('📦 Test 1: Running quick build test...');
try {
  execSync('node scripts/quick-build-test.js', { stdio: 'inherit' });
  console.log('✅ Quick build test passed\n');
} catch (error) {
  console.error('❌ Quick build test failed:', error.message);
  console.log('');
}

// Test 2: Check current build output
console.log('🔍 Test 2: Checking existing build output...');
try {
  const distExists = await fs.pathExists('dist');
  const indexExists = distExists ? await fs.pathExists('dist/index.html') : false;
  const diagnosticsExists = distExists ? await fs.pathExists('dist/__diagnostics') : false;
  
  console.log(`  - dist/ directory: ${distExists ? '✅' : '❌'}`);
  console.log(`  - dist/index.html: ${indexExists ? '✅' : '❌'}`);
  console.log(`  - dist/__diagnostics/: ${diagnosticsExists ? '✅' : '❌'}`);
  
  if (indexExists) {
    const indexContent = await fs.readFile('dist/index.html', 'utf-8');
    const hasH1 = indexContent.includes('<h1');
    const hasContent = indexContent.length > 5000;
    const hasJsonLd = indexContent.includes('application/ld+json');
    
    console.log(`  - HTML has H1 tags: ${hasH1 ? '✅' : '❌'}`);
    console.log(`  - HTML has sufficient content: ${hasContent ? '✅' : '❌'}`);
    console.log(`  - HTML has JSON-LD: ${hasJsonLd ? '✅' : '❌'}`);
  }
  
  if (diagnosticsExists) {
    const buildStatusExists = await fs.pathExists('dist/__diagnostics/build-status.json');
    console.log(`  - Build status file: ${buildStatusExists ? '✅' : '❌'}`);
    
    if (buildStatusExists) {
      const buildStatus = await fs.readFile('dist/__diagnostics/build-status.json', 'utf-8');
      const statusData = JSON.parse(buildStatus);
      console.log(`  - Build status success: ${statusData.success ? '✅' : '❌'}`);
    }
  }
  
  console.log('');
} catch (error) {
  console.error('❌ Build output check failed:', error.message);
  console.log('');
}

// Test 3: Manual SSG build test
console.log('🚀 Test 3: Running manual SSG build...');
try {
  execSync('node scripts/build-ssg.js', { stdio: 'inherit' });
  console.log('✅ Manual SSG build completed\n');
} catch (error) {
  console.error('❌ Manual SSG build failed:', error.message);
  console.log('');
}

console.log('🎯 Build verification tests completed!');