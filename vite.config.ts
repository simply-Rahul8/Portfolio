import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  assetsInclude: ["src\assets\RY.jpg"],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
