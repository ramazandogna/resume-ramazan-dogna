import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './routers/Router';
import 'virtual:uno.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
