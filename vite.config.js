import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true
  }
})
