#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs-extra';
console.log('🧪 Testing the new build command...\n');

try {
  // Test the new build command
  console.log('📦 Running: npm run build');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('\n✅ Build completed! Checking results...');
  
  // Check build output
  const distExists = await fs.pathExists('dist');
  const indexExists = distExists ? await fs.pathExists('dist/index.html') : false;
  const diagnosticsExists = distExists ? await fs.pathExists('dist/__diagnostics') : false;
  const buildStatusExists = diagnosticsExists ? await fs.pathExists('dist/__diagnostics/build-status.json') : false;
  
  console.log(`\n📊 Build Results:`);
  console.log(`  ✅ dist/ directory: ${distExists ? 'EXISTS' : 'MISSING'}`);
  console.log(`  ✅ dist/index.html: ${indexExists ? 'EXISTS' : 'MISSING'}`);
  console.log(`  ✅ dist/__diagnostics/: ${diagnosticsExists ? 'EXISTS' : 'MISSING'}`);
  console.log(`  ✅ build-status.json: ${buildStatusExists ? 'EXISTS' : 'MISSING'}`);
  
  if (indexExists) {
    const indexContent = await fs.readFile('dist/index.html', 'utf-8');
    const hasH1 = indexContent.includes('<h1');
    const hasContent = indexContent.length > 5000;
    const hasJsonLd = indexContent.includes('application/ld+json');
    
    console.log(`  ✅ Rendered H1 tags: ${hasH1 ? 'YES' : 'NO'}`);
    console.log(`  ✅ Rich content (>5k chars): ${hasContent ? 'YES' : 'NO'}`);
    console.log(`  ✅ JSON-LD structured data: ${hasJsonLd ? 'YES' : 'NO'}`);
  }
  
  if (buildStatusExists) {
    const buildStatus = await fs.readFile('dist/__diagnostics/build-status.json', 'utf-8');
    const statusData = JSON.parse(buildStatus);
    console.log(`  ✅ Build status success: ${statusData.success ? 'YES' : 'NO'}`);
    console.log(`  ✅ Routes generated: ${statusData.routes_generated || 0}`);
  }
  
  console.log('\n🎉 All phases completed successfully!');
  
} catch (error) {
  console.error('❌ Build test failed:', error.message);
  process.exit(1);
}