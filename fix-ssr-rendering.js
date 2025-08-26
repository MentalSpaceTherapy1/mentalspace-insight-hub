#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';

console.log('🔧 FIXING SSR RENDERING ISSUES\n');

async function fixSSRRendering() {
  try {
    console.log('📋 Step 1: Checking entry-server.tsx...');
    const entryServerPath = 'src/entry-server.tsx';
    const exists = await fs.pathExists(entryServerPath);
    
    if (!exists) {
      console.log('❌ entry-server.tsx missing, creating it...');
      const entryServerContent = `import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

export function render(url: string) {
  const helmetContext = {} as any;
  
  const html = ReactDOMServer.renderToString(
    React.createElement(MemoryRouter, { initialEntries: [url] }, 
      React.createElement(HelmetProvider, { context: helmetContext },
        React.createElement(App)
      )
    )
  );
  
  const { helmet } = helmetContext;
  
  return {
    html,
    helmet: helmet || {}
  };
}`;
      await fs.writeFile(entryServerPath, entryServerContent);
      console.log('✅ Created entry-server.tsx');
    } else {
      console.log('✅ entry-server.tsx exists');
    }

    console.log('\n📋 Step 2: Checking vite SSR config...');
    const viteConfigExists = await fs.pathExists('vite.config.ts');
    if (viteConfigExists) {
      const config = await fs.readFile('vite.config.ts', 'utf-8');
      const hasSSRConfig = config.includes('ssr') || config.includes('entry-server');
      console.log(`  SSR config present: ${hasSSRConfig ? '✅' : '❌'}`);
      
      if (!hasSSRConfig) {
        console.log('⚠️ Vite config may need SSR configuration');
      }
    }

    console.log('\n📋 Step 3: Testing build process step by step...');
    
    // Clean and build
    console.log('  Cleaning old builds...');
    await fs.remove('dist');
    await fs.remove('dist-ssr');
    
    console.log('  Building client...');
    const { execSync } = await import('child_process');
    execSync('vite build --outDir dist', { stdio: 'inherit' });
    
    console.log('  Building SSR server...');
    execSync('vite build --ssr src/entry-server.tsx --outDir dist-ssr', { stdio: 'inherit' });
    
    console.log('\n📋 Step 4: Verifying SSR build...');
    const serverBundleExists = await fs.pathExists('dist-ssr/entry-server.js');
    console.log(`  Server bundle: ${serverBundleExists ? '✅' : '❌'}`);
    
    if (serverBundleExists) {
      console.log('  Testing server render function...');
      try {
        const serverPath = path.resolve('dist-ssr/entry-server.js');
        const { render } = await import(serverPath);
        
        const result = render('/');
        console.log(`  Render function works: ${result && result.html ? '✅' : '❌'}`);
        
        if (result && result.html) {
          const hasContent = result.html.length > 100;
          const hasH1 = result.html.includes('<h1');
          console.log(`  Has content: ${hasContent ? '✅' : '❌'} (${result.html.length} chars)`);
          console.log(`  Has H1 tags: ${hasH1 ? '✅' : '❌'}`);
          
          if (!hasH1 || !hasContent) {
            console.log('⚠️ SSR rendering may not be working properly');
            console.log('  First 200 chars:', result.html.substring(0, 200));
          }
        }
      } catch (error) {
        console.log(`  ❌ Server render test failed: ${error.message}`);
      }
    }
    
    console.log('\n🎯 SSR RENDERING DIAGNOSIS COMPLETE');
    
  } catch (error) {
    console.error('❌ Fix attempt failed:', error.message);
  }
}

fixSSRRendering();