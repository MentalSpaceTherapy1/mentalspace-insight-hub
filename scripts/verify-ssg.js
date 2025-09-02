#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const distIndexPath = path.join(__dirname, '../dist/index.html');

if (!fs.existsSync(distIndexPath)) {
  console.error('❌ dist/index.html not found');
  process.exit(1);
}

const content = fs.readFileSync(distIndexPath, 'utf-8');

const checks = {
  hasH1: content.includes('<h1>'),
  hasParagraph: content.includes('<p>'),
  hasJsonLd: content.includes('<script type="application/ld+json">'),
  hasTitle: content.includes('<title>') && !content.includes('<title></title>'),
  hasMetaDescription: content.includes('name="description"'),
  notJustRoot: !content.match(/<div id="root"><\/div>/)
};

let allPassed = true;

console.log('🔍 SSG Verification Results:');
console.log('============================');

Object.entries(checks).forEach(([check, passed]) => {
  const status = passed ? '✅' : '❌';
  const description = {
    hasH1: 'H1 tag present',
    hasParagraph: 'Paragraph content present', 
    hasJsonLd: 'JSON-LD structured data present',
    hasTitle: 'Title tag with content',
    hasMetaDescription: 'Meta description present',
    notJustRoot: 'Content beyond empty root div'
  }[check];
  
  console.log(`${status} ${description}`);
  
  if (!passed) {
    allPassed = false;
  }
});

console.log('============================');

if (allPassed) {
  console.log('✅ All SSG verification checks passed!');
  process.exit(0);
} else {
  console.log('❌ SSG verification failed - static content is missing');
  console.log('\nFirst 500 characters of dist/index.html:');
  console.log(content.substring(0, 500) + '...');
  process.exit(1);
}