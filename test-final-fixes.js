#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs-extra';

console.log('🔧 TESTING FINAL FIXES FOR JSON-LD & DIAGNOSTIC ENDPOINTS\n');

async function testFinalFixes() {
  try {
    console.log('📦 Step 1: Clean build with all fixes applied...');
    await fs.remove('dist');
    await fs.remove('dist-ssr');
    
    // Run the complete build process
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully\n');
    
    console.log('🔍 Step 2: Testing diagnostic endpoints generation...');
    
    const diagnosticFiles = [
      { name: 'html.txt', description: 'HTML Diagnostic' },
      { name: 'seo.json', description: 'SEO Diagnostic' },
      { name: 'build-status.json', description: 'Build Status' }
    ];
    
    let diagnosticEndpointsWorking = true;
    
    for (const file of diagnosticFiles) {
      const filePath = `dist/__diagnostics/${file.name}`;
      const exists = await fs.pathExists(filePath);
      console.log(`  ${file.name}: ${exists ? '✅ GENERATED' : '❌ MISSING'}`);
      
      if (exists) {
        const content = await fs.readFile(filePath, 'utf-8');
        console.log(`    Content length: ${content.length} chars`);
        
        if (file.name === 'seo.json') {
          try {
            const seoData = JSON.parse(content);
            const hasJsonLd = seoData.jsonld_types_found_on_home && seoData.jsonld_types_found_on_home.length > 0;
            console.log(`    JSON-LD types found: ${hasJsonLd ? seoData.jsonld_types_found_on_home.join(', ') : 'NONE'}`);
            console.log(`    Structured data count: ${seoData.structured_data_count || 0}`);
            console.log(`    SEO score: ${seoData.seo_score || 0}/100`);
          } catch (e) {
            console.log(`    ❌ Invalid JSON in seo.json`);
          }
        }
        
        if (file.name === 'html.txt') {
          const hasH1Report = content.includes('H1:') && !content.includes('H1: NOT FOUND');
          const hasJsonLdReport = content.includes('JSON-LD Scripts:');
          console.log(`    H1 analysis: ${hasH1Report ? '✅ FOUND' : '❌ NOT FOUND'}`);
          console.log(`    JSON-LD analysis: ${hasJsonLdReport ? '✅ INCLUDED' : '❌ MISSING'}`);
        }
      } else {
        diagnosticEndpointsWorking = false;
      }
    }
    
    console.log('\n🔍 Step 3: Testing JSON-LD structured data in homepage...');
    
    const indexPath = 'dist/index.html';
    if (await fs.pathExists(indexPath)) {
      const content = await fs.readFile(indexPath, 'utf-8');
      
      // Check for JSON-LD scripts
      const jsonLdMatches = content.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gis);
      const hasJsonLd = jsonLdMatches && jsonLdMatches.length > 0;
      
      console.log(`  JSON-LD scripts in HTML: ${hasJsonLd ? `✅ ${jsonLdMatches.length} found` : '❌ NONE'}`);
      
      if (hasJsonLd) {
        const jsonLdTypes = [];
        jsonLdMatches.forEach((match, index) => {
          try {
            const scriptContent = match.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
            const parsed = JSON.parse(scriptContent);
            if (parsed['@type']) {
              jsonLdTypes.push(parsed['@type']);
              console.log(`    Script ${index + 1}: ${parsed['@type']}`);
            }
          } catch (e) {
            console.log(`    Script ${index + 1}: ❌ Invalid JSON`);
          }
        });
        
        console.log(`  Total JSON-LD types: ${jsonLdTypes.join(', ')}`);
      }
      
      // Check other critical elements
      const hasH1 = content.includes('<h1');
      const hasP = content.includes('<p');
      const isSSR = !content.includes('<div id="root"></div>');
      
      console.log(`  H1 tags: ${hasH1 ? '✅ PRESENT' : '❌ MISSING'}`);
      console.log(`  P tags: ${hasP ? '✅ PRESENT' : '❌ MISSING'}`);
      console.log(`  Server-side rendered: ${isSSR ? '✅ YES' : '❌ NO'}`);
      
    } else {
      console.log('  ❌ index.html not found');
    }
    
    console.log('\n🎯 FINAL ASSESSMENT:');
    
    const allIssuesFixed = diagnosticEndpointsWorking && hasJsonLd && hasH1 && hasP && isSSR;
    const criticalIssuesFixed = hasJsonLd && hasH1 && isSSR;
    
    if (allIssuesFixed) {
      console.log('🎉 SUCCESS! All issues have been COMPLETELY FIXED:');
      console.log('  ✅ JSON-LD structured data is now present');
      console.log('  ✅ Diagnostic endpoints are generating properly');
      console.log('  ✅ H1 tags and content are server-side rendered');
      console.log('  ✅ Static diagnostic files are being created');
      console.log('\n🚀 PRODUCTION DEPLOYMENT READY!');
    } else if (criticalIssuesFixed) {
      console.log('🟡 MAJOR PROGRESS! Critical issues FIXED:');
      console.log('  ✅ JSON-LD structured data is now present');
      console.log('  ✅ H1 tags and content are server-side rendered');
      if (!diagnosticEndpointsWorking) {
        console.log('  ❌ Diagnostic endpoints still need work');
      }
      console.log('\n🔄 Production should show significantly improved SEO!');
    } else {
      console.log('❌ ISSUES STILL REMAIN:');
      if (!hasJsonLd) console.log('  - JSON-LD structured data still missing');
      if (!diagnosticEndpointsWorking) console.log('  - Diagnostic endpoints not generating');
      if (!hasH1) console.log('  - H1 tags still missing');
      if (!isSSR) console.log('  - SSR content not generating');
    }
    
  } catch (error) {
    console.error('❌ Final fixes test failed:', error.message);
    console.error('Stack:', error.stack);
  }
}

testFinalFixes();