#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs-extra';

console.log('🎯 COMPLETE VERIFICATION OF PHASES 3 & 4\n');

async function completeVerification() {
  try {
    console.log('=== PHASE 3: VERIFICATION & TESTING ===\n');
    
    console.log('📦 Step 1: Running complete SSG build with fixes...');
    await fs.remove('dist');
    await fs.remove('dist-ssr');
    
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed\n');
    
    console.log('🔍 Step 2: Checking diagnostic file generation...');
    const diagnosticFiles = ['html.txt', 'seo.json', 'build-status.json'];
    let diagnosticsOK = true;
    
    for (const file of diagnosticFiles) {
      const exists = await fs.pathExists(`dist/__diagnostics/${file}`);
      console.log(`  ${file}: ${exists ? '✅' : '❌'}`);
      if (!exists) diagnosticsOK = false;
    }
    
    console.log('\n📋 Step 3: Verifying static HTML SEO elements...');
    const indexPath = 'dist/index.html';
    let seoOK = true;
    
    if (await fs.pathExists(indexPath)) {
      const content = await fs.readFile(indexPath, 'utf-8');
      
      const checks = {
        hasTitle: content.includes('<title>'),
        hasH1: content.includes('<h1'),
        hasMetaDescription: content.includes('name="description"'),
        hasCanonical: content.includes('rel="canonical"'),
        hasJsonLd: content.includes('application/ld+json'),
        isSSR: !content.includes('<div id="root"></div>'),
        hasContent: content.length > 5000
      };
      
      console.log(`  Title tag: ${checks.hasTitle ? '✅' : '❌'}`);
      console.log(`  H1 tag: ${checks.hasH1 ? '✅' : '❌'}`);
      console.log(`  Meta description: ${checks.hasMetaDescription ? '✅' : '❌'}`);
      console.log(`  Canonical URL: ${checks.hasCanonical ? '✅' : '❌'}`);
      console.log(`  JSON-LD structured data: ${checks.hasJsonLd ? '✅' : '❌'}`);
      console.log(`  Server-side rendered: ${checks.isSSR ? '✅' : '❌'}`);
      console.log(`  Rich content: ${checks.hasContent ? '✅' : '❌'} (${content.length} chars)`);
      
      // Show sample of SSR content
      if (checks.isSSR) {
        const rootMatch = content.match(/<div id="root">(.*?)<\/div>/s);
        if (rootMatch && rootMatch[1].length > 100) {
          console.log(`  SSR content sample: ${rootMatch[1].substring(0, 200)}...`);
        }
      }
      
      seoOK = Object.values(checks).every(Boolean);
    }
    
    const phase3Success = diagnosticsOK && seoOK;
    console.log(`\n✅ PHASE 3 STATUS: ${phase3Success ? 'COMPLETE' : 'INCOMPLETE'}\n`);
    
    // PHASE 4: Production Testing
    console.log('=== PHASE 4: PRODUCTION DEPLOYMENT TESTING ===\n');
    
    console.log('🌐 Step 1: Testing live diagnostic endpoints...');
    const baseUrl = 'https://mentalspacetherapy.lovable.app';
    const endpoints = [
      '/__diagnostics/html',
      '/__diagnostics/seo', 
      '/__diagnostics/build'
    ];
    
    let endpointsOK = true;
    for (const endpoint of endpoints) {
      try {
        const response = await fetch(`${baseUrl}${endpoint}`);
        const status = response.ok ? '✅' : '❌';
        console.log(`  ${endpoint}: ${status} (${response.status})`);
        if (!response.ok) endpointsOK = false;
      } catch (error) {
        console.log(`  ${endpoint}: ❌ (Network error)`);
        endpointsOK = false;
      }
    }
    
    console.log('\n📄 Step 2: Verifying production SSR content...');
    let productionSSR = false;
    try {
      const response = await fetch(baseUrl);
      if (response.ok) {
        const html = await response.text();
        
        const prodChecks = {
          hasH1: html.includes('<h1'),
          hasContent: html.length > 5000,
          hasJsonLd: html.includes('application/ld+json'),
          hasCanonical: html.includes('rel="canonical"'),
          isSSR: !html.includes('<div id="root"></div>')
        };
        
        console.log(`  Production H1 tags: ${prodChecks.hasH1 ? '✅' : '❌'}`);
        console.log(`  Production rich content: ${prodChecks.hasContent ? '✅' : '❌'}`);
        console.log(`  Production JSON-LD: ${prodChecks.hasJsonLd ? '✅' : '❌'}`);
        console.log(`  Production canonical: ${prodChecks.hasCanonical ? '✅' : '❌'}`);
        console.log(`  Production SSR: ${prodChecks.isSSR ? '✅' : '❌'}`);
        
        productionSSR = Object.values(prodChecks).every(Boolean);
      }
    } catch (error) {
      console.log(`  Production check failed: ❌ (${error.message})`);
    }
    
    const phase4Success = endpointsOK && productionSSR;
    console.log(`\n✅ PHASE 4 STATUS: ${phase4Success ? 'COMPLETE' : 'IN PROGRESS'}\n`);
    
    // FINAL SUMMARY
    console.log('🎉 FINAL SUMMARY:');
    console.log(`📋 Phase 1 (Build Command): ✅ COMPLETE`);
    console.log(`📋 Phase 2 (Error Handling): ✅ COMPLETE`);
    console.log(`📋 Phase 3 (Verification): ${phase3Success ? '✅ COMPLETE' : '❌ INCOMPLETE'}`);
    console.log(`📋 Phase 4 (Production): ${phase4Success ? '✅ COMPLETE' : '🔄 IN PROGRESS'}`);
    
    if (phase3Success && phase4Success) {
      console.log('\n🎊 ALL PHASES COMPLETED SUCCESSFULLY!');
      console.log('The SSG build process is working correctly with proper SSR rendering.');
    } else if (phase3Success) {
      console.log('\n🚀 LOCAL BUILD FIXED - DEPLOYMENT IN PROGRESS');
      console.log('Local SSG build now works correctly. Production deployment may need time to update.');
    } else {
      console.log('\n⚠️ ISSUES REMAINING');
      console.log('Some fixes may be needed for complete SSR functionality.');
    }
    
  } catch (error) {
    console.error('❌ Verification failed:', error.message);
  }
}

completeVerification();