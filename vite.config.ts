import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsPaths from 'vite-tsconfig-paths'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  plugins: [
    mkcert({
      autoUpgrade: true,
    }),
    react(),
    tsPaths(),
  ],
  server: {
    https: true,
  },
})
