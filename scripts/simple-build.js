#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs-extra';

console.log('🚀 Simple Vite build for production...');

async function simpleBuild() {
  try {
    // Clean previous builds
    console.log('🧹 Cleaning previous builds...');
    await fs.remove('dist');

    // Run Vite build
    console.log('📦 Running Vite build...');
    execSync('npx vite build', { stdio: 'inherit' });

    // Verify build output
    console.log('✅ Verifying build output...');
    const indexExists = await fs.pathExists('dist/index.html');
    
    if (!indexExists) {
      throw new Error('Build failed - no index.html generated');
    }

    const indexContent = await fs.readFile('dist/index.html', 'utf-8');
    console.log(`📄 Built index.html (${indexContent.length} characters)`);

    console.log('🎉 Build completed successfully!');
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

simpleBuild();