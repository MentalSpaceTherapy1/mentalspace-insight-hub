#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';

console.log('🔍 DEBUGGING SSG BUILD PROCESS\n');

async function debugSSGBuild() {
  try {
    console.log('📋 Step 1: Checking if entry-server.tsx exists and is valid...');
    const entryServerExists = await fs.pathExists('src/entry-server.tsx');
    console.log(`  entry-server.tsx: ${entryServerExists ? '✅' : '❌'}`);
    
    if (entryServerExists) {
      const content = await fs.readFile('src/entry-server.tsx', 'utf-8');
      console.log(`  entry-server.tsx size: ${content.length} chars`);
      console.log(`  Contains render function: ${content.includes('export function render') ? '✅' : '❌'}`);
    }

    console.log('\n📋 Step 2: Running clean SSG build with detailed logging...');
    await fs.remove('dist');
    await fs.remove('dist-ssr');
    
    console.log('Building client bundle...');
    execSync('vite build --outDir dist', { stdio: 'inherit' });
    
    console.log('\nBuilding SSR bundle...');
    execSync('vite build --ssr src/entry-server.tsx --outDir dist-ssr', { stdio: 'inherit' });
    
    console.log('\n📋 Step 3: Checking build outputs...');
    const distExists = await fs.pathExists('dist');
    const distSSRExists = await fs.pathExists('dist-ssr');
    const templateExists = await fs.pathExists('dist/index.html');
    const serverExists = await fs.pathExists('dist-ssr/entry-server.js');
    
    console.log(`  dist/ directory: ${distExists ? '✅' : '❌'}`);
    console.log(`  dist-ssr/ directory: ${distSSRExists ? '✅' : '❌'}`);
    console.log(`  dist/index.html template: ${templateExists ? '✅' : '❌'}`);
    console.log(`  dist-ssr/entry-server.js: ${serverExists ? '✅' : '❌'}`);
    
    if (templateExists) {
      const template = await fs.readFile('dist/index.html', 'utf-8');
      console.log(`  Template size: ${template.length} chars`);
      console.log(`  Contains root div: ${template.includes('id="root"') ? '✅' : '❌'}`);
    }
    
    console.log('\n📋 Step 4: Testing SSR rendering...');
    if (serverExists) {
      try {
        // Import the built server module
        const serverModulePath = path.resolve('dist-ssr/entry-server.js');
        console.log(`  Importing: ${serverModulePath}`);
        
        const { render } = await import(serverModulePath);
        console.log(`  Render function available: ${typeof render === 'function' ? '✅' : '❌'}`);
        
        if (typeof render === 'function') {
          console.log('\n  Testing render function...');
          const result = render('/');
          console.log(`  Render result type: ${typeof result}`);
          console.log(`  Has html property: ${result && typeof result.html === 'string' ? '✅' : '❌'}`);
          
          if (result && result.html) {
            console.log(`  Rendered HTML length: ${result.html.length} chars`);
            console.log(`  Contains H1: ${result.html.includes('<h1') ? '✅' : '❌'}`);
            console.log(`  Contains content: ${result.html.length > 100 ? '✅' : '❌'}`);
            
            // Show first 200 chars of rendered HTML
            console.log(`  First 200 chars: ${result.html.substring(0, 200)}...`);
          }
        }
      } catch (error) {
        console.log(`  ❌ SSR import failed: ${error.message}`);
      }
    }
    
    console.log('\n🎯 DIAGNOSIS COMPLETE');
    
  } catch (error) {
    console.error('❌ Debug failed:', error.message);
    console.error('Stack:', error.stack);
  }
}

debugSSGBuild();