import vercel from 'vite-plugin-vercel';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vike from 'vike/plugin';

export default defineConfig({
  plugins: [vike(), react({}), vercel()],
  build: {
    target: 'es2022',
  },
});
