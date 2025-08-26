#!/usr/bin/env node

console.log('🌐 PRODUCTION SITE DIAGNOSIS - Phase 4 Verification\n');

async function diagnoseProduction() {
  const baseUrl = 'https://mentalspacetherapy.lovable.app';
  
  console.log('=== DIAGNOSTIC ENDPOINTS STATUS ===');
  
  const endpoints = [
    { path: '/__diagnostics/html', name: 'HTML Diagnostic' },
    { path: '/__diagnostics/seo', name: 'SEO Diagnostic' }, 
    { path: '/__diagnostics/build', name: 'Build Status' }
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(`${baseUrl}${endpoint.path}`);
      const text = await response.text();
      
      console.log(`${endpoint.name}: ${response.status} (${response.ok ? 'OK' : 'FAILED'})`);
      
      // Check if it's returning actual diagnostic data or HTML page
      if (text.includes('<!DOCTYPE html>')) {
        console.log(`  ❌ Returning HTML page instead of diagnostic data`);
        console.log(`  This means static files aren't generated properly`);
      } else if (text.includes('Loading...')) {
        console.log(`  ❌ Client-side rendered content`);
      } else if (endpoint.path.includes('seo') && text.trim() === '{}') {
        console.log(`  ❌ Empty SEO data`);
      } else if (text.length > 10) {
        console.log(`  ✅ Contains diagnostic data (${text.length} chars)`);
      } else {
        console.log(`  ⚠️ Minimal content (${text.length} chars)`);
      }
    } catch (error) {
      console.log(`${endpoint.name}: ❌ Network error - ${error.message}`);
    }
  }
  
  console.log('\n=== HOMEPAGE SSR ANALYSIS ===');
  
  try {
    const response = await fetch(baseUrl);
    const html = await response.text();
    
    console.log(`Homepage Status: ${response.status} (${response.ok ? 'OK' : 'FAILED'})`);
    console.log(`Content Length: ${html.length} chars`);
    
    // Check for SSR content
    const isEmpty = html.includes('<div id="root"></div>');
    const hasSSRContent = !isEmpty;
    
    console.log(`\n🔍 SSR STATUS:`);
    console.log(`  Empty root div: ${isEmpty ? '❌ YES (Client-side only)' : '✅ NO (SSR working)'}`);
    console.log(`  Server-side rendered: ${hasSSRContent ? '✅ YES' : '❌ NO'}`);
    
    if (hasSSRContent) {
      // Analyze SSR content
      const rootMatch = html.match(/<div id="root">(.*?)<\/div>/s);
      if (rootMatch) {
        const rootContent = rootMatch[1];
        console.log(`  SSR content length: ${rootContent.length} chars`);
        
        // Check for critical elements
        const hasH1 = rootContent.includes('<h1');
        const hasP = rootContent.includes('<p');  
        const hasMentalSpace = rootContent.includes('MentalSpace');
        const hasTherapy = rootContent.includes('Therapy');
        
        console.log(`\n🎯 CRITICAL ELEMENTS:`);
        console.log(`  H1 tags: ${hasH1 ? '✅ FOUND' : '❌ MISSING'}`);
        console.log(`  P tags: ${hasP ? '✅ FOUND' : '❌ MISSING'}`);
        console.log(`  "MentalSpace" text: ${hasMentalSpace ? '✅ FOUND' : '❌ MISSING'}`);
        console.log(`  "Therapy" text: ${hasTherapy ? '✅ FOUND' : '❌ MISSING'}`);
        
        if (hasH1) {
          const h1Match = rootContent.match(/<h1[^>]*>(.*?)<\/h1>/s);
          if (h1Match) {
            const h1Text = h1Match[1].replace(/<[^>]*>/g, '').trim();
            console.log(`  First H1 content: "${h1Text.substring(0, 60)}..."`);
          }
        }
      }
    }
    
    // Check for JSON-LD
    const jsonLdMatches = html.match(/<script type="application\/ld\+json">/g);
    const hasJsonLd = jsonLdMatches && jsonLdMatches.length > 0;
    
    console.log(`\n📊 STRUCTURED DATA:`);
    console.log(`  JSON-LD scripts: ${hasJsonLd ? `✅ ${jsonLdMatches.length} found` : '❌ NONE'}`);
    
    // SEO elements
    console.log(`\n🔍 SEO ELEMENTS:`);
    console.log(`  Title tag: ${html.includes('<title>') ? '✅ FOUND' : '❌ MISSING'}`);
    console.log(`  Meta description: ${html.includes('name="description"') ? '✅ FOUND' : '❌ MISSING'}`);
    console.log(`  Canonical URL: ${html.includes('rel="canonical"') ? '✅ FOUND' : '❌ MISSING'}`);
    
  } catch (error) {
    console.log(`Homepage analysis failed: ❌ ${error.message}`);
  }
  
  console.log('\n🎯 PHASE 4 ASSESSMENT:');
  
  // Overall status assessment would go here based on the above checks
  console.log('Based on diagnostic endpoint and SSR analysis...');
}

// Only run if this script is executed directly (not in browser)
if (typeof window === 'undefined') {
  diagnoseProduction().catch(console.error);
}

export { diagnoseProduction };