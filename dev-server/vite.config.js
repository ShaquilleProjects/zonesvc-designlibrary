import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]__[hash:base64:5]'
    },
    preprocessorOptions: {
      css: {
        includePaths: ['packages/**/*']
      }
    },
    cssModules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]__[hash:base64:5]'
    }
  },
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@zone-ui/*': path.resolve(__dirname, '../packages/*'),
      '@zone-ui/theme-provider': path.resolve(__dirname, '../packages/theme-provider/src'),
      '@zone-ui/button': path.resolve(__dirname, '../packages/button/src'),
      '@zone-ui/input': path.resolve(__dirname, '../packages/input/src'),
      'lucide-react': path.resolve(__dirname, '../node_modules/lucide-react')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  },
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment'
  }
})
