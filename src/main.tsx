import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './routers/Router';
//styles
import 'virtual:uno.css';
import './styles/global.css';
import './styles/font.css';
import './styles/reset.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
