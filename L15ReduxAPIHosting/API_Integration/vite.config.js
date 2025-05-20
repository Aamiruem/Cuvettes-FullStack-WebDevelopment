import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    jsxImportSource: 'react',
    babel: {
      plugins: ['babel-plugin-macros']
    }
  })],
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})



