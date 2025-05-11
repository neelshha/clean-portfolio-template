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
  build: {
    assetsInlineLimit: 0, // This ensures font files are not inlined
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name;
          if (name && name.endsWith('.otf')) {
            return 'font/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
}));