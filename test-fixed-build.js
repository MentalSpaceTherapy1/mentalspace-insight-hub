#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs-extra';

console.log('🧪 TESTING FIXED SSG BUILD\n');

async function testFixedBuild() {
  try {
    console.log('📦 Step 1: Clean build test...');
    await fs.remove('dist');
    await fs.remove('dist-ssr');
    
    console.log('📦 Step 2: Testing individual vite configs...');
    
    // Test client build
    console.log('  Building client with SSG config...');
    execSync('vite build --config vite.config.ssg.ts', { stdio: 'inherit' });
    
    const clientBuilt = await fs.pathExists('dist/index.html');
    console.log(`  Client build: ${clientBuilt ? '✅' : '❌'}`);
    
    // Test SSR build  
    console.log('  Building SSR with SSR config...');
    execSync('vite build --config vite.config.ssr.ts', { stdio: 'inherit' });
    
    const ssrBuilt = await fs.pathExists('dist-ssr/entry-server.js');
    console.log(`  SSR build: ${ssrBuilt ? '✅' : '❌'}`);
    
    console.log('📦 Step 3: Testing SSR rendering...');
    if (ssrBuilt && clientBuilt) {
      try {
        // Test the server render function
        const { render } = await import('../dist-ssr/entry-server.js');
        console.log(`  Render function imported: ${typeof render === 'function' ? '✅' : '❌'}`);
        
        if (typeof render === 'function') {
          const result = render('/');
          console.log(`  Render returns object: ${result && typeof result === 'object' ? '✅' : '❌'}`);
          console.log(`  Has html property: ${result && result.html ? '✅' : '❌'}`);
          
          if (result && result.html) {
            const html = result.html;
            console.log(`  HTML length: ${html.length} chars`);
            console.log(`  Contains H1: ${html.includes('<h1') ? '✅' : '❌'}`);
            console.log(`  Contains content: ${html.length > 200 ? '✅' : '❌'}`);
            
            // Show a sample of the rendered content
            console.log(`  Sample HTML: ${html.substring(0, 300)}...`);
          }
        }
      } catch (error) {
        console.log(`  ❌ SSR test failed: ${error.message}`);
      }
    }
    
    console.log('📦 Step 4: Full SSG build test...');
    console.log('  Running complete build-ssg.js...');
    execSync('node scripts/build-ssg.js', { stdio: 'inherit' });
    
    console.log('📦 Step 5: Verifying final output...');
    const finalCheck = await verifyFinalBuild();
    
    if (finalCheck.success) {
      console.log('🎉 FIXED BUILD SUCCESSFUL!');
    } else {
      console.log('❌ Build issues remain:', finalCheck.issues);
    }
    
  } catch (error) {
    console.error('❌ Fixed build test failed:', error.message);
  }
}

async function verifyFinalBuild() {
  const checks = {
    distExists: await fs.pathExists('dist'),
    indexExists: await fs.pathExists('dist/index.html'),
    diagnosticsExists: await fs.pathExists('dist/__diagnostics'),
    buildStatusExists: await fs.pathExists('dist/__diagnostics/build-status.json')
  };
  
  let issues = [];
  
  if (checks.indexExists) {
    const content = await fs.readFile('dist/index.html', 'utf-8');
    const hasH1 = content.includes('<h1');
    const hasContent = content.length > 5000;
    const isSSR = !content.includes('<div id="root"></div>');
    
    console.log(`  Index.html has H1: ${hasH1 ? '✅' : '❌'}`);
    console.log(`  Index.html has content: ${hasContent ? '✅' : '❌'}`);
    console.log(`  Index.html is SSR: ${isSSR ? '✅' : '❌'}`);
    
    if (!hasH1) issues.push('Missing H1 tags');
    if (!hasContent) issues.push('Insufficient content');
    if (!isSSR) issues.push('Not server-side rendered');
  }
  
  return {
    success: issues.length === 0,
    issues: issues,
    checks: checks
  };
}

testFixedBuild();