import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/c91b2748-e03b-4789-8482-511c41d584db/preview',
  plugins: [react()],
  server: {
    port: 5195,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5195,
    },
  },
})
