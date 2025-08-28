#!/usr/bin/env node

console.log('🌐 Production SSR Verification');
console.log('==============================');

const BASE_URL = 'https://mentalspacetherapy.lovable.app';

async function verifyProduction() {
  console.log(`Testing: ${BASE_URL}`);
  
  try {
    // Test 1: Homepage renders with content
    console.log('\n1️⃣ Testing homepage rendering...');
    const homeResponse = await fetch(BASE_URL);
    const homeHtml = await homeResponse.text();
    
    const hasTitle = homeHtml.includes('<title>');
    const hasH1 = homeHtml.includes('<h1');
    const hasContent = homeHtml.includes('<p') && homeHtml.length > 5000;
    const hasJsonLd = homeHtml.includes('application/ld+json');
    
    console.log('🏠 Homepage analysis:');
    console.log(`  • Status: ${homeResponse.status} ${homeResponse.status === 200 ? '✅' : '❌'}`);
    console.log(`  • Size: ${homeHtml.length} characters`);
    console.log(`  • Has title: ${hasTitle ? '✅' : '❌'}`);
    console.log(`  • Has H1: ${hasH1 ? '✅' : '❌'}`);
    console.log(`  • Has content: ${hasContent ? '✅' : '❌'}`);
    console.log(`  • Has JSON-LD: ${hasJsonLd ? '✅' : '❌'}`);

    // Test 2: Key pages render
    const testRoutes = ['/services', '/online-therapy', '/insights'];
    console.log('\n2️⃣ Testing key pages...');
    
    for (const route of testRoutes) {
      try {
        const response = await fetch(`${BASE_URL}${route}`);
        const html = await response.text();
        const hasContent = html.includes('<h1') && html.includes('<p') && html.length > 3000;
        console.log(`  • ${route}: ${response.status} ${hasContent ? '✅ (rendered)' : '❌ (spa-only)'}`);
      } catch (err) {
        console.log(`  • ${route}: ❌ (failed)`);
      }
    }

    // Test 3: Diagnostic endpoints
    console.log('\n3️⃣ Testing diagnostic endpoints...');
    
    try {
      const htmlDiagResponse = await fetch(`${BASE_URL}/__diagnostics/html.txt`);
      console.log(`  • HTML diagnostic: ${htmlDiagResponse.status} ${htmlDiagResponse.status === 200 ? '✅' : '❌'}`);
      
      const seoDiagResponse = await fetch(`${BASE_URL}/__diagnostics/seo.json`);
      console.log(`  • SEO diagnostic: ${seoDiagResponse.status} ${seoDiagResponse.status === 200 ? '✅' : '❌'}`);
      
      if (seoDiagResponse.status === 200) {
        const seoData = await seoDiagResponse.json();
        console.log(`  • Environment: ${seoData.environment || 'unknown'}`);
        console.log(`  • Routes count: ${seoData.routes_tested || 0}`);
      }
    } catch (err) {
      console.log('  • Diagnostics: ❌ (not accessible)');
    }

    // Test 4: Robots and sitemap
    console.log('\n4️⃣ Testing SEO files...');
    
    try {
      const robotsResponse = await fetch(`${BASE_URL}/robots.txt`);
      console.log(`  • Robots.txt: ${robotsResponse.status} ${robotsResponse.status === 200 ? '✅' : '❌'}`);
      
      const sitemapResponse = await fetch(`${BASE_URL}/sitemap.xml`);
      console.log(`  • Sitemap.xml: ${sitemapResponse.status} ${sitemapResponse.status === 200 ? '✅' : '❌'}`);
    } catch (err) {
      console.log('  • SEO files: ❌ (not accessible)');
    }

    console.log('\n📊 Production verification complete!');
    console.log('💡 Check "View Page Source" to verify HTML content is rendered');

  } catch (error) {
    console.error('❌ Production verification failed:', error.message);
  }
}

verifyProduction();