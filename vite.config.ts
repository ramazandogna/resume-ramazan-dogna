import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  build: {
    // One HTML file per route, so a static host can serve /freelance directly
    // instead of needing a rewrite rule. The router takes over from there.
    // Paths are relative to the project root; no node:path needed.
    rollupOptions: {
      input: {
        main: 'index.html',
        freelance: 'freelance/index.html'
      }
    }
  }
});
