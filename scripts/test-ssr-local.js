#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';

console.log('🧪 Testing SSR/SSG build locally...');

async function testSSRLocal() {
  try {
    // Step 1: Clean previous builds
    console.log('🧹 Cleaning previous builds...');
    await fs.remove('dist');
    await fs.remove('dist-ssr');

    // Step 2: Run the SSG build
    console.log('🏗️ Running SSG build...');
    execSync('node scripts/build-ssg.js', { stdio: 'inherit' });

    // Step 3: Verify the build output
    console.log('🔍 Verifying build output...');
    const results = await verifyBuildOutput();

    // Step 4: Test static file serving
    console.log('📄 Testing static file content...');
    await testStaticContent();

    // Step 5: Test diagnostic endpoints
    console.log('🩺 Testing diagnostic endpoints...');
    await testDiagnostics();

    if (results.success) {
      console.log('✅ SSR/SSG build test PASSED!');
      console.log('🚀 Build is ready for deployment');
    } else {
      console.log('❌ SSR/SSG build test FAILED!');
      console.log('Issues found:', results.issues);
      process.exit(1);
    }

  } catch (error) {
    console.error('💥 Test failed:', error.message);
    process.exit(1);
  }
}

async function verifyBuildOutput() {
  const issues = [];
  const distDir = 'dist';

  // Check if dist exists
  if (!await fs.pathExists(distDir)) {
    issues.push('dist directory not found');
    return { success: false, issues };
  }

  // Check index.html has actual content
  const indexPath = path.join(distDir, 'index.html');
  if (await fs.pathExists(indexPath)) {
    const content = await fs.readFile(indexPath, 'utf-8');
    
    if (!content.includes('<h1')) {
      issues.push('index.html missing H1 tags');
    }
    
    if (!content.includes('<p')) {
      issues.push('index.html missing paragraph content');
    }

    if (content.includes('<div id="root"></div>')) {
      issues.push('index.html shows empty root div - SSR failed');
    }

    // Check for specific content that should be rendered
    if (!content.includes('Mental Space Therapy') && !content.includes('therapy') && !content.includes('online')) {
      issues.push('index.html missing expected therapy-related content');
    }

    console.log(`📊 Index.html analysis:`);
    console.log(`  - Size: ${content.length} characters`);
    console.log(`  - Has H1: ${content.includes('<h1')}`);
    console.log(`  - Has paragraphs: ${content.includes('<p')}`);
    console.log(`  - Has rendered content: ${!content.includes('<div id="root"></div>')}`);
  } else {
    issues.push('index.html not found');
  }

  // Check static routes
  const expectedRoutes = ['services', 'online-therapy', 'couples-therapy'];
  for (const route of expectedRoutes) {
    const routePath = path.join(distDir, route, 'index.html');
    if (!await fs.pathExists(routePath)) {
      issues.push(`Static route missing: ${route}/index.html`);
    }
  }

  return {
    success: issues.length === 0,
    issues
  };
}

async function testStaticContent() {
  const distDir = 'dist';
  const routes = ['/', '/services', '/online-therapy'];

  for (const route of routes) {
    const filePath = route === '/' 
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.slice(1), 'index.html');

    if (await fs.pathExists(filePath)) {
      const content = await fs.readFile(filePath, 'utf-8');
      console.log(`  📄 ${route}: ${content.length} chars, has content: ${content.includes('<h1') && content.includes('<p')}`);
    } else {
      console.log(`  ❌ ${route}: File not found`);
    }
  }
}

async function testDiagnostics() {
  const distDir = 'dist';
  const diagnosticsDir = path.join(distDir, '__diagnostics');

  if (!await fs.pathExists(diagnosticsDir)) {
    console.log('  ❌ Diagnostics directory not found');
    return;
  }

  // Test diagnostic files
  const diagnosticFiles = ['html.txt', 'seo.json', 'build-status.json'];
  
  for (const file of diagnosticFiles) {
    const filePath = path.join(diagnosticsDir, file);
    if (await fs.pathExists(filePath)) {
      const content = await fs.readFile(filePath, 'utf-8');
      console.log(`  ✅ ${file}: ${content.length} chars`);
      
      if (file === 'build-status.json') {
        try {
          const status = JSON.parse(content);
          console.log(`     Success: ${status.success}, Routes: ${status.routes_generated}`);
        } catch (e) {
          console.log(`     ⚠️ Invalid JSON in ${file}`);
        }
      }
    } else {
      console.log(`  ❌ ${file}: Not found`);
    }
  }
}

testSSRLocal();