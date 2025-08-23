import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

// Simple static HTML template with essential meta tags
function generateStaticHTML(route) {
  const routeData = {
    '/': {
      title: 'MentalSpace - Online Therapy & Mental Health Services | Licensed Therapists',
      description: 'Professional online therapy with licensed therapists. Anxiety, depression, couples therapy & more. Start your mental health journey today.',
      h1: 'Professional Online Therapy & Mental Health Services',
      content: 'Get matched with licensed therapists for anxiety, depression, couples therapy, and more. Start your mental health journey with MentalSpace today.'
    },
    '/online-therapy': {
      title: 'Online Therapy Services | Licensed Therapists Available | MentalSpace',
      description: 'Professional online therapy sessions with licensed therapists. Flexible scheduling, secure platform, insurance accepted.',
      h1: 'Professional Online Therapy Services',
      content: 'Connect with licensed therapists from the comfort of your home. Our secure, HIPAA-compliant platform offers flexible scheduling and evidence-based treatment approaches.'
    },
    '/couples-therapy': {
      title: 'Couples Therapy Online | Relationship Counseling | MentalSpace',
      description: 'Online couples therapy and relationship counseling with licensed therapists. Strengthen your relationship with professional guidance.',
      h1: 'Couples Therapy & Relationship Counseling',
      content: 'Strengthen your relationship with our licensed couples therapists. We help couples improve communication, resolve conflicts, and build deeper connections.'
    },
    '/teen-therapy': {
      title: 'Teen Therapy Services | Adolescent Mental Health | MentalSpace', 
      description: 'Specialized therapy services for teenagers and adolescents. Help your teen navigate mental health challenges with our licensed therapists.',
      h1: 'Teen Therapy & Adolescent Mental Health',
      content: 'Specialized therapy services designed for teenagers facing anxiety, depression, behavioral issues, and life transitions. Our teen-focused therapists understand adolescent development.'
    }
  };

  const data = routeData[route] || {
    title: `${route.replace(/[/-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | MentalSpace`,
    description: 'Professional mental health services and therapy with licensed therapists at MentalSpace.',
    h1: route.replace(/[/-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    content: 'Professional mental health services and support.'
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
    <meta name="description" content="${data.description}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://mentalspace.com${route}">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${data.title}">
    <meta property="og:description" content="${data.description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://mentalspace.com${route}">
    
    <!-- Schema.org -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "MentalSpace",
      "url": "https://mentalspace.com",
      "description": "Professional online therapy and mental health services",
      "medicalSpecialty": ["Psychiatry", "Psychology", "Mental Health Counseling"]
    }
    </script>
    
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; line-height: 1.6; margin: 0; padding: 20px; }
      .container { max-width: 1200px; margin: 0 auto; }
      h1 { color: #1a365d; margin-bottom: 1rem; }
      .content { margin: 2rem 0; }
      .cta { background: #3182ce; color: white; padding: 12px 24px; border: none; border-radius: 6px; text-decoration: none; display: inline-block; }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>${data.h1}</h1>
        </header>
        <main>
            <div class="content">
                <p>${data.content}</p>
                <a href="/get-started" class="cta">Get Started Today</a>
            </div>
        </main>
        <nav>
            <a href="/">Home</a> |
            <a href="/online-therapy">Online Therapy</a> |
            <a href="/couples-therapy">Couples Therapy</a> |
            <a href="/teen-therapy">Teen Therapy</a> |
            <a href="/contact-us">Contact</a>
        </nav>
    </div>
    
    <!-- Load React App -->
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;
}

function generateStaticFiles() {
  const distDir = path.join(__dirname, '../dist');
  
  console.log('Generating static HTML files...');
  
  // Ensure dist directory exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  routes.forEach(route => {
    try {
      const html = generateStaticHTML(route);
      
      // Create directory structure for nested routes
      const routePath = route === '/' ? '/index' : route;
      const filePath = path.join(distDir, routePath + '.html');
      const dirPath = path.dirname(filePath);
      
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      
      fs.writeFileSync(filePath, html);
      console.log(`✅ Generated ${filePath}`);
    } catch (error) {
      console.error(`❌ Failed to generate ${route}:`, error.message);
    }
  });
  
  console.log('✅ Static HTML generation complete!');
}

generateStaticFiles();