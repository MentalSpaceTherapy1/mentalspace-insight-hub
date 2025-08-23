import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { addResourceHints } from './utils/imageUtils'
import PerformanceOptimizer from './components/PerformanceOptimizer'
import SEOEnhancer from './components/SEOEnhancer'

// Initialize performance optimizations
addResourceHints();

createRoot(document.getElementById("root")!).render(
  <>
    <PerformanceOptimizer />
    <SEOEnhancer />
    <App />
  </>
);
