import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { addResourceHints } from './utils/imageUtils'
import { SecurityUtils } from './utils/encryption'

// Initialize performance optimizations
addResourceHints();

// Initialize security features
if (SecurityUtils.checkSecuritySupport()) {
  console.log('Security features initialized');
} else {
  console.warn('Some security features not supported in this browser');
}

createRoot(document.getElementById("root")!).render(<App />);
