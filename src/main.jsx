import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Supports weights 300-800
import '@fontsource-variable/open-sans/wdth.css';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
