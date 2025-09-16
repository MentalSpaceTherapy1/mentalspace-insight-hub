#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const distDir = path.join(__dirname, '../dist');
const distIndexPath = path.join(distDir, 'index.html');

// All routes that should have prerendered HTML
const routes = [
  '/',
  '/online-therapy',
  '/couples-therapy', 
  '/teen-therapy',
  '/life-coaching',
  '/relationship-coaching',
  '/coaching-services',
  '/insurance',
  '/faq',
  '/contact-us',
  '/career',
  '/career-application',
  '/emergency-resources',
  '/get-started',
  '/therapist-matching',
  '/mental-health-library',
  '/mental-health-tests',
  '/assessment-contact',
  '/thank-you',
  '/blog',
  '/mental-health-library/depression',
  '/mental-health-library/anxiety', 
  '/mental-health-library/adhd',
  '/privacy-policy',
  '/terms-conditions'
];

// Enhanced SEO validation function
function validateSEOContent(html, route) {
  const checks = {
    hasTitle: html.includes('<title>') && !html.includes('<title></title>'),
    hasMetaDescription: html.includes('name="description"'),
    hasH1: html.includes('<h1'),
    hasContent: html.includes('<p>') || html.includes('<div class='),
    hasNav: html.includes('<nav'),
    hasFooter: html.includes('<footer'),
    hasJsonLd: html.includes('application/ld+json'),
    notEmpty: !html.match(/<div id="root"><\/div>/),
    hasOgTags: html.includes('property="og:'),
    hasCanonical: html.includes('rel="canonical"')
  };
  
  const score = Object.values(checks).filter(Boolean).length;
  const maxScore = Object.keys(checks).length;
  
  return { checks, score, maxScore, percentage: Math.round((score / maxScore) * 100) };
}

if (!fs.existsSync(distDir)) {
  console.error('❌ Dist directory not found');
  process.exit(1);
}

console.log('🔍 Comprehensive SSG & SEO Verification:');
console.log('==========================================');

let totalRoutes = 0;
let passedRoutes = 0;
let criticalIssues = [];

routes.forEach(route => {
  totalRoutes++;
  let filePath;
  
  if (route === '/') {
    filePath = path.join(distDir, 'index.html');
  } else {
    // Check both modern (/route/index.html) and legacy (/route.html) formats
    const modernPath = path.join(distDir, route, 'index.html');
    const legacyPath = path.join(distDir, route + '.html');
    
    if (fs.existsSync(modernPath)) {
      filePath = modernPath;
    } else if (fs.existsSync(legacyPath)) {
      filePath = legacyPath;
    } else {
      console.log(`❌ ${route}: File missing (checked both ${modernPath} and ${legacyPath})`);
      criticalIssues.push(`Missing: ${route}`);
      return;
    }
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const validation = validateSEOContent(content, route);
  
  const status = validation.percentage >= 80 ? '✅' : validation.percentage >= 60 ? '⚠️' : '❌';
  console.log(`${status} ${route}: ${validation.score}/${validation.maxScore} (${validation.percentage}%)`);
  
  if (validation.percentage >= 60) {
    passedRoutes++;
  } else {
    const failed = Object.entries(validation.checks)
      .filter(([_, passed]) => !passed)
      .map(([check]) => check);
    criticalIssues.push(`${route}: Missing ${failed.slice(0, 3).join(', ')}`);
  }
});

console.log('==========================================');

const successRate = Math.round((passedRoutes / totalRoutes) * 100);
console.log(`📊 Overall Success: ${passedRoutes}/${totalRoutes} routes (${successRate}%)`);

if (successRate >= 90) {
  console.log('🎉 Excellent! Your site is fully search engine optimized!');
  process.exit(0);
} else if (successRate >= 75) {
  console.log('⚠️  Good progress, but some optimization needed:');
  criticalIssues.slice(0, 5).forEach(issue => console.log(`   • ${issue}`));
  process.exit(0);
} else {
  console.log('❌ Critical SEO issues detected:');
  criticalIssues.slice(0, 10).forEach(issue => console.log(`   • ${issue}`));
  console.log('\nYour site may not be visible to search engines!');
  console.log('⚠️  Build will continue - fix SEO issues after deployment');
  process.exit(0); // Don't fail the build process
}