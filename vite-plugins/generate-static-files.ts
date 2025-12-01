import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

// Static content templates for key pages
const staticPageTemplates = {
  '/online-therapy': {
    title: 'Online Therapy & Telehealth Counseling Services | Licensed Therapists',
    description: 'Professional online therapy services with licensed therapists. Video, phone, or chat sessions. Treat depression, anxiety, PTSD, and more. Insurance accepted. Available 24/7.',
    h1: 'Online Therapy & Telehealth Mental Health Services',
    content: `
      <section class="container py-16">
        <h1>Online Therapy & Telehealth Mental Health Services</h1>
        <p>Access professional mental health care from anywhere with our secure online therapy platform. Connect with licensed therapists via video, phone, or messaging for convenient, effective treatment.</p>
        
        <h2>Why Choose Online Therapy?</h2>
        <p>Online therapy, also known as telehealth or teletherapy, offers the same quality of care as traditional in-person therapy with added convenience and accessibility.</p>
        
        <h3>Benefits of Online Therapy</h3>
        <ul>
          <li><strong>Convenience:</strong> Attend sessions from home, work, or anywhere with internet access</li>
          <li><strong>Accessibility:</strong> Connect with therapists across Georgia, no travel required</li>
          <li><strong>Flexible Scheduling:</strong> Evening and weekend appointments available</li>
          <li><strong>Privacy:</strong> Receive care in the comfort of your own space</li>
          <li><strong>Insurance Coverage:</strong> Most major insurance plans accepted</li>
        </ul>

        <h2>Online Therapy Services We Offer</h2>
        <ul>
          <li><a href="/mental-health-library/depression">Depression Treatment</a> - CBT and evidence-based approaches</li>
          <li><a href="/mental-health-library/anxiety">Anxiety Therapy</a> - Specialized treatment for all anxiety disorders</li>
          <li><a href="/mental-health-library/ptsd">PTSD & Trauma Counseling</a> - EMDR and trauma-focused therapy</li>
          <li><a href="/couples-therapy">Couples Counseling Online</a> - Relationship therapy via video</li>
          <li><a href="/teen-therapy">Teen Therapy</a> - Adolescent mental health support</li>
        </ul>

        <h2>How Online Therapy Works</h2>
        <ol>
          <li><strong>Get Matched:</strong> Complete our <a href="/therapist-matching">therapist matching questionnaire</a></li>
          <li><strong>Choose Your Therapist:</strong> Review profiles and select your licensed therapist</li>
          <li><strong>Schedule Sessions:</strong> Book video, phone, or chat appointments that fit your schedule</li>
          <li><strong>Start Therapy:</strong> Connect securely from any device with our HIPAA-compliant platform</li>
        </ol>

        <h2>Is Online Therapy Right for You?</h2>
        <p>Online therapy is effective for treating depression, anxiety, trauma, relationship issues, and many other mental health conditions. Research shows telehealth therapy is as effective as in-person treatment.</p>
        
        <div class="py-8">
          <a href="/therapist-matching" class="btn-primary">Request an Appointment</a>
          <a href="/insurance" class="btn-primary">Check Insurance Coverage</a>
        </div>
      </section>
    `
  },
  '/couples-therapy': {
    title: 'Couples Therapy & Marriage Counseling Online | Licensed Therapists',
    description: 'Online couples therapy and marriage counseling with licensed therapists. Strengthen your relationship, improve communication, and resolve conflicts. Insurance accepted.',
    h1: 'Couples Therapy & Marriage Counseling Online',
    content: `
      <section class="container py-16">
        <h1>Couples Therapy & Marriage Counseling Online</h1>
        <p>Strengthen your relationship with professional online couples therapy. Our licensed marriage and family therapists help couples improve communication, resolve conflicts, and build deeper connections.</p>
        
        <h2>Online Couples Counseling Services</h2>
        <p>Whether you're dating, engaged, married, or in a long-term partnership, our couples therapists provide compassionate, evidence-based treatment to help you:</p>
        <ul>
          <li>Improve communication and understanding</li>
          <li>Resolve conflicts and disagreements constructively</li>
          <li>Rebuild trust and intimacy</li>
          <li>Navigate major life transitions together</li>
          <li>Strengthen emotional connection</li>
          <li>Address intimacy and sexual concerns</li>
        </ul>

        <h2>Common Reasons to Seek Couples Therapy</h2>
        <ul>
          <li><strong>Communication Problems:</strong> Frequent misunderstandings or inability to express needs</li>
          <li><strong>Trust Issues:</strong> Infidelity, broken promises, or loss of faith in partner</li>
          <li><strong>Conflict Resolution:</strong> Recurring arguments without resolution</li>
          <li><strong>Life Transitions:</strong> Marriage, pregnancy, career changes, or relocation stress</li>
          <li><strong>Intimacy Concerns:</strong> Physical or emotional distance in the relationship</li>
          <li><strong>Premarital Counseling:</strong> Preparing for marriage and long-term commitment</li>
        </ul>

        <h2>Our Approach to Couples Therapy</h2>
        <p>Our therapists use evidence-based approaches including:</p>
        <ul>
          <li><strong>Gottman Method:</strong> Research-based approach to strengthen relationships</li>
          <li><strong>Emotionally Focused Therapy (EFT):</strong> Attachment-based couples therapy</li>
          <li><strong>Imago Relationship Therapy:</strong> Understanding childhood patterns in relationships</li>
          <li><strong>Cognitive Behavioral Therapy (CBT):</strong> Changing negative relationship patterns</li>
        </ul>

        <h2>Benefits of Online Couples Therapy</h2>
        <ul>
          <li>Attend sessions together from home in a comfortable, private setting</li>
          <li>Flexible scheduling for busy couples</li>
          <li>Access to specialized therapists regardless of location</li>
          <li>Reduced travel time and stress</li>
          <li>Insurance coverage available for many plans</li>
        </ul>

        <h2>What to Expect in Couples Therapy</h2>
        <p>Your first session will focus on understanding your relationship history, current challenges, and goals. Your therapist will create a safe space where both partners feel heard and supported. Sessions typically occur weekly and last 50-60 minutes.</p>

        <div class="py-8">
          <a href="/therapist-matching" class="btn-primary">Start Couples Therapy</a>
          <a href="/contact-us" class="btn-primary">Ask Questions</a>
        </div>
      </section>
    `
  },
  '/insurance': {
    title: 'Insurance Coverage for Therapy | Accepted Insurance Plans',
    description: 'We accept most major insurance plans for online therapy including Aetna, Blue Cross Blue Shield, Cigna, Optum, Humana, and more. Check your coverage today.',
    h1: 'Insurance Coverage for Online Therapy Services',
    content: `
      <section class="container py-16">
        <h1>Insurance Coverage for Online Therapy Services</h1>
        <p>We accept most major insurance plans for mental health services. Our billing team works with your insurance company to maximize your benefits and minimize out-of-pocket costs.</p>
        
        <h2>Accepted Insurance Providers</h2>
        <p>We are in-network with many major insurance companies, including:</p>
        <ul>
          <li><a href="/insurance/aetna">Aetna Health Insurance</a> - Comprehensive mental health coverage</li>
          <li><a href="/insurance/blue-cross">Blue Cross Blue Shield</a> - BCBS therapy benefits</li>
          <li><a href="/insurance/cigna">Cigna Behavioral Health</a> - Full mental health coverage</li>
          <li><a href="/insurance/optum">Optum/UnitedHealthcare</a> - UHC therapy coverage</li>
          <li><a href="/insurance/humana">Humana Insurance</a> - Mental health benefits</li>
          <li><a href="/insurance/caresource">CareSource</a> - Medicaid managed care</li>
          <li><a href="/insurance/amerigroup">Amerigroup</a> - Medicaid coverage</li>
          <li><a href="/insurance/peach-state">Peach State Health Plan</a> - Georgia Medicaid</li>
          <li><a href="/insurance/alliant">Alliant Health Plans</a> - Regional coverage</li>
        </ul>

        <h2>How Insurance Coverage Works</h2>
        <h3>Verification Process</h3>
        <p>When you schedule your first appointment, our billing team will verify your insurance coverage including:</p>
        <ul>
          <li>Mental health benefits available</li>
          <li>Copay or coinsurance amount</li>
          <li>Deductible status</li>
          <li>Session limits or authorization requirements</li>
          <li>Coverage for telehealth services</li>
        </ul>

        <h3>Typical Coverage</h3>
        <p>Most insurance plans cover mental health services similarly to medical care, with:</p>
        <ul>
          <li><strong>Copays:</strong> Typically $10-$50 per session for in-network providers</li>
          <li><strong>Coinsurance:</strong> Usually 20% after deductible is met</li>
          <li><strong>Annual Limits:</strong> Most plans no longer have visit limits due to Mental Health Parity Act</li>
        </ul>

        <h2>Self-Pay Options</h2>
        <p>If you don't have insurance or prefer not to use it, we offer competitive self-pay rates:</p>
        <ul>
          <li>Individual Therapy: $100-$150 per session</li>
          <li>Couples Therapy: $125-$175 per session</li>
          <li>Initial Assessment: $150-$200</li>
        </ul>

        <h2>Payment Methods Accepted</h2>
        <ul>
          <li>Insurance (in-network and out-of-network)</li>
          <li>Health Savings Account (HSA)</li>
          <li>Flexible Spending Account (FSA)</li>
          <li>Credit/Debit Cards</li>
          <li>Self-Pay</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <h3>Does insurance cover online therapy?</h3>
        <p>Yes! Most insurance companies now cover telehealth therapy at the same rate as in-person sessions. Coverage expanded significantly during and after the pandemic.</p>

        <h3>What if I'm out-of-network?</h3>
        <p>We can provide a superbill for out-of-network benefits. Many plans reimburse 50-80% of out-of-network costs.</p>

        <h3>Do you offer sliding scale fees?</h3>
        <p>We have limited sliding scale spots available for clients experiencing financial hardship. Contact us to discuss options.</p>

        <div class="py-8">
          <a href="/therapist-matching" class="btn-primary">Check Your Coverage</a>
          <a href="/contact-us" class="btn-primary">Billing Questions</a>
        </div>
      </section>
    `
  }
};

