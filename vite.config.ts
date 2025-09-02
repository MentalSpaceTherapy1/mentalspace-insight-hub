import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerenderPlugin from 'vite-plugin-prerender';
import { generateStaticFiles } from './vite-plugins/generate-static-files';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && prerenderPlugin({
      routes: [
        '/',
        '/online-therapy',
        '/couples-therapy', 
        '/teen-therapy',
        '/life-coaching',
        '/get-started',
        '/contact-us',
        '/faq',
        '/conditions/depression',
        '/conditions/anxiety',
        '/conditions/adhd',
        '/conditions/ptsd',
        '/conditions/bipolar-disorder',
        '/conditions/ocd'
      ],
      staticDir: path.join(__dirname, 'dist'),
      outputDir: path.join(__dirname, 'dist'),
    }),
    generateStaticFiles(),
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