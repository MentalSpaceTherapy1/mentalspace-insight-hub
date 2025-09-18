#!/usr/bin/env node

/**
 * Google AdsBot URL Verification Script
 * 
 * This script verifies that all URLs work properly for Google AdsBot crawlers
 * and returns proper HTTP status codes without destination errors.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// All routes that should be accessible
const routes = [
  '/',
  '/online-therapy',
  '/couples-therapy',
  '/teen-therapy',
  '/life-coaching',
  '/relationship-coaching',
  '/coaching-services',
  '/chc-services',
  '/get-started',
  '/contact-us',
  '/insurance',
  '/faq',
  '/emergency-resources',
  '/privacy-policy',
  '/terms-and-conditions',
  '/mental-health-tests',
  '/mental-health-library',
  '/blog',
  '/therapist-matching',
  '/georgia-therapy-hub',
  
  // Mental Health Library Routes
  '/mental-health-library/anxiety',
  '/mental-health-library/depression',
  '/mental-health-library/adhd',
  '/mental-health-library/ptsd',
  '/mental-health-library/bipolar-disorder',
  '/mental-health-library/ocd',
  '/mental-health-library/panic-disorder',
  '/mental-health-library/social-anxiety-disorder',
  '/mental-health-library/adjustment-disorder',
  '/mental-health-library/anorexia',
  '/mental-health-library/codependency',
  '/mental-health-library/substance-use-disorder',
  
  // Georgia-specific therapy routes
  '/anxiety-therapy-georgia',
  '/depression-therapy-georgia',
  '/bipolar-therapy-georgia',
  '/ptsd-therapy-georgia',
  '/adhd-therapy-georgia',
  '/couples-therapy-georgia',
  '/teen-therapy-georgia',
  '/ocd-therapy-georgia',
  '/social-anxiety-therapy-georgia',
  '/grief-therapy-georgia',
  '/perinatal-mood-therapy-georgia',
  '/lgbtqia-therapy-georgia',
  
  // Insurance pages
  '/insurance/aetna',
  '/insurance/cigna',
  '/insurance/blue-cross',
  '/insurance/humana',
  '/insurance/optum',
  '/insurance/caresource',
  '/insurance/peach-state',
  '/insurance/amerigroup',
  '/insurance/alliant',
  
  // Blog posts
  '/blog/understanding-anxiety',
  '/blog/depression-adults',
  '/blog/teen-mental-health',
  '/blog/benefits-online-therapy',
  '/blog/couples-therapy-communication',
  '/blog/ptsd-recovery'
];

/**
 * Validate URL accessibility and SEO content
 */
function validateURL(html, route) {
  const issues = [];
  let score = 0;
  const maxScore = 8;

  // Check for essential SEO elements
  if (!html.includes('<title>')) {
    issues.push('Missing <title> tag');
  } else {
    score++;
  }

  if (!html.includes('<meta name="description"')) {
    issues.push('Missing meta description');
  } else {
    score++;
  }

  if (!html.includes('<h1>')) {
    issues.push('Missing H1 tag');
  } else {
    score++;
  }

  // Check for proper canonical URL
  if (!html.includes('<link rel="canonical"')) {
    issues.push('Missing canonical URL');
  } else if (!html.includes('https://chctherapy.com/')) {
    issues.push('Canonical URL not using https://chctherapy.com/');
  } else {
    score++;
  }

  // Check for Open Graph tags
  if (!html.includes('<meta property="og:title"')) {
    issues.push('Missing Open Graph title');
  } else {
    score++;
  }

  // Check for structured data
  if (html.includes('application/ld+json')) {
    score++;
  }

  // Check for navigation
  if (html.includes('<nav') || html.includes('navigation')) {
    score++;
  }

  // Check for footer
  if (html.includes('<footer')) {
    score++;
  }

  const percentage = Math.round((score / maxScore) * 100);
  
  return {
    score,
    maxScore,
    percentage,
    issues,
    pass: percentage >= 75
  };
}

/**
 * Test URL with Google AdsBot user agent
 */
