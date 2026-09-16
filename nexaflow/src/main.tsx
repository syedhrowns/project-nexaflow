import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Automatically detect GitHub Pages repository subpath or root
const getBasename = (): string | undefined => {
  if (typeof window !== 'undefined' && window.location.hostname.endsWith('github.io')) {
    const segments = window.location.pathname.split('/').filter(Boolean);
    if (segments.length > 0) {
      return `/${segments[0]}`;
    }
  }
  const rawBase = import.meta.env.BASE_URL;
  if (rawBase && rawBase.startsWith('/') && rawBase !== '/') {
    return rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;
  }
  return undefined;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={getBasename()}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
