#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';

console.log('🚀 Pre-deployment SSR/SSG verification...');

async function checkDeploymentReadiness() {
  const results = {
    timestamp: new Date().toISOString(),
    buildExists: false,
    hasSSRContent: false,
    diagnosticsReady: false,
    staticRoutesCount: 0,
    issues: [],
    recommendations: []
  };

  try {
    const distDir = 'dist';

    // 1. Check if build exists
    results.buildExists = await fs.pathExists(distDir);
    if (!results.buildExists) {
      results.issues.push('No dist directory - build not executed');
      results.recommendations.push('Run: npm run build');
      return results;
    }

    // 2. Check main index.html for SSR content
    const indexPath = path.join(distDir, 'index.html');
    if (await fs.pathExists(indexPath)) {
      const content = await fs.readFile(indexPath, 'utf-8');
      
      // Check for actual rendered content (not just empty root div)
      const hasRenderedContent = !content.includes('<div id="root"></div>') && 
                                content.includes('<h1') && 
                                content.includes('<p');
      
      results.hasSSRContent = hasRenderedContent;
      
      if (!hasRenderedContent) {
        results.issues.push('index.html lacks server-rendered content');
        results.recommendations.push('Check SSR build process - content not being pre-rendered');
      }

      console.log(`📄 Index.html analysis:`);
      console.log(`  - Size: ${content.length} characters`);
      console.log(`  - Has SSR content: ${hasRenderedContent}`);
      console.log(`  - Contains H1: ${content.includes('<h1')}`);
      console.log(`  - Contains paragraphs: ${content.includes('<p')}`);
    } else {
      results.issues.push('index.html not found');
    }

    // 3. Check static routes
    const expectedRoutes = ['services', 'online-therapy', 'couples-therapy', 'teen-therapy'];
    let routeCount = 0;
    
    for (const route of expectedRoutes) {
      const routePath = path.join(distDir, route, 'index.html');
      if (await fs.pathExists(routePath)) {
        routeCount++;
        console.log(`  ✅ Static route exists: /${route}`);
      } else {
        console.log(`  ❌ Missing static route: /${route}`);
        results.issues.push(`Missing static route: ${route}`);
      }
    }
    
    results.staticRoutesCount = routeCount;

    // 4. Check diagnostics
    const diagnosticsDir = path.join(distDir, '__diagnostics');
    results.diagnosticsReady = await fs.pathExists(diagnosticsDir);
    
    if (results.diagnosticsReady) {
      console.log('🔍 Diagnostics ready:');
      const diagnosticFiles = ['html.txt', 'seo.json', 'build-status.json'];
      
      for (const file of diagnosticFiles) {
        const filePath = path.join(diagnosticsDir, file);
        if (await fs.pathExists(filePath)) {
          console.log(`  ✅ /__diagnostics/${file.replace('.txt', '').replace('.json', '')}`);
        } else {
          console.log(`  ❌ Missing: ${file}`);
          results.issues.push(`Missing diagnostic file: ${file}`);
        }
      }
    } else {
      results.issues.push('Diagnostics directory missing');
      results.recommendations.push('Ensure build-ssg.js completes successfully');
    }

    // 5. Final assessment
    const isReady = results.buildExists && 
                   results.hasSSRContent && 
                   results.diagnosticsReady && 
                   results.staticRoutesCount > 0;

    console.log('\n📊 Deployment Readiness Summary:');
    console.log(`  Build exists: ${results.buildExists ? '✅' : '❌'}`);
    console.log(`  SSR content: ${results.hasSSRContent ? '✅' : '❌'}`);
    console.log(`  Diagnostics: ${results.diagnosticsReady ? '✅' : '❌'}`);
    console.log(`  Static routes: ${results.staticRoutesCount}/${expectedRoutes.length}`);
    console.log(`  Overall ready: ${isReady ? '✅ READY' : '❌ NOT READY'}`);

    if (results.issues.length > 0) {
      console.log('\n⚠️ Issues found:');
      results.issues.forEach(issue => console.log(`  - ${issue}`));
    }

    if (results.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      results.recommendations.forEach(rec => console.log(`  - ${rec}`));
    }

    // Write results to file for reference
    await fs.ensureDir(path.join(distDir, '__diagnostics'));
    await fs.writeFile(
      path.join(distDir, '__diagnostics', 'deployment-check.json'),
      JSON.stringify(results, null, 2)
    );

    if (!isReady) {
      console.log('\n🚨 Deployment not recommended - fix issues first');
      process.exit(1);
    } else {
      console.log('\n🎉 Ready for deployment!');
    }

  } catch (error) {
    console.error('💥 Deployment check failed:', error.message);
    results.issues.push(`Check failed: ${error.message}`);
    process.exit(1);
  }

  return results;
}

checkDeploymentReadiness();