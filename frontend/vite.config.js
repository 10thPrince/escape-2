import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import flowbiteReact from "flowbite-react/plugin/vite";

const api = axios.create({
  baseURL: import.meta.VITE_API_URL,
});


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ],
  server: {
    port: 3500,
    proxy: {
      '/api': {
        target: api.baseURL,
        changeOrigin: true
      }
    }
  }
})