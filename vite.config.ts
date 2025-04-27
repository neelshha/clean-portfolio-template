import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'production' &&
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 10240,     // only compress files >10 KB
        deleteOriginFile: false,
      }),
    mode === 'production' &&
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        compressionOptions: { level: 11 },
        threshold: 10240,
        deleteOriginFile: false,
      }),
  ].filter(Boolean),
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));