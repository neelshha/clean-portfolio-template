import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip', // Gzip compression
      ext: '.gz',
      deleteOriginFile: false
    }),
    viteCompression({
      algorithm: 'brotliCompress', // Brotli compression
      ext: '.br',
      compressionOptions: { level: 11 },
      deleteOriginFile: false
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});