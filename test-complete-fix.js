#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs-extra';

console.log('🎯 TESTING COMPLETE SSR + ROUTING FIX\n');

async function testCompleteFix() {
  try {
    console.log('📦 Step 1: Clean build with complete SSR fix...');
    await fs.remove('dist');
    await fs.remove('dist-ssr');
    
    // Run the build process
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully\n');
    
    console.log('🔍 Step 2: Analyzing SSR rendering results...');
    const indexPath = 'dist/index.html';
    
    if (await fs.pathExists(indexPath)) {
      const content = await fs.readFile(indexPath, 'utf-8');
      
      console.log(`📋 Build Output Analysis:`);
      console.log(`  Total HTML length: ${content.length} chars`);
      
      // Critical SSR checks
      const isEmpty = content.includes('<div id="root"></div>');
      const hasSSRContent = !isEmpty;
      
      console.log(`\n🔧 SSR Status:`);
      console.log(`  Empty root div: ${isEmpty ? '❌ YES (BAD)' : '✅ NO (GOOD)'}`);
      console.log(`  Server-side rendered: ${hasSSRContent ? '✅ YES' : '❌ NO'}`);
      
      if (hasSSRContent) {
        // Extract and analyze SSR content
        const rootMatch = content.match(/<div id="root">(.*?)<\/div>/s);
        if (rootMatch) {
          const rootContent = rootMatch[1];
          console.log(`  SSR content length: ${rootContent.length} chars`);
          
          // Check for the specific missing elements
          const hasH1 = rootContent.includes('<h1');
          const hasP = rootContent.includes('<p');
          const hasMentalSpace = rootContent.includes('MentalSpace');
          const hasTherapy = rootContent.includes('Therapy');
          
          console.log(`\n🎯 Critical Element Checks:`);
          console.log(`  Contains H1 tags: ${hasH1 ? '✅ FIXED' : '❌ STILL MISSING'}`);
          console.log(`  Contains P tags: ${hasP ? '✅ FIXED' : '❌ STILL MISSING'}`);
          console.log(`  Contains "MentalSpace": ${hasMentalSpace ? '✅ FIXED' : '❌ STILL MISSING'}`);
          console.log(`  Contains "Therapy": ${hasTherapy ? '✅ FIXED' : '❌ STILL MISSING'}`);
          
          // Look for specific Hero content
          if (hasH1) {
            const h1Match = rootContent.match(/<h1[^>]*>(.*?)<\/h1>/s);
            if (h1Match) {
              console.log(`  ✅ First H1 found: "${h1Match[1].substring(0, 50)}..."`);
            }
          }
          
          // Show sample content
          console.log(`\n📋 SSR Content Sample (first 400 chars):`);
          console.log(`"${rootContent.substring(0, 400)}..."`);
          
        }
      } else {
        console.log(`  ❌ CRITICAL: No SSR content generated`);
        console.log(`  This means React components are not rendering server-side`);
      }
      
      // Check for JSON-LD structured data  
      const hasJsonLd = content.includes('application/ld+json');
      console.log(`\n📊 Structured Data:`);
      console.log(`  JSON-LD present: ${hasJsonLd ? '✅ FIXED' : '❌ STILL MISSING'}`);
      
      if (hasJsonLd) {
        const jsonLdMatches = content.match(/<script type="application\/ld\+json">/g);
        console.log(`  JSON-LD scripts count: ${jsonLdMatches ? jsonLdMatches.length : 0}`);
      }
      
      // SEO checks
      console.log(`\n🔍 SEO Elements:`);
      const hasTitle = content.includes('<title>');
      const hasCanonical = content.includes('rel="canonical"');
      const hasMeta = content.includes('name="description"');
      
      console.log(`  Title tag: ${hasTitle ? '✅' : '❌'}`);
      console.log(`  Canonical URL: ${hasCanonical ? '✅' : '❌'}`);
      console.log(`  Meta description: ${hasMeta ? '✅' : '❌'}`);
      
    } else {
      console.log('❌ CRITICAL: index.html not found - build failed');
      return;
    }
    
    console.log('\n📋 Step 3: Checking diagnostic files...');
    const diagnosticsDir = 'dist/__diagnostics';
    const diagnosticsExists = await fs.pathExists(diagnosticsDir);
    console.log(`  Diagnostics directory: ${diagnosticsExists ? '✅' : '❌'}`);
    
    if (diagnosticsExists) {
      const files = ['html.txt', 'seo.json', 'build-status.json'];
      for (const file of files) {
        const exists = await fs.pathExists(`${diagnosticsDir}/${file}`);
        console.log(`  ${file}: ${exists ? '✅' : '❌'}`);
      }
    }
    
    console.log('\n🎉 FINAL ASSESSMENT:');
    
    if (await fs.pathExists(indexPath)) {
      const content = await fs.readFile(indexPath, 'utf-8');
      const hasSSRContent = !content.includes('<div id="root"></div>');
      const hasH1 = content.includes('<h1');
      const hasP = content.includes('<p');
      const hasJsonLd = content.includes('application/ld+json');
      
      const criticalIssuesFixed = hasSSRContent && hasH1 && hasP;
      const allIssuesFixed = criticalIssuesFixed && hasJsonLd;
      
      if (allIssuesFixed) {
        console.log('🎊 SUCCESS! All critical SSR issues have been FIXED:');
        console.log('  ✅ H1 tags are now rendering server-side');
        console.log('  ✅ Paragraph content is now rendering server-side');
        console.log('  ✅ JSON-LD structured data is present');
        console.log('  ✅ Router context errors should be resolved');
        console.log('\n🚀 Ready for production deployment!');
      } else if (criticalIssuesFixed) {
        console.log('🟡 PARTIAL SUCCESS! Critical SSR issues FIXED:');
        console.log('  ✅ H1 tags are now rendering server-side');
        console.log('  ✅ Paragraph content is now rendering server-side');
        console.log('  ❌ JSON-LD structured data still missing');
        console.log('\n🔄 Production should show much improved SEO content');
      } else {
        console.log('❌ ISSUES REMAIN:');
        if (!hasSSRContent) console.log('  - SSR content still not generating');
        if (!hasH1) console.log('  - H1 tags still missing');
        if (!hasP) console.log('  - Paragraph content still missing');
        console.log('\n🔧 Further debugging may be needed');
      }
    }
    
  } catch (error) {
    console.error('❌ Complete fix test failed:', error.message);
    console.error('Stack:', error.stack);
  }
}

testCompleteFix();