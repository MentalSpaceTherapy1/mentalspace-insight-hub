#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs-extra';

console.log('🔧 TESTING SSR FIX FOR H1/CONTENT ISSUES\n');

async function testSSRFix() {
  try {
    console.log('📦 Step 1: Clean build with SSR router fix...');
    await fs.remove('dist');
    await fs.remove('dist-ssr');
    
    // Run the build process
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed\n');
    
    console.log('🔍 Step 2: Analyzing rendered HTML...');
    const indexPath = 'dist/index.html';
    
    if (await fs.pathExists(indexPath)) {
      const content = await fs.readFile(indexPath, 'utf-8');
      
      console.log(`📋 Content Analysis:`);
      console.log(`  Total length: ${content.length} chars`);
      
      // Check for SSR content
      const isEmpty = content.includes('<div id="root"></div>');
      const hasSSRContent = !isEmpty;
      
      console.log(`  Empty root div: ${isEmpty ? '❌ YES' : '✅ NO'}`);
      console.log(`  Server-side rendered: ${hasSSRContent ? '✅ YES' : '❌ NO'}`);
      
      if (hasSSRContent) {
        // Extract the root content
        const rootMatch = content.match(/<div id="root">(.*?)<\/div>/s);
        if (rootMatch) {
          const rootContent = rootMatch[1];
          console.log(`  SSR content length: ${rootContent.length} chars`);
          
          // Check for specific elements
          const hasH1 = rootContent.includes('<h1');
          const hasP = rootContent.includes('<p');
          const hasMainTag = rootContent.includes('<main');
          const hasHeader = rootContent.includes('<header');
          
          console.log(`  Contains H1 tags: ${hasH1 ? '✅ YES' : '❌ NO'}`);
          console.log(`  Contains P tags: ${hasP ? '✅ YES' : '❌ NO'}`);
          console.log(`  Contains main tag: ${hasMainTag ? '✅ YES' : '❌ NO'}`);
          console.log(`  Contains header: ${hasHeader ? '✅ YES' : '❌ NO'}`);
          
          // Look for the specific Hero H1
          const heroH1Match = rootContent.match(/<h1[^>]*>.*?MentalSpace.*?<\/h1>/s);
          if (heroH1Match) {
            console.log(`  ✅ Found Hero H1: "${heroH1Match[0].substring(0, 100)}..."`);
          } else {
            console.log(`  ❌ Hero H1 not found`);
          }
          
          // Show first 300 chars of SSR content
          console.log(`\n📋 First 300 chars of SSR content:`);
          console.log(rootContent.substring(0, 300) + '...');
          
        }
      } else {
        console.log(`  ❌ No SSR content - HTML is empty`);
        console.log(`  This means the React components are not rendering server-side`);
      }
      
      // Check for JSON-LD
      const hasJsonLd = content.includes('application/ld+json');
      console.log(`  JSON-LD structured data: ${hasJsonLd ? '✅ YES' : '❌ NO'}`);
      
      // SEO checks
      const hasTitle = content.includes('<title>');
      const hasCanonical = content.includes('rel="canonical"');
      const hasMeta = content.includes('name="description"');
      
      console.log(`\n📋 SEO Elements:`);
      console.log(`  Title tag: ${hasTitle ? '✅' : '❌'}`);
      console.log(`  Canonical URL: ${hasCanonical ? '✅' : '❌'}`);
      console.log(`  Meta description: ${hasMeta ? '✅' : '❌'}`);
      
    } else {
      console.log('❌ index.html not found');
    }
    
    console.log('\n🎯 SSR FIX ASSESSMENT:');
    const indexExists = await fs.pathExists(indexPath);
    if (indexExists) {
      const content = await fs.readFile(indexPath, 'utf-8');
      const hasSSRContent = !content.includes('<div id="root"></div>');
      const hasH1 = content.includes('<h1');
      const hasJsonLd = content.includes('application/ld+json');
      
      if (hasSSRContent && hasH1 && hasJsonLd) {
        console.log('🎉 SUCCESS! SSR is now working with H1 tags and content');
      } else if (hasSSRContent && hasH1) {
        console.log('🟡 PARTIAL SUCCESS! SSR working but missing JSON-LD');
      } else if (hasSSRContent) {
        console.log('🟡 PARTIAL SUCCESS! SSR working but content issues remain');
      } else {
        console.log('❌ FAILED! SSR still not generating content');
      }
    }
    
  } catch (error) {
    console.error('❌ SSR fix test failed:', error.message);
    console.error('Full error:', error);
  }
}

testSSRFix();