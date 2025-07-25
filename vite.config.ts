import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor'
            }
            if (id.includes('react-router-dom')) {
              return 'router'
            }
            if (id.includes('lucide-react')) {
              return 'icons'
            }
            return 'vendor-misc'
          }
          
          // Split by feature/page
          if (id.includes('/pages/')) {
            const pageName = id.split('/pages/')[1].split('.')[0]
            if (['HomePage', 'ConceptsPage', 'QuizPage'].includes(pageName)) {
              return `page-${pageName.toLowerCase()}`
            }
            return 'pages-misc'
          }
          
          if (id.includes('/data/')) {
            return 'data'
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3000,
    host: true
  },
  preview: {
    port: 3000,
    host: true
  }
})