async function testURLWithAdsBot(url, page) {
  try {
    // Set Google AdsBot user agent
    await page.setUserAgent('AdsBot-Google (+http://www.google.com/adsbot.html)');
    
    const response = await page.goto(url, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    const status = response.status();
    const html = await page.content();
    
    return {
      status,
      html,
      success: status === 200,
      url
    };
  } catch (error) {
    return {
      status: 0,
      html: '',
      success: false,
      error: error.message,
      url
    };
  }
}

/**
 * Log results with color coding
 */
function logResults(route, validation, status, error = null) {
  const statusIcon = status === 200 ? '✅' : '❌';
  const seoIcon = validation.pass ? '✅' : '⚠️';
  
  console.log(`${statusIcon} ${route} (HTTP ${status})`);
  console.log(`   ${seoIcon} SEO Score: ${validation.percentage}% (${validation.score}/${validation.maxScore})`);
  
  if (validation.issues.length > 0) {
    console.log(`   Issues: ${validation.issues.join(', ')}`);
  }
  
  if (error) {
    console.log(`   Error: ${error}`);
  }
  
  console.log('');
}

/**
 * Main verification function
 */
async function verifyAdsBotURLs() {
  const distDir = path.join(projectRoot, 'dist');
  
  if (!fs.existsSync(distDir)) {
    console.log('❌ dist directory not found. Please build the project first with: npm run build');
    return process.exit(1);
  }

  console.log('🔍 Starting Google AdsBot URL Verification...');
  console.log('===============================================');
  console.log(`Testing ${routes.length} URLs with Google AdsBot user agent`);
  console.log('');

  let puppeteer;
  try {
    puppeteer = await import('puppeteer');
  } catch (error) {
    console.log('⚠️ Puppeteer not available, using static file verification only');
    return verifyStaticFiles();
  }

  const browser = await puppeteer.default.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Start preview server
  const server = await createServer({
    root: distDir,
    server: { port: 4173 }
  });
  
  await server.listen();
  const baseUrl = 'http://localhost:4173';
  
  let totalTests = 0;
  let passedTests = 0;
  let seoScore = 0;
  const failedUrls = [];

  for (const route of routes) {
    const url = `${baseUrl}${route}`;
    const result = await testURLWithAdsBot(url, page);
    
    totalTests++;
    
    if (result.success) {
      passedTests++;
      const validation = validateURL(result.html, route);
      seoScore += validation.percentage;
      logResults(route, validation, result.status);
      
      if (!validation.pass) {
        failedUrls.push({ route, reason: 'SEO issues', issues: validation.issues });
      }
    } else {
      logResults(route, { pass: false, percentage: 0, score: 0, maxScore: 8, issues: ['URL not accessible'] }, result.status, result.error);
      failedUrls.push({ route, reason: `HTTP ${result.status}`, error: result.error });
    }
  }
  
  await browser.close();
  await server.close();
  
  // Summary
  const successRate = Math.round((passedTests / totalTests) * 100);
  const avgSeoScore = Math.round(seoScore / totalTests);
  
  console.log('===============================================');
  console.log(`📊 VERIFICATION SUMMARY`);
  console.log(`URLs Tested: ${totalTests}`);
  console.log(`Success Rate: ${successRate}% (${passedTests}/${totalTests})`);
  console.log(`Average SEO Score: ${avgSeoScore}%`);
  console.log('');
  
  if (failedUrls.length > 0) {
    console.log('❌ FAILED URLS:');
    failedUrls.forEach(({ route, reason, issues, error }) => {
      console.log(`   ${route}: ${reason}`);
      if (issues) console.log(`      Issues: ${issues.join(', ')}`);
      if (error) console.log(`      Error: ${error}`);
    });
    console.log('');
  }
  
  if (successRate >= 95 && avgSeoScore >= 80) {
    console.log('✅ All URLs are ready for Google AdsBot!');
    console.log('🚀 Your site should have no destination errors for ad campaigns.');
  } else {
    console.log('⚠️ Some URLs need attention before running ad campaigns.');
    console.log('Please fix the issues above to ensure Google AdsBot compatibility.');
  }
  
  return successRate >= 95 ? 0 : 1;
}

/**
 * Fallback static file verification
 */
function verifyStaticFiles() {
  console.log('🔍 Verifying static files...');
  
  const distDir = path.join(projectRoot, 'dist');
  let verified = 0;
  let total = routes.length;
  
  for (const route of routes) {
    const filePath = route === '/' ? 
      path.join(distDir, 'index.html') : 
      path.join(distDir, route.slice(1), 'index.html');
    
    const altFilePath = path.join(distDir, `${route.slice(1) || 'index'}.html`);
    
    if (fs.existsSync(filePath) || fs.existsSync(altFilePath)) {
      console.log(`✅ ${route}`);
      verified++;
    } else {
      console.log(`❌ ${route} - No static file found`);
    }
  }
  
  const successRate = Math.round((verified / total) * 100);
  console.log(`\nStatic file coverage: ${successRate}% (${verified}/${total})`);
  
  return successRate >= 95 ? 0 : 1;
}

// Run the verification
if (import.meta.url === `file://${process.argv[1]}`) {
  verifyAdsBotURLs()
    .then(code => process.exit(code))
    .catch(error => {
      console.error('❌ Verification failed:', error);
      process.exit(1);
    });
}

export { verifyAdsBotURLs, validateURL };