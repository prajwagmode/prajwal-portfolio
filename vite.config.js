// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // <-- ensures correct asset resolution on Vercel
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})

