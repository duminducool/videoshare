import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/videoshare/', // Set this to your GitHub Pages repo name
  plugins: [react()],
  build: {
    outDir: 'dist', // Output folder for production builds
    assetsDir: 'assets', // Folder for static assets
  },
});
