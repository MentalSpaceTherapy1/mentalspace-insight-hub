#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';

console.log('🔍 Verifying SSR/SSG build output...');

async function verifyBuild() {
  const distDir = 'dist';
  const results = {
    timestamp: new Date().toISOString(),
    buildExists: false,
    indexHasContent: false,
    routesGenerated: [],
    diagnosticsAvailable: false,
    seoElements: {},
    errors: []
  };
  
  try {
    // Check if dist exists
    results.buildExists = await fs.pathExists(distDir);
    if (!results.buildExists) {
      results.errors.push('No dist directory found - build may not have run');
      console.log('❌ No dist directory found');
      return results;
    }
    
    // Check index.html content
    const indexPath = path.join(distDir, 'index.html');
    if (await fs.pathExists(indexPath)) {
      const indexContent = await fs.readFile(indexPath, 'utf-8');
      results.indexHasContent = indexContent.includes('<h1') && indexContent.includes('<p');
      
      // Extract SEO elements
      results.seoElements = {
        hasH1: /<h1[^>]*>/i.test(indexContent),
        hasTitle: /<title[^>]*>/i.test(indexContent),
        hasCanonical: /<link[^>]*rel="canonical"/i.test(indexContent),
        hasJsonLd: /<script[^>]*type="application\/ld\+json"/i.test(indexContent),
        robotsTag: (indexContent.match(/<meta[^>]*name="robots"[^>]*content="([^"]*)"/) || [])[1]
      };
      
      console.log('📄 Index.html analysis:');
      console.log(`  Has rendered content: ${results.indexHasContent}`);
      console.log(`  Has H1: ${results.seoElements.hasH1}`);
      console.log(`  Has canonical: ${results.seoElements.hasCanonical}`);
      console.log(`  Robots tag: ${results.seoElements.robotsTag || 'none'}`);
    }
    
    // Check generated routes
    const files = await fs.readdir(distDir);
    for (const file of files) {
      const filePath = path.join(distDir, file);
      const stat = await fs.stat(filePath);
      if (stat.isDirectory() && file !== '__diagnostics') {
        const routeIndex = path.join(filePath, 'index.html');
        if (await fs.pathExists(routeIndex)) {
          results.routesGenerated.push(`/${file}`);
        }
      }
    }
    
    // Check diagnostics
    const diagnosticsDir = path.join(distDir, '__diagnostics');
    results.diagnosticsAvailable = await fs.pathExists(diagnosticsDir);
    if (results.diagnosticsAvailable) {
      console.log('🔧 Diagnostics endpoints will be available at:');
      console.log('  /__diagnostics/html.txt');
      console.log('  /__diagnostics/seo.json');
    }
    
    console.log('📊 Build verification results:');
    console.log(`  Routes generated: ${results.routesGenerated.length}`);
    console.log(`  Static routes: ${results.routesGenerated.join(', ')}`);
    console.log(`  Diagnostics ready: ${results.diagnosticsAvailable}`);
    
    if (results.errors.length === 0) {
      console.log('✅ Build verification passed');
    } else {
      console.log('❌ Build verification issues:');
      results.errors.forEach(error => console.log(`  - ${error}`));
    }
    
  } catch (error) {
    results.errors.push(`Verification failed: ${error.message}`);
    console.error('💥 Verification error:', error.message);
  }
  
  // Write verification results to file
  await fs.ensureDir(path.join(distDir, '__diagnostics'));
  await fs.writeFile(
    path.join(distDir, '__diagnostics', 'build-verification.json'),
    JSON.stringify(results, null, 2)
  );
  
  return results;
}

verifyBuild();