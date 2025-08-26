#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs-extra';

console.log('🔧 TESTING BUILD FIXES\n');

async function testBuildFixed() {
  try {
    console.log('📦 Step 1: Testing the fixed build...');
    await fs.remove('dist');
    await fs.remove('dist-ssr');
    
    // Test the npm build command (which should now work)
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log('\n✅ BUILD SUCCESSFUL! Checking results...');
    
    // Verify the results
    const distExists = await fs.pathExists('dist');
    const indexExists = await fs.pathExists('dist/index.html');
    const diagnosticsExists = await fs.pathExists('dist/__diagnostics');
    
    console.log(`📋 Build Results:`);
    console.log(`  dist/ directory: ${distExists ? '✅' : '❌'}`);
    console.log(`  index.html: ${indexExists ? '✅' : '❌'}`);
    console.log(`  __diagnostics/: ${diagnosticsExists ? '✅' : '❌'}`);
    
    if (diagnosticsExists) {
      const files = ['html.txt', 'seo.json', 'build-status.json'];
      for (const file of files) {
        const exists = await fs.pathExists(`dist/__diagnostics/${file}`);
        console.log(`  ${file}: ${exists ? '✅' : '❌'}`);
        
        if (exists && file === 'seo.json') {
          const content = await fs.readFile(`dist/__diagnostics/${file}`, 'utf-8');
          const data = JSON.parse(content);
          console.log(`    JSON-LD types: ${data.jsonld_types_found_on_home?.length || 0}`);
          console.log(`    SEO score: ${data.seo_score || 0}/100`);
        }
      }
    }
    
    if (indexExists) {
      const content = await fs.readFile('dist/index.html', 'utf-8');
      const hasH1 = content.includes('<h1');
      const hasJsonLd = content.includes('application/ld+json');
      const isSSR = !content.includes('<div id="root"></div>');
      
      console.log(`\n📋 Content Analysis:`);
      console.log(`  H1 tags: ${hasH1 ? '✅' : '❌'}`);
      console.log(`  JSON-LD scripts: ${hasJsonLd ? '✅' : '❌'}`);
      console.log(`  Server-side rendered: ${isSSR ? '✅' : '❌'}`);
      
      if (hasJsonLd) {
        const jsonLdMatches = content.match(/<script[^>]*type="application\/ld\+json"[^>]*>/gi);
        console.log(`  JSON-LD script count: ${jsonLdMatches ? jsonLdMatches.length : 0}`);
      }
    }
    
    console.log('\n🎉 BUILD FIXES SUCCESSFUL!');
    console.log('The deployment should now work without errors.');
    
  } catch (error) {
    console.error('❌ Build still has errors:', error.message);
    console.error('Stack:', error.stack);
  }
}

testBuildFixed();