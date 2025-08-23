import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'
import { addResourceHints } from './utils/imageUtils'
import PerformanceOptimizer from './components/PerformanceOptimizer'
import SEOEnhancer from './components/SEOEnhancer'
import ServerSideRenderer from './components/ServerSideRenderer'
import CriticalCSS from './components/CriticalCSS'

// Initialize performance optimizations
addResourceHints();

// Progressive hydration with critical CSS
createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ServerSideRenderer>
      <CriticalCSS />
      <PerformanceOptimizer />
      <SEOEnhancer />
      <App />
    </ServerSideRenderer>
  </HelmetProvider>
);
