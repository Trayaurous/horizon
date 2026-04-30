import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react()
  ],
  base: '/horizon/',
  server: {
    host: true // 允许局域网访问
  }
})