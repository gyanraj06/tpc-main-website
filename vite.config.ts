import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: { motion: ['gsap', 'lenis'], react: ['react', 'react-dom', 'react-router-dom'] },
      },
    },
  },
});
