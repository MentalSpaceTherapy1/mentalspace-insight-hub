import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// SSR configuration for server-side rendering
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    ssr: true,
    outDir: 'dist-ssr',
    rollupOptions: {
      input: 'src/entry-server.tsx',
      output: {
        format: 'es',
        entryFileNames: 'entry-server.js'
      }
    }
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
});