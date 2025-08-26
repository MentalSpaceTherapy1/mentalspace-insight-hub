#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs-extra';

console.log('🎯 RUNNING LOCAL VERIFICATION (Phase 3 Testing)\n');

async function runLocalVerification() {
  try {
    console.log('=== PHASE 3: LOCAL VERIFICATION & TESTING ===\n');
    
    console.log('📦 Step 1: Running fixed SSG build...');
    await fs.remove('dist');
    await fs.remove('dist-ssr');
    
    // Test the actual build command
    execSync('npm run build', { stdio: 'inherit' });  
    console.log('✅ Build completed\n');
    
    console.log('🔍 Step 2: Checking build outputs exist...');
    const distExists = await fs.pathExists('dist');
    const indexExists = await fs.pathExists('dist/index.html');
    const diagnosticsExists = await fs.pathExists('dist/__diagnostics');
    
    console.log(`  dist/ directory: ${distExists ? '✅' : '❌'}`);
    console.log(`  index.html: ${indexExists ? '✅' : '❌'}`);
    console.log(`  __diagnostics/: ${diagnosticsExists ? '✅' : '❌'}`);
    
    if (!distExists || !indexExists) {
      console.log('❌ Basic build files missing - build failed');
      return;
    }
    
    console.log('\n🔍 Step 3: Analyzing index.html content...');
    const content = await fs.readFile('dist/index.html', 'utf-8');
    
    const checks = {
      hasTitle: content.includes('<title>'),
      hasH1: content.includes('<h1'),
      hasMetaDescription: content.includes('name="description"'),
      hasCanonical: content.includes('rel="canonical"'),
      hasJsonLd: content.includes('application/ld+json'),
      isEmpty: content.includes('<div id="root"></div>'),
      hasContent: content.length > 5000
    };
    
    console.log(`  Title tag: ${checks.hasTitle ? '✅' : '❌'}`);
    console.log(`  H1 tag: ${checks.hasH1 ? '✅' : '❌'}`);
    console.log(`  Meta description: ${checks.hasMetaDescription ? '✅' : '❌'}`);
    console.log(`  Canonical URL: ${checks.hasCanonical ? '✅' : '❌'}`);
    console.log(`  JSON-LD structured data: ${checks.hasJsonLd ? '✅' : '❌'}`);
    console.log(`  Server-side rendered: ${!checks.isEmpty ? '✅' : '❌'}`);
    console.log(`  Rich content: ${checks.hasContent ? '✅' : '❌'} (${content.length} chars)`);
    
    // Show critical content analysis
    console.log('\n📋 Content Analysis:');
    if (!checks.isEmpty) {
      const rootMatch = content.match(/<div id="root">(.*?)<\/div>/s);
      if (rootMatch && rootMatch[1].length > 100) {
        console.log(`  ✅ SSR content found: ${rootMatch[1].length} chars`);
        console.log(`  Sample: ${rootMatch[1].substring(0, 150)}...`);
      } else {
        console.log(`  ❌ SSR content too small or missing`);
      }
    } else {
      console.log(`  ❌ Empty root div - no SSR content generated`);
      console.log(`  This means the server-side rendering is not working`);
    }
    
    console.log('\n🔍 Step 4: Checking diagnostic files...');
    if (diagnosticsExists) {
      const files = ['html.txt', 'seo.json', 'build-status.json'];
      for (const file of files) {
        const exists = await fs.pathExists(`dist/__diagnostics/${file}`);
        console.log(`  ${file}: ${exists ? '✅' : '❌'}`);
        
        if (exists && file === 'build-status.json') {
          const status = await fs.readFile(`dist/__diagnostics/${file}`, 'utf-8');
          const data = JSON.parse(status);
          console.log(`    Build success: ${data.success ? '✅' : '❌'}`);
          console.log(`    Routes generated: ${data.routes_generated || 0}`);
        }
      }
    }
    
    // Final assessment
    const criticalIssues = [];
    if (!checks.hasH1) criticalIssues.push('Missing H1 tags');
    if (checks.isEmpty) criticalIssues.push('No SSR content');
    if (!checks.hasJsonLd) criticalIssues.push('No JSON-LD structured data');
    if (!checks.hasContent) criticalIssues.push('Insufficient content');
    
    console.log('\n🎯 PHASE 3 ASSESSMENT:');
    if (criticalIssues.length === 0) {
      console.log('✅ LOCAL BUILD SUCCESSFUL - All SSR elements working');
    } else {
      console.log('❌ CRITICAL ISSUES FOUND:');
      criticalIssues.forEach(issue => console.log(`  - ${issue}`));
      console.log('\nThe SSR rendering process needs further debugging.');
    }
    
  } catch (error) {
    console.error('❌ Local verification failed:', error.message);
    console.error('Full error:', error);
  }
}

runLocalVerification();