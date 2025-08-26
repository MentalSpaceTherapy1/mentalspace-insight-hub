import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import { addResourceHints } from './utils/imageUtils'

// Initialize performance optimizations
addResourceHints();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
