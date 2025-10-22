import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import envCompatible from 'vite-plugin-env-compatible';



  const baseURL= process.env.VITE_API_URL;



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), envCompatible()],
  server: {
    port: 3500,
    proxy: {
      '/api': {
        target: baseURL,
        changeOrigin: true
      }
    }
  }
})