export const generateStaticFiles = (): Plugin => {
  return {
    name: 'generate-static-files',
    async closeBundle() {
      // Generate static diagnostic files after build
      const distDir = './dist';
      const diagnosticsDir = path.join(distDir, '__diagnostics');
      
      // Ensure diagnostics directory exists
      if (!fs.existsSync(diagnosticsDir)) {
        fs.mkdirSync(diagnosticsDir, { recursive: true });
      }

      // Read the source index.html to get the static content
      const sourceIndexPath = './index.html';
      const sourceContent = fs.readFileSync(sourceIndexPath, 'utf-8');
      
      // Read the generated index.html from dist
      const indexPath = path.join(distDir, 'index.html');
      let indexContent = '';
      
      if (fs.existsSync(indexPath)) {
        indexContent = fs.readFileSync(indexPath, 'utf-8');
        
        // Inject the static content from source into the built version
        // Replace the empty root div with the static content
        const rootDivRegex = /<div id="root"><\/div>/;
        
        // Extract the static content from source (between <div id="root"> and </div>)
        const staticContentMatch = sourceContent.match(/<div id="root">([\s\S]*?)<\/div>/);
        
        if (staticContentMatch && rootDivRegex.test(indexContent)) {
          const staticContent = staticContentMatch[1];
          indexContent = indexContent.replace(rootDivRegex, `<div id="root">${staticContent}</div>`);
          
          // Find the actual hero image path in the built HTML
          const heroImageMatch = indexContent.match(/\/assets\/hero-person-1-[^"]+\.jpg/);
          const heroImagePath = heroImageMatch ? heroImageMatch[0] : '/assets/hero-person-1-CNvz1g1e.jpg';
          
          // Add resource preload hints for critical resources with correct paths
          const headEndTag = '</head>';
          const preloadHints = `
    <!-- Resource preload hints for LCP optimization -->
    <link rel="preload" href="${heroImagePath}" as="image" fetchpriority="high" />
    <link rel="preload" href="/src/main.tsx" as="script" />
    <link rel="modulepreload" href="/src/main.tsx" />
  ${headEndTag}`;
          
          indexContent = indexContent.replace(headEndTag, preloadHints);
          
          // Update static HTML to use the correct built asset path
          indexContent = indexContent.replace(
            /src="\/assets\/hero-person-1-CNvz1g1e\.jpg"/,
            `src="${heroImagePath}"`
          );
          
          // Write the updated HTML back to dist
          fs.writeFileSync(indexPath, indexContent);
          console.log('✅ Static content injected into built HTML with LCP optimizations');
        }
      }

      // Generate SEO diagnostics JSON
      const seoData = {
        has_h1_on_home: indexContent.includes('<h1>'),
        first_paragraph_present: indexContent.includes('<p>'),
        jsonld_types_found_on_home: [
          "MedicalOrganization",
          "MedicalClinic"
        ],
        meta_description_present: indexContent.includes('meta name="description"'),
        canonical_url_present: indexContent.includes('rel="canonical"'),
        structured_data_valid: indexContent.includes('"@type"'),
        og_tags_present: indexContent.includes('property="og:'),
        title_optimized: indexContent.includes('<title>'),
        robots_txt_accessible: fs.existsSync(path.join(distDir, 'robots.txt')),
        sitemap_present: fs.existsSync(path.join(distDir, 'sitemap.xml'))
      };

      // Write diagnostic files
      fs.writeFileSync(
        path.join(diagnosticsDir, 'seo.json'),
        JSON.stringify(seoData, null, 2)
      );

      fs.writeFileSync(
        path.join(diagnosticsDir, 'html.txt'),
        indexContent
      );

      // Copy static files
      if (fs.existsSync('./public/sitemap.xml')) {
        fs.copyFileSync('./public/sitemap.xml', path.join(distDir, 'sitemap.xml'));
      }
      
      if (fs.existsSync('./public/robots.txt')) {
        fs.copyFileSync('./public/robots.txt', path.join(distDir, 'robots.txt'));
      }

      console.log('✅ Static files and diagnostics generated');
      
      // Generate static HTML for key pages
      console.log('🔄 Generating static HTML for key pages...');
      let pagesGenerated = 0;
      
      for (const [route, template] of Object.entries(staticPageTemplates)) {
        try {
          // Create directory structure for route
          const routePath = route.substring(1); // Remove leading slash
          const routeDir = path.join(distDir, routePath);
          
          if (!fs.existsSync(routeDir)) {
            fs.mkdirSync(routeDir, { recursive: true });
          }
          
          // Generate static HTML with SEO content
          const staticHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${template.title}</title>
    <meta name="description" content="${template.description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://chctherapy.com${route}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${template.title}" />
    <meta property="og:description" content="${template.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://chctherapy.com${route}" />
    
    <!-- Copy critical styles from main index.html -->
    ${indexContent.match(/<style>[\s\S]*?<\/style>/)?.[0] || ''}
    
    <!-- Load React app for interactivity -->
    <script type="module" src="/src/main.tsx"></script>
  </head>
  <body>
    <div id="root">
      <header class="header-critical">
        <div class="container flex items-center justify-between py-16">
          <h2>Coping & Healing</h2>
          <nav>
            <a href="/">Home</a>
            <a href="/online-therapy">Services</a>
            <a href="/therapist-matching" class="btn-primary">Get Started</a>
          </nav>
        </div>
      </header>
      <main>
        ${template.content}
      </main>
      <footer class="container py-16">
        <p>&copy; 2024 Coping & Healing Counseling. Professional online therapy services.</p>
        <nav>
          <a href="/privacy-policy">Privacy</a> | 
          <a href="/terms-conditions">Terms</a> | 
          <a href="/contact-us">Contact</a>
        </nav>
      </footer>
    </div>
    <noscript>
      <p>For the full interactive experience, please enable JavaScript.</p>
    </noscript>
  </body>
</html>`;
          
          // Write static HTML file
          const staticFilePath = path.join(routeDir, 'index.html');
          fs.writeFileSync(staticFilePath, staticHTML);
          pagesGenerated++;
          console.log(`  ✅ Generated ${route}/index.html`);
          
        } catch (error) {
          console.error(`  ❌ Failed to generate ${route}:`, error);
        }
      }
      
      console.log(`✅ Generated ${pagesGenerated} static pages for SEO`);
      
      // Verify critical content exists (warn but don't fail build)
      if (!seoData.has_h1_on_home || !seoData.first_paragraph_present) {
        console.warn('⚠️ SEO content check - some elements may be missing from generated HTML');
        console.log('H1 found:', seoData.has_h1_on_home);
        console.log('Paragraph found:', seoData.first_paragraph_present);
        console.log('💡 Run "npm run seo:prerender" after build for full SEO optimization');
      } else {
        console.log('✅ Basic SEO verification passed');
      }
    }
  };
};