#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs-extra';

console.log('🧪 TESTING LOCAL BUILD PROCESS\n');

async function testLocalBuild() {
  try {
    console.log('📦 Running the actual build command that should work...');
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log('\n🔍 Checking build results...');
    
    // Check dist directory
    const distExists = await fs.pathExists('dist');
    console.log(`✅ dist directory: ${distExists}`);
    
    if (distExists) {
      const indexExists = await fs.pathExists('dist/index.html');
      console.log(`✅ index.html: ${indexExists}`);
      
      if (indexExists) {
        const content = await fs.readFile('dist/index.html', 'utf-8');
        console.log(`✅ Content length: ${content.length} chars`);
        console.log(`✅ Has H1: ${content.includes('<h1')}`);
        console.log(`✅ Has root div content: ${!content.includes('<div id="root"></div>')}`);
        
        // Check for specific content
        const hasTitle = content.includes('<title>');
        const hasMetaDesc = content.includes('name="description"');
        const hasCanonical = content.includes('rel="canonical"');
        
        console.log(`✅ SEO Title: ${hasTitle}`);
        console.log(`✅ Meta Description: ${hasMetaDesc}`);
        console.log(`✅ Canonical URL: ${hasCanonical}`);
        
        // Show snippet of content to debug
        const rootMatch = content.match(/<div id="root">(.*?)<\/div>/s);
        if (rootMatch) {
          console.log(`✅ Root content preview: ${rootMatch[1].substring(0, 200)}...`);
        } else {
          console.log(`❌ No root content found, showing first 300 chars:`);
          console.log(content.substring(0, 300));
        }
      }
    }
    
    // Check diagnostics
    const diagnosticsExists = await fs.pathExists('dist/__diagnostics');
    console.log(`✅ Diagnostics directory: ${diagnosticsExists}`);
    
    if (diagnosticsExists) {
      const files = ['html.txt', 'seo.json', 'build-status.json'];
      for (const file of files) {
        const exists = await fs.pathExists(`dist/__diagnostics/${file}`);
        console.log(`  ${file}: ${exists ? '✅' : '❌'}`);
      }
      
      // Check build status
      const buildStatusExists = await fs.pathExists('dist/__diagnostics/build-status.json');
      if (buildStatusExists) {
        const status = await fs.readFile('dist/__diagnostics/build-status.json', 'utf-8');
        const data = JSON.parse(status);
        console.log(`✅ Build success: ${data.success}`);
        console.log(`✅ Routes generated: ${data.routes_generated}`);
      }
    }
    
  } catch (error) {
    console.error('❌ Local build test failed:', error.message);
    console.error('Stack:', error.stack);
  }
}

testLocalBuild();