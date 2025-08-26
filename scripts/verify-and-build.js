#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';

console.log('🔧 Starting robust SSR/SSG build process...');

// Environment detection with logging
const hostname = process.env.HOSTNAME || process.env.VERCEL_URL || '';
const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = hostname === 'mentalspacetherapy.lovable.app';

console.log('🌍 Environment Detection:');
console.log(`  HOSTNAME: ${hostname}`);
console.log(`  NODE_ENV: ${nodeEnv}`);
console.log(`  Production: ${isProduction}`);

async function robustBuild() {
  try {
    // Step 1: Clean previous builds
    console.log('🧹 Cleaning previous builds...');
    await fs.remove('dist');
    await fs.remove('dist-ssr');
    
    // Step 2: Run SSG build with comprehensive logging
    console.log('🚀 Running SSG build...');
    try {
      execSync('node scripts/build-ssg.js', { stdio: 'inherit' });
    } catch (ssgError) {
      console.warn('⚠️ SSG build encountered issues:', ssgError.message);
      // Continue with verification as build might still be partially successful
    }
    
    // Step 2.5: Verify build immediately after SSG
    console.log('🔍 Quick build verification...');
    const quickCheck = await quickVerifyBuild();
    if (!quickCheck.success) {
      console.warn('⚠️ Build verification warnings:', quickCheck.issues);
    }
    
    // Step 3: Verify build output
    console.log('✅ Verifying build output...');
    const verificationResult = await verifyBuildOutput();
    
    if (!verificationResult.success) {
      console.error('❌ Build verification failed:', verificationResult.errors);
      process.exit(1);
    }
    
    console.log('🎉 Build completed successfully!');
    console.log('📊 Build Summary:');
    console.log(`  Static files: ${verificationResult.fileCount}`);
    console.log(`  Routes rendered: ${verificationResult.routeCount}`);
    console.log(`  Diagnostics: ${verificationResult.diagnosticsReady ? 'Ready' : 'Missing'}`);
    
  } catch (error) {
    console.error('💥 Build failed:', error.message);
    
    // Fallback: try basic Vite build
    console.log('🔄 Attempting fallback Vite build...');
    try {
      execSync('npx vite build', { stdio: 'inherit' });
      console.log('✅ Fallback build completed');
      
      // Create minimal diagnostics for fallback build
      await createFallbackDiagnostics();
    } catch (fallbackError) {
      console.error('❌ Both builds failed:', fallbackError.message);
      process.exit(1);
    }
  }
}

async function verifyBuildOutput() {
  const distDir = 'dist';
  const result = {
    success: true,
    errors: [],
    fileCount: 0,
    routeCount: 0,
    diagnosticsReady: false
  };
  
  try {
    // Check if dist directory exists
    if (!await fs.pathExists(distDir)) {
      result.success = false;
      result.errors.push('dist directory not found');
      return result;
    }
    
    // Check for index.html
    const indexPath = path.join(distDir, 'index.html');
    if (!await fs.pathExists(indexPath)) {
      result.success = false;
      result.errors.push('index.html not found');
      return result;
    }
    
    // Verify index.html has rendered content
    const indexContent = await fs.readFile(indexPath, 'utf-8');
    if (!indexContent.includes('<h1')) {
      result.success = false;
      result.errors.push('index.html missing rendered H1 content');
    }
    
    // Count static files
    const files = await fs.readdir(distDir);
    result.fileCount = files.length;
    
    // Check for diagnostic files
    const diagnosticsDir = path.join(distDir, '__diagnostics');
    if (await fs.pathExists(diagnosticsDir)) {
      const htmlDiag = path.join(diagnosticsDir, 'html.txt');
      const seoDiag = path.join(diagnosticsDir, 'seo.json');
      result.diagnosticsReady = await fs.pathExists(htmlDiag) && await fs.pathExists(seoDiag);
    }
    
    // Count rendered routes (directories with index.html)
    for (const file of files) {
      const filePath = path.join(distDir, file);
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) {
        const routeIndex = path.join(filePath, 'index.html');
        if (await fs.pathExists(routeIndex)) {
          result.routeCount++;
        }
      }
    }
    
  } catch (error) {
    result.success = false;
    result.errors.push(`Verification error: ${error.message}`);
  }
  
  return result;
}

async function quickVerifyBuild() {
  try {
    const indexPath = path.join('dist', 'index.html');
    const indexContent = await fs.readFile(indexPath, 'utf-8');
    
    const checks = {
      hasH1: indexContent.includes('<h1'),
      hasContent: indexContent.includes('<p') && indexContent.length > 5000,
      hasJsonLd: indexContent.includes('application/ld+json'),
      hasCanonical: indexContent.includes('rel="canonical"')
    };
    
    const issues = [];
    if (!checks.hasH1) issues.push('Missing H1 tags');
    if (!checks.hasContent) issues.push('Insufficient rendered content');
    if (!checks.hasJsonLd) issues.push('Missing JSON-LD structured data');
    if (!checks.hasCanonical) issues.push('Missing canonical tags');
    
    return {
      success: issues.length === 0,
      issues: issues,
      checks: checks
    };
  } catch (error) {
    return {
      success: false,
      issues: [`Quick verification failed: ${error.message}`]
    };
  }
}

async function createFallbackDiagnostics() {
  try {
    const diagnosticsDir = path.join('dist', '__diagnostics');
    await fs.ensureDir(diagnosticsDir);
    
    // Create minimal build status
    const buildStatus = {
      success: true,
      buildType: 'fallback-vite',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'production',
      message: 'Fallback Vite build completed successfully'
    };
    
    await fs.writeJson(path.join(diagnosticsDir, 'build-status.json'), buildStatus, { spaces: 2 });
    
    // Create basic HTML diagnostic
    const indexPath = path.join('dist', 'index.html');
    if (await fs.pathExists(indexPath)) {
      const content = await fs.readFile(indexPath, 'utf-8');
      const diagnostic = `# Fallback Build HTML Diagnostic\n\nBuild Type: Vite Fallback\nTimestamp: ${new Date().toISOString()}\n\nHTML Length: ${content.length} characters\nContains H1: ${content.includes('<h1') ? 'Yes' : 'No'}\n`;
      
      await fs.writeFile(path.join(diagnosticsDir, 'html.txt'), diagnostic);
    }
    
    console.log('📊 Fallback diagnostics created');
  } catch (error) {
    console.warn('⚠️ Could not create fallback diagnostics:', error.message);
  }
}

robustBuild();