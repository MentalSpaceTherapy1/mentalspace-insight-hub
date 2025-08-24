import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  const routes = [
    '/',
    '/services/adults',
    '/insights/anxiety-basics'
  ];
  
  let htmlOutput = '';
  
  for (const route of routes) {
    try {
      const response = await fetch(`${baseUrl}${route}`, {
        headers: {
          'User-Agent': 'MentalSpace-Diagnostics'
        }
      });
      
      if (response.ok) {
        const html = await response.text();
        htmlOutput += `\n\n=== ROUTE: ${route} ===\n`;
        
        // Extract key SEO elements
        const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
        const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
        const firstPMatch = html.match(/<p[^>]*>(.*?)<\/p>/i);
        const canonicalMatch = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/i);
        
        htmlOutput += `Title: ${titleMatch ? titleMatch[1] : 'NOT FOUND'}\n`;
        htmlOutput += `H1: ${h1Match ? h1Match[1].replace(/<[^>]*>/g, '') : 'NOT FOUND'}\n`;
        htmlOutput += `First P: ${firstPMatch ? firstPMatch[1].replace(/<[^>]*>/g, '').slice(0, 100) + '...' : 'NOT FOUND'}\n`;
        htmlOutput += `Canonical: ${canonicalMatch ? canonicalMatch[1] : 'NOT FOUND'}\n`;
        
        // Check for JSON-LD
        const jsonLdMatches = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gi);
        htmlOutput += `JSON-LD Scripts: ${jsonLdMatches ? jsonLdMatches.length : 0}\n`;
        
      } else {
        htmlOutput += `\n\n=== ROUTE: ${route} ===\nERROR: ${response.status} ${response.statusText}\n`;
      }
    } catch (error) {
      htmlOutput += `\n\n=== ROUTE: ${route} ===\nERROR: ${error}\n`;
    }
  }
  
  return new NextResponse(htmlOutput, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}