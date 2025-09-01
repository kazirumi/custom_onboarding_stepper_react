import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PreviewProvider } from './context/PreviewContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreviewProvider>
      <App />
    </PreviewProvider>
  </StrictMode>,
)
