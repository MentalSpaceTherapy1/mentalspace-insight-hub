import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { generateStaticFiles } from './vite-plugins/generate-static-files';
// @ts-ignore - vite-plugin-webp doesn't have type definitions
import webp from 'vite-plugin-webp';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    webp({
      // Generate WebP versions of all images
      generateWebp: {
        quality: 80,
      },
      // Also generate original format for fallback
      generateOriginal: true,
    }),
    generateStaticFiles(), // Run in all modes to ensure static files are generated
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