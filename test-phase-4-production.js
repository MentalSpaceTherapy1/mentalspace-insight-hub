#!/usr/bin/env node

console.log('🌐 PHASE 4: PRODUCTION DEPLOYMENT TESTING\n');

const baseUrl = 'https://mentalspacetherapy.lovable.app';

async function testPhase4() {
  try {
    console.log('🔍 Step 1: Testing diagnostic endpoints on live site...');
    
    const endpoints = [
      '/__diagnostics/html',
      '/__diagnostics/seo', 
      '/__diagnostics/build'
    ];

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(`${baseUrl}${endpoint}`);
        console.log(`  ${endpoint}: ${response.ok ? '✅' : '❌'} (${response.status})`);
        
        if (response.ok && endpoint === '/__diagnostics/build') {
          const data = await response.text();
          console.log(`    Build status available: ${data.length > 0 ? '✅' : '❌'}`);
        }
      } catch (error) {
        console.log(`  ${endpoint}: ❌ (Network error)`);
      }
    }

    console.log('\n📄 Step 2: Verifying SSR content in View Source...');
    try {
      const response = await fetch(baseUrl);
      if (response.ok) {
        const html = await response.text();
        
        const ssrChecks = {
          hasH1: html.includes('<h1'),
          hasContent: html.length > 5000,
          hasJsonLd: html.includes('application/ld+json'),
          hasCanonical: html.includes('rel="canonical"'),
          isSSR: !html.includes('id="root"></div>')
        };

        console.log(`  H1 tags in source: ${ssrChecks.hasH1 ? '✅' : '❌'}`);
        console.log(`  Rich content: ${ssrChecks.hasContent ? '✅' : '❌'}`);
        console.log(`  JSON-LD in source: ${ssrChecks.hasJsonLd ? '✅' : '❌'}`);
        console.log(`  Canonical in source: ${ssrChecks.hasCanonical ? '✅' : '❌'}`);
        console.log(`  Server-side rendered: ${ssrChecks.isSSR ? '✅' : '❌'}`);
        
        if (ssrChecks.isSSR && ssrChecks.hasH1 && ssrChecks.hasContent) {
          console.log('\n🎉 PHASE 4 COMPLETED SUCCESSFULLY!');
          console.log('Production deployment is working with full SSR content.');
        } else {
          console.log('\n⚠️ PHASE 4 PARTIALLY COMPLETE');
          console.log('Site is accessible but may need SSR content verification.');
        }
      }
    } catch (error) {
      console.log(`  Homepage check: ❌ (${error.message})`);
    }

  } catch (error) {
    console.error('❌ Phase 4 testing failed:', error.message);
  }
}

testPhase4();