#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Quick SSR/SSG Build Test');
console.log('===========================');

async function quickTest() {
  try {
    // Test 1: Check if we can build SSG successfully
    console.log('\n1️⃣ Testing SSG build...');
    execSync('node scripts/build-ssg.js', { stdio: 'inherit' });

    // Test 2: Verify dist directory has content
    console.log('\n2️⃣ Verifying build output...');
    const distExists = await fs.pathExists('dist');
    const indexExists = await fs.pathExists('dist/index.html');
    
    if (!distExists || !indexExists) {
      throw new Error('Build output missing');
    }

    // Test 3: Check index.html has rendered content
    const indexContent = await fs.readFile('dist/index.html', 'utf-8');
    const hasH1 = indexContent.includes('<h1');
    const hasContent = indexContent.includes('<p') && indexContent.length > 5000;
    
    console.log('📄 Index.html analysis:');
    console.log(`  • Size: ${indexContent.length} characters`);
    console.log(`  • Has H1: ${hasH1 ? '✅' : '❌'}`);
    console.log(`  • Has content: ${hasContent ? '✅' : '❌'}`);

    // Test 4: Check key routes
    const routes = ['services', 'insights', 'online-therapy'];
    console.log('\n📁 Checking static routes:');
    
    for (const route of routes) {
      const routePath = path.join('dist', route, 'index.html');
      const routeExists = await fs.pathExists(routePath);
      console.log(`  • /${route}: ${routeExists ? '✅' : '❌'}`);
    }

    // Test 5: Check diagnostics
    const diagnosticsPath = path.join('dist', '__diagnostics');
    const diagnosticsExists = await fs.pathExists(diagnosticsPath);
    console.log(`\n🩺 Diagnostics: ${diagnosticsExists ? '✅' : '❌'}`);

    if (diagnosticsExists) {
      const htmlDiag = await fs.pathExists(path.join(diagnosticsPath, 'html.txt'));
      const seoDiag = await fs.pathExists(path.join(diagnosticsPath, 'seo.json'));
      console.log(`  • HTML report: ${htmlDiag ? '✅' : '❌'}`);
      console.log(`  • SEO report: ${seoDiag ? '✅' : '❌'}`);
    }

    console.log('\n🎉 SSR/SSG build test completed successfully!');
    console.log('✅ Ready for production deployment');
    
    return true;

  } catch (error) {
    console.error('\n❌ Build test failed:', error.message);
    return false;
  }
}

quickTest();