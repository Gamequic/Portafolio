import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import "./themes.css";
import App from './App.jsx'

// Contact me button, in all the page
import ContactMe from './components/ContactMe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <ContactMe />
    </BrowserRouter>
  </StrictMode>,
)
