import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: ['react', 'react-router-dom', 'react-i18next', 'ahooks'],
      dts: './src/auto-imports.d.ts',
      // dirs: ['src/layouts', 'src/views'],
      eslintrc: {
        enabled: true,
      },
      defaultExportByFilename: true,
      resolvers: [],
    }),
  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    }
  }
})
