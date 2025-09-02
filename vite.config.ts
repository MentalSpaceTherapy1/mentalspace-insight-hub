import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { generateStaticFiles } from './vite-plugins/generate-static-files';
import prerender from 'vite-plugin-prerender';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    generateStaticFiles(), // Run in all modes to ensure static files are generated
    mode === 'production' && prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
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
      ],
      captureAfterTime: 2000,
      postProcess(renderedRoute: any) {
        // Ensure navigation and footer are present in all rendered pages
        if (!renderedRoute.html.includes('nav') || !renderedRoute.html.includes('footer')) {
          console.warn(`⚠️  Navigation or footer missing in ${renderedRoute.route}`);
        }
        return renderedRoute;
      }
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
  }
}));