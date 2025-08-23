import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { addResourceHints } from './utils/imageUtils'

// Initialize performance optimizations
addResourceHints();

createRoot(document.getElementById("root")!).render(<App />);
