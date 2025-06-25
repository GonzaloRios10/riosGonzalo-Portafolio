import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/riosGonzalo-Portafolio/',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
