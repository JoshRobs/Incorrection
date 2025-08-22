import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL || '/',
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@project/types': fileURLToPath(new URL('../packages/types', import.meta.url)), // alias to shared types
    },
  },
  optimizeDeps: {
    include: ['@project/types'],
  },
  server: {
    fs: {
      allow: ['..'], // allow serving files from parent folder
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // optionally remove /api if backend doesn’t expect it
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
