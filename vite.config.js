import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'public',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name][extname]'  // чтобы файлы шрифтов не помещались в assets
      }
    }
  }
});