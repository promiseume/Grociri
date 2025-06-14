// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.tsx';
import { AppContextProvider } from './context/AppContext.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <ThemeProvider>
  <AppContextProvider>
    <App />
    </AppContextProvider>
  </ThemeProvider>
  </BrowserRouter>,
